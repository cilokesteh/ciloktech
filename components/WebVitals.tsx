"use client";

import { useReportWebVitals } from "next/web-vitals";

type VitalMetric = {
  id: string;
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  navigationType: string;
};

/**
 * Client-side SLI collector for Core Web Vitals.
 * Uses sendBeacon so measurement never blocks navigation or rendering.
 */
export default function WebVitals() {
  useReportWebVitals((metric) => {
    const payload: VitalMetric = {
      id: metric.id,
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      navigationType: metric.navigationType,
    };

    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/vitals", body);
      return;
    }

    void fetch("/api/vitals", {
      method: "POST",
      body,
      headers: { "content-type": "application/json" },
      keepalive: true,
    }).catch(() => undefined);
  });

  return null;
}
