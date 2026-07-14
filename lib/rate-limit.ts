/**
 * In-memory IP-based rate limiter.
 *
 * NOTE: Vercel serverless functions can cold-start in different regions,
 * each with a fresh Map. This is a lightweight burst-protection layer,
 * NOT a hard rate limit across all invocations. Upgrade to Upstash Redis
 * if production-grade global rate limiting is needed.
 */

const ipRequests = new Map<string, number[]>();

export function isRateLimited(
  ip: string,
  limit = 5,
  windowMs = 60_000,
): boolean {
  const now = Date.now();
  const timestamps = ipRequests.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < windowMs);
  ipRequests.set(ip, recent);

  if (recent.length >= limit) return true;
  recent.push(now);
  return false;
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}
