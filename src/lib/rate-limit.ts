/**
 * Basic in-memory sliding window rate limiter.
 *
 * Scope: one serverless instance. It stops casual form abuse and repeated
 * submissions, not a distributed attack. If the site later needs a hard
 * guarantee across instances, swap the map for Vercel KV or Upstash and keep
 * this signature.
 */

type Hit = number[];

const WINDOW_MS = 10 * 60 * 1000; // ten minutes
const MAX_REQUESTS = 5;
const MAX_KEYS = 5000;

const hits = new Map<string, Hit>();

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

export function rateLimit(key: string): RateLimitResult {
  const now = Date.now();
  const cutoff = now - WINDOW_MS;

  // Keep the map from growing without bound on a long lived instance.
  if (hits.size > MAX_KEYS) {
    for (const [existingKey, timestamps] of hits) {
      if (timestamps.every((time) => time <= cutoff)) {
        hits.delete(existingKey);
      }
    }
  }

  const recent = (hits.get(key) ?? []).filter((time) => time > cutoff);

  if (recent.length >= MAX_REQUESTS) {
    const oldest = recent[0];
    hits.set(key, recent);
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(
        1,
        Math.ceil((oldest + WINDOW_MS - now) / 1000),
      ),
    };
  }

  recent.push(now);
  hits.set(key, recent);

  return {
    allowed: true,
    remaining: MAX_REQUESTS - recent.length,
    retryAfterSeconds: 0,
  };
}

/** Best effort client address, behind Vercel's proxy. */
export function clientKey(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return headers.get("x-real-ip")?.trim() || "unknown";
}
