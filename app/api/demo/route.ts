import { NextResponse } from "next/server";
import { isRateLimited, getClientIp } from "@/lib/rate-limit";
import { demoSchema } from "@/lib/schemas";
import { insertSubmission } from "@/lib/queries";

const webhookUrl = process.env.N8N_WEBHOOK_URL;

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip, 3)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment before trying again." },
      { status: 429 },
    );
  }

  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = demoSchema.safeParse(data);
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return NextResponse.json({ error: "Validation failed", fields: errors }, { status: 400 });
  }

  const { name, businessName, email, phone, businessType, message } = parsed.data;

  // Persist submission first
  try {
    await insertSubmission({
      type: "demo",
      name,
      email,
      company: businessName,
      message: message ?? null,
      businessType,
      rawPayload: { name, businessName, email, phone, businessType, message },
    });
  } catch (dbErr) {
    console.error("DB insert failed (demo):", dbErr);
  }

  if (!webhookUrl) {
    return NextResponse.json({
      ok: true,
      mode: "demo",
      message: "Demo mode — lead simulated successfully.",
    });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        businessName,
        email,
        phone,
        businessType,
        message: message ?? "",
        source: "live-demo",
        timestamp: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      console.error("n8n webhook returned non-ok:", res.status);
      return NextResponse.json({
        ok: true,
        mode: "demo",
        message: "Webhook relay unavailable. Lead simulated in demo mode.",
      });
    }

    return NextResponse.json({ ok: true, mode: "live" });
  } catch (err) {
    console.error("n8n webhook fetch failed:", err);
    return NextResponse.json({
      ok: true,
      mode: "demo",
      message: "Webhook relay unavailable. Lead simulated in demo mode.",
    });
  }
}
