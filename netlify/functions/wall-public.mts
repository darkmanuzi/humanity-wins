import { getStore } from "@netlify/blobs";

type SupportRecord = {
  status: string;
  paid: boolean;
  wallVisible: boolean;
  anonymous: boolean;
  publicName: string;
  country: string;
  foundingYear: number;
  approvedAt: string | null;
};

export default async (request: Request) => {
  if (request.method !== "GET") {
    return Response.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  try {
    const store = getStore("humanity-wins-supporters");
    const { blobs } = await store.list({ prefix: "support/" });

    const people: Array<{
      name: string;
      country: string;
      foundingYear: number;
      approvedAt: string | null;
    }> = [];

    for (const blob of blobs) {
      const record = await store.get(blob.key, {
        type: "json",
        consistency: "strong",
      }) as SupportRecord | null;

      if (
        record?.paid &&
        record.status === "approved" &&
        record.wallVisible &&
        !record.anonymous &&
        record.publicName &&
        record.country
      ) {
        people.push({
          name: record.publicName,
          country: record.country,
          foundingYear: record.foundingYear || 2026,
          approvedAt: record.approvedAt || null,
        });
      }
    }

    people.sort((a, b) =>
      (a.approvedAt || "").localeCompare(b.approvedAt || "")
    );

    return Response.json({
      ok: true,
      count: people.length,
      supporters: people,
    }, {
      headers: {
        "Cache-Control": "public, max-age=60, s-maxage=60",
      }
    });
  } catch (error) {
    console.error("Public wall error", error);
    return Response.json({ error: "Could not load Wall of Humanity." }, { status: 500 });
  }
};
