import { createPool } from "@vercel/postgres";

function getPool() {
  const url = process.env.POSTGRES_URL ?? process.env.DATABASE_URL;
  if (!url) return null;
  return createPool({ connectionString: url });
}

const pool = getPool();

export { pool as db };
