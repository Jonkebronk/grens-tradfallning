"use client";

// Analytics disabled — no tracking, no cookies
export function Analytics() {
  return null;
}

// No-op so existing trackEvent imports don't break
export function trackEvent(_action: string, _category: string, _label?: string) {
  // intentionally empty
}
