"use client";

import { useReportWebVitals } from "next/web-vitals";

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

/**
 * Client-side Core Web Vitals SLI collector.
 * Metrics are sent through the existing GA4 dataLayer; no public ingestion
 * endpoint, application log, IP, user ID, or user-controlled string is stored.
 */
export default function WebVitals() {
  useReportWebVitals((metric) => {
    const gtag = (window as GtagWindow).gtag;
    if (!gtag) return;

    gtag("event", metric.name, {
      event_category: "Web Vitals",
      event_label: metric.id,
      value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
      non_interaction: true,
      metric_rating: metric.rating,
    });
  });

  return null;
}
