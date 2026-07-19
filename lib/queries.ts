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
  // @vercel/postgres removed — DB is dormant. Re-enable when provisioned.
  console.warn("DB client not available — skipping insert");
  return undefined;
}

export async function updateEmailStatus(id: number, emailSent: boolean, emailError?: string | null) {
  if (!db) return;
  // @vercel/postgres removed — DB is dormant. Re-enable when provisioned.
  console.warn("DB client not available — skipping update");
}