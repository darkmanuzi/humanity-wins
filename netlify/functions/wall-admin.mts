import { getStore } from "@netlify/blobs";
import { timingSafeEqual } from "node:crypto";

type SupportRecord = {
  paymentId: string;
  status: "pending" | "approved" | "rejected";
  paid: boolean;
  amount: string | null;
  currency: string;
  purpose: string;
  wallVisible: boolean;
  anonymous: boolean;
  publicName: string;
  country: string;
  lang: string;
  foundingYear: number;
  createdAt: string;
  approvedAt: string | null;
  rejectedAt: string | null;
};

function authorized(request: Request) {
  const expected = process.env.WALL_ADMIN_TOKEN || "";
  const auth = request.headers.get("authorization") || "";
  const provided = auth.startsWith("Bearer ") ? auth.slice(7) : "";

  if (!expected || !provided) return false;

  const a = Buffer.from(expected);
  const b = Buffer.from(provided);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

async function readAll() {
  const store = getStore("humanity-wins-supporters");
  const { blobs } = await store.list({ prefix: "support/" });

  const rows: SupportRecord[] = [];
  for (const blob of blobs) {
    const record = await store.get(blob.key, {
      type: "json",
      consistency: "strong",
    }) as SupportRecord | null;

    if (record) rows.push(record);
  }

  rows.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
  return rows;
}

export default async (request: Request) => {
  if (!authorized(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const store = getStore("humanity-wins-supporters");

  if (request.method === "GET") {
    try {
      return Response.json({ ok: true, supporters: await readAll() });
    } catch (error) {
      console.error("Wall admin list error", error);
      return Response.json({ error: "Could not load supporters." }, { status: 500 });
    }
  }

  if (request.method === "POST") {
    try {
      const body = await request.json();
      const paymentId = String(body.paymentId || "");
      const action = String(body.action || "");

      if (!paymentId.startsWith("tr_")) {
        return Response.json({ error: "Invalid payment id." }, { status: 400 });
      }

      if (!["approve", "reject"].includes(action)) {
        return Response.json({ error: "Invalid action." }, { status: 400 });
      }

      const key = `support/${paymentId}`;
      const record = await store.get(key, {
        type: "json",
        consistency: "strong",
      }) as SupportRecord | null;

      if (!record) {
        return Response.json({ error: "Supporter not found." }, { status: 404 });
      }

      if (action === "approve") {
        if (!record.paid || !record.wallVisible || record.anonymous || !record.publicName || !record.country) {
          return Response.json({
            error: "This record cannot be published on the Wall."
          }, { status: 400 });
        }

        record.status = "approved";
        record.approvedAt = new Date().toISOString();
        record.rejectedAt = null;
      } else {
        record.status = "rejected";
        record.rejectedAt = new Date().toISOString();
        record.approvedAt = null;
      }

      await store.setJSON(key, record, {
        metadata: {
          status: record.status,
          wallVisible: Boolean(record.wallVisible && !record.anonymous),
          country: record.country || "anonymous",
        }
      });

      console.log("HUMANITY WINS wall moderation", {
        paymentId,
        action,
        status: record.status,
      });

      return Response.json({ ok: true, supporter: record });
    } catch (error) {
      console.error("Wall admin update error", error);
      return Response.json({ error: "Could not update supporter." }, { status: 500 });
    }
  }

  return Response.json({ error: "Method Not Allowed" }, { status: 405 });
};
