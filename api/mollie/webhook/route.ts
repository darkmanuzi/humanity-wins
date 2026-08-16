import { NextRequest, NextResponse } from "next/server";

const MOLLIE_API = "https://api.mollie.com/v2";

export async function POST(request: NextRequest) {
  const apiKey = process.env.MOLLIE_API_KEY;
  if (!apiKey) return new NextResponse("Missing API key", { status: 500 });

  const form = await request.formData();
  const id = form.get("id");
  if (typeof id !== "string" || !id.startsWith("tr_"))
    return new NextResponse("Invalid payment id", { status: 400 });

  const res = await fetch(`${MOLLIE_API}/payments/${encodeURIComponent(id)}`, {
    headers: { Authorization: `Bearer ${apiKey}` }, cache: "no-store"
  });
  if (!res.ok) return new NextResponse("Could not verify payment", { status: 502 });
  const payment = await res.json();

  if (payment.status === "paid") {
    console.log("HUMANITY WINS support paid", {
      id: payment.id, amount: payment.amount, metadata: payment.metadata
    });
    // Next step: persist confirmed payment + optional Wall entry in a database.
  }
  return new NextResponse("OK", { status: 200 });
}
