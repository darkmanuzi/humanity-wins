import { getStore } from "@netlify/blobs";

const MOLLIE_API = "https://api.mollie.com/v2";

export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const apiKey = process.env.MOLLIE_API_KEY;
    if (!apiKey) {
      console.error("MOLLIE_API_KEY missing");
      return new Response("Missing API key", { status: 500 });
    }

    const form = await request.formData();
    const id = form.get("id");

    if (typeof id !== "string" || !id.startsWith("tr_")) {
      return new Response("Invalid payment id", { status: 400 });
    }

    const res = await fetch(`${MOLLIE_API}/payments/${encodeURIComponent(id)}`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    });

    if (!res.ok) {
      console.error("Could not verify Mollie payment", res.status, await res.text());
      return new Response("Could not verify payment", { status: 502 });
    }

    const payment = await res.json();

    if (payment.status === "paid") {
      const metadata = payment.metadata || {};
      const wantsWall = Boolean(metadata.wallVisible) && !Boolean(metadata.anonymous);

      const record = {
        paymentId: payment.id,
        status: "pending",
        paid: true,
        amount: payment.amount?.value || null,
        currency: payment.amount?.currency || "EUR",
        purpose: metadata.purpose || "project_support",
        wallVisible: Boolean(metadata.wallVisible),
        anonymous: Boolean(metadata.anonymous),
        publicName: wantsWall ? String(metadata.publicName || "").trim().slice(0, 100) : "",
        country: wantsWall ? String(metadata.country || "").trim().slice(0, 100) : "",
        lang: String(metadata.lang || "de").slice(0, 5),
        foundingYear: 2026,
        createdAt: new Date().toISOString(),
        approvedAt: null,
        rejectedAt: null
      };

      const store = getStore({
        name: "humanity-wins-supporters",
        consistency: "strong"
      });

      const result = await store.setJSON(`support/${payment.id}`, record, {
        onlyIfNew: true,
        metadata: {
          status: "pending",
          wallVisible: wantsWall,
          country: record.country || "anonymous"
        }
      });

      console.log("HUMANITY WINS support stored", {
        id: payment.id,
        stored: result.modified,
        status: "pending",
        wallVisible: wantsWall,
        publicName: record.publicName,
        country: record.country
      });
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Mollie webhook error", error);
    return new Response("Webhook error", { status: 500 });
  }
};
