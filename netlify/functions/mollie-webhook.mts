const MOLLIE_API = "https://api.mollie.com/v2";

export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const apiKey = process.env.MOLLIE_API_KEY;
  if (!apiKey) return new Response("Missing API key", { status: 500 });

  try {
    const contentType = request.headers.get("content-type") || "";
    let id: string | null = null;

    if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      const value = form.get("id");
      id = typeof value === "string" ? value : null;
    } else {
      const text = await request.text();
      id = new URLSearchParams(text).get("id");
    }

    if (!id || !id.startsWith("tr_")) {
      return new Response("Invalid payment id", { status: 400 });
    }

    const res = await fetch(`${MOLLIE_API}/payments/${encodeURIComponent(id)}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    if (!res.ok) return new Response("Could not verify payment", { status: 502 });

    const payment = await res.json();
    if (payment.status === "paid") {
      console.log("HUMANITY WINS support paid", {
        id: payment.id,
        amount: payment.amount,
        metadata: payment.metadata,
      });
      // Persistence of confirmed payment / Wall entry can be added next.
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Mollie webhook error", error);
    return new Response("Webhook processing failed", { status: 500 });
  }
};
