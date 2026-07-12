import { NextResponse } from "next/server";

const webhookUrl = process.env.N8N_WEBHOOK_URL;

type DemoPayload = {
  name?: string;
  businessName?: string;
  email?: string;
  phone?: string;
  businessType?: string;
  message?: string;
};

const ipRequests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 60_000;
  const maxRequests = 3;

  const timestamps = ipRequests.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < window);
  ipRequests.set(ip, recent);

  if (recent.length >= maxRequests) return true;
  recent.push(now);
  return false;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment before trying again." },
      { status: 429 },
    );
  }

  let data: DemoPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, businessName, email, phone, businessType, message } = data;

  if (!name || !businessName || !email || !phone || !businessType) {
    return NextResponse.json(
      { error: "Name, business name, email, phone, and business type are required" },
      { status: 400 },
    );
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
