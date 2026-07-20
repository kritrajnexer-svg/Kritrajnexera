import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;
const hasRedis = !!(url && token);

if (!hasRedis) {
  console.warn(
    "UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN not set — rate limiting disabled (fail-open).",
  );
}

function noop() {
  return {
    limit: async (_: string) =>
      ({ success: true, remaining: 999, reset: 0 }) as const,
  } as unknown as Ratelimit;
}

const redis = hasRedis ? new Redis({ url: url!, token: token! }) : null;

export const contactLimiter: Ratelimit = hasRedis
  ? new Ratelimit({
      redis: redis!,
      limiter: Ratelimit.slidingWindow(5, "60 s"),
      prefix: "ratelimit:contact",
    })
  : noop();

export const demoLimiter: Ratelimit = hasRedis
  ? new Ratelimit({
      redis: redis!,
      limiter: Ratelimit.slidingWindow(3, "60 s"),
      prefix: "ratelimit:demo",
    })
  : noop();

export async function checkRateLimit(
  limiter: Ratelimit,
  identifier: string,
): Promise<{ success: boolean; remaining: number; reset: number }> {
  return limiter.limit(identifier);
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}
