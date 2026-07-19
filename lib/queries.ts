import { db } from "./db";

type SubmissionInput = {
  type: "contact" | "demo";
  name: string;
  email: string;
  company?: string | null;
  message?: string | null;
  businessType?: string | null;
  rawPayload: Record<string, unknown>;
};

export async function insertSubmission(input: SubmissionInput) {
  if (!db) {
    console.warn("DATABASE_URL not set — skipping DB insert");
    return undefined;
  }
  const { rows } = await db.sql`
    INSERT INTO submissions (type, name, email, company, message, business_type, raw_payload)
    VALUES (${input.type}, ${input.name}, ${input.email}, ${input.company ?? null}, ${input.message ?? null}, ${input.businessType ?? null}, ${JSON.stringify(input.rawPayload)}::jsonb)
    RETURNING id
  `;
  return rows[0] as { id: number } | undefined;
}

export async function updateEmailStatus(id: number, emailSent: boolean, emailError?: string | null) {
  if (!db) return;
  await db.sql`
    UPDATE submissions
    SET email_sent = ${emailSent}, email_error = ${emailError ?? null}
    WHERE id = ${id}
  `;
}
