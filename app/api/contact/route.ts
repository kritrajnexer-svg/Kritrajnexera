import { NextResponse } from "next/server";
import { Resend } from "resend";
import { isRateLimited, getClientIp } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/schemas";
import { insertSubmission, updateEmailStatus } from "@/lib/queries";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isRateLimited(ip, 5)) {
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

  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return NextResponse.json({ error: "Validation failed", fields: errors }, { status: 400 });
  }

  const { name, email, company, budget, message } = parsed.data;

  // Persist submission first — lead captured even if email fails
  let submissionId: number | undefined;
  try {
    const row = await insertSubmission({
      type: "contact",
      name,
      email,
      company: company ?? null,
      message,
      businessType: budget ?? null,
      rawPayload: { name, email, company, budget, message },
    });
    submissionId = row?.id;
  } catch (dbErr) {
    console.error("DB insert failed (contact):", dbErr);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    console.error("Missing Resend env vars.");
    if (submissionId) {
      await updateEmailStatus(submissionId, false, "Resend not configured").catch(() => {});
    }
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

    if (submissionId) {
      await updateEmailStatus(submissionId, true).catch(() => {});
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend send failed:", err);
    if (submissionId) {
      await updateEmailStatus(submissionId, false, err instanceof Error ? err.message : "Unknown error").catch(() => {});
    }
    return NextResponse.json(
      { error: "Failed to send email. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
