function getPool() {
  const url = process.env.POSTGRES_URL ?? process.env.DATABASE_URL;
  if (!url) return null;
  // @vercel/postgres removed — DB is dormant. Add back when provisioned.
  return null;
}

const pool = getPool();

export { pool as db };