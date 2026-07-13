import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Contact form email handler.
 * Uses Resend (simplest reliable option for Next.js on Vercel).
 *
 * Required env vars (set in Vercel project settings):
 *   RESEND_API_KEY  — your Resend API key
 *   CONTACT_TO      — email that receives the enquiries
 *   CONTACT_FROM    — verified sender (e.g. onboarding@resend.dev for testing,
 *                     or your domain once verified)
 *
 * Until keys are set, the route returns 503 with a clear message.
 */

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  message?: string;
};

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, company, budget, message } = data;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    console.error("Missing Resend env vars. Set RESEND_API_KEY, CONTACT_TO, CONTACT_FROM.");
    return NextResponse.json(
      { error: "Email service is not configured yet. Please reach us directly at kritrajnexera@gmail.com" },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        `Budget: ${budget || "—"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend send failed:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
