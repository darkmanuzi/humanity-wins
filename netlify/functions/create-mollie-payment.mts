const MOLLIE_API = "https://api.mollie.com/v2";

function getSiteUrl(request: Request) {
  const configured = process.env.URL || process.env.DEPLOY_PRIME_URL;
  if (configured) return configured.replace(/\/$/, "");
  return new URL(request.url).origin.replace(/\/$/, "");
}

export default async (request: Request) => {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed." }, { status: 405 });
  }

  try {
    const apiKey = process.env.MOLLIE_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "MOLLIE_API_KEY is not configured." }, { status: 500 });
    }

    const body = await request.json();
    const amount = Number(body.amount);
    if (!Number.isFinite(amount) || amount < 1 || amount > 100000) {
      return Response.json({ error: "Invalid support amount." }, { status: 400 });
    }

    const origin = getSiteUrl(request);
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
        lang: String(body.lang || "de").slice(0, 5),
      },
    };

    const res = await fetch(`${MOLLIE_API}/payments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const payment = await res.json();
    if (!res.ok) {
      console.error("Mollie create payment failed", payment);
      return Response.json({ error: "Mollie could not create the payment." }, { status: 502 });
    }

    const checkoutUrl = payment?._links?.checkout?.href;
    if (!checkoutUrl) {
      return Response.json({ error: "Mollie returned no checkout URL." }, { status: 502 });
    }

    return Response.json({ checkoutUrl });
  } catch (error) {
    console.error("Support checkout error", error);
    return Response.json({ error: "Could not start checkout." }, { status: 500 });
  }
};
