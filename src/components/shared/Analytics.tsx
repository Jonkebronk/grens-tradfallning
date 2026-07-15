"use client";

import Script from "next/script";

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export function Analytics() {
  if (!PLAUSIBLE_DOMAIN) return null;

  return (
    <Script
      defer
      data-domain={PLAUSIBLE_DOMAIN}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}

// Track custom events via Plausible
export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window !== "undefined" && "plausible" in window) {
    (window as unknown as { plausible: (event: string, opts?: { props: Record<string, string> }) => void }).plausible(
      action,
      { props: { category, label: label || "" } }
    );
  }
}
