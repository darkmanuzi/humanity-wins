import { getStore } from "@netlify/blobs";

export default async (request: Request) => {
  if (request.method !== "GET") {
    return Response.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  try {
    const store = getStore({
      name: "humanity-wins-supporters",
      consistency: "strong"
    });

    const { blobs } = await store.list({ prefix: "support/" });

    return Response.json({
      ok: true,
      count: blobs.length,
      note: "Storage is active. Supporter data is not exposed by this diagnostic endpoint."
    });
  } catch (error) {
    console.error("Wall storage check failed", error);
    return Response.json({
      ok: false,
      error: error instanceof Error ? error.message : "Storage check failed"
    }, { status: 500 });
  }
};
