function getPool() {
  const url = process.env.POSTGRES_URL ?? process.env.DATABASE_URL;
  if (!url) return null;
  // ponytail: real pool via @vercel/postgres when DB provisioned
  return null;
}

const pool: { sql: (...args: unknown[]) => Promise<{ rows: unknown[] }> } | null = getPool();

export { pool as db };
