const MOLLIE_API = "https://api.mollie.com/v2";

export default async (request: Request) => {
  if (request.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  try {
    const apiKey = process.env.MOLLIE_API_KEY;
    if (!apiKey) return new Response("Missing API key", { status: 500 });

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
      console.log("HUMANITY WINS support paid", {
        id: payment.id,
        amount: payment.amount,
        metadata: payment.metadata
      });
      // Intentionally no automatic Wall publication yet.
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Mollie webhook error", error);
    return new Response("Webhook error", { status: 500 });
  }
};
