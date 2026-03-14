/**
 * Analytics abstraction layer.
 *
 * Swap the implementation to use any provider:
 * Vercel Analytics, Plausible, PostHog, Google Analytics, etc.
 *
 * Usage:
 *   import { track } from "@/lib/analytics";
 *   track("signup_clicked", { plan: "pro" });
 */

type EventProperties = Record<string, string | number | boolean>;

/**
 * Track a custom event. No-ops if no provider is configured.
 */
export function track(event: string, properties?: EventProperties): void {
  if (typeof window === "undefined") return;

  // --- Vercel Analytics ---
  // import { track as vercelTrack } from "@vercel/analytics";
  // vercelTrack(event, properties);

  // --- Plausible ---
  // (window as any).plausible?.(event, { props: properties });

  // --- Google Analytics (gtag) ---
  // (window as any).gtag?.("event", event, properties);

  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log(`[analytics] ${event}`, properties);
  }
}

/**
 * Identify a user. No-ops if no provider is configured.
 */
export function identify(userId: string, traits?: EventProperties): void {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV === "development") {
    console.log(`[analytics] identify: ${userId}`, traits);
  }
}
