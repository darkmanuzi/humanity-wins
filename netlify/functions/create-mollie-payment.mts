const MOLLIE_API = "https://api.mollie.com/v2";

export default async (request: Request) => {
  if (request.method !== "POST") {
    return Response.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  try {
    // Netlify Serverless Functions expose dashboard environment variables via process.env.
    const apiKey = process.env.MOLLIE_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "MOLLIE_API_KEY is not configured for Functions." }, { status: 500 });
    }

    const body = await request.json();
    const amount = Number(body.amount);

    if (!Number.isFinite(amount) || amount < 1 || amount > 100000) {
      return Response.json({ error: "Invalid support amount." }, { status: 400 });
    }

    const origin = (process.env.URL || new URL(request.url).origin).replace(/\/$/, "");

    const payload = {
      amount: { currency: "EUR", value: amount.toFixed(2) },
      description: "HUMANITY WINS – Project Support",
      redirectUrl: `${origin}/support-success`,
      webhookUrl: `${origin}/.netlify/functions/mollie-webhook`,
      metadata: {
        project: "HUMANITY WINS",
        purpose: "project_support",
        wallVisible: Boolean(body.wallVisible),
        anonymous: Boolean(body.anonymous),
        publicName: body.anonymous ? "" : String(body.publicName || "").slice(0, 100),
        country: body.anonymous ? "" : String(body.country || "").slice(0, 100),
        lang: String(body.lang || "de").slice(0, 5)
      }
    };

    const res = await fetch(`${MOLLIE_API}/payments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const raw = await res.text();
    let payment: any = {};
    try { payment = raw ? JSON.parse(raw) : {}; } catch {}

    if (!res.ok) {
      console.error("Mollie create payment failed", res.status, raw);
      return Response.json(
        { error: payment?.detail || payment?.title || `Mollie returned HTTP ${res.status}.` },
        { status: 502 }
      );
    }

    const checkoutUrl = payment?._links?.checkout?.href;
    if (!checkoutUrl) {
      console.error("Mollie response had no checkout URL", raw);
      return Response.json({ error: "Mollie returned no checkout URL." }, { status: 502 });
    }

    return Response.json({ checkoutUrl });
  } catch (error) {
    console.error("Support checkout error", error);
    return Response.json({
      error: error instanceof Error ? error.message : "Could not start checkout."
    }, { status: 500 });
  }
};
