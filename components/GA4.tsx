"use client";

import { useEffect } from "react";

type DataLayer = unknown[] & { push: (...args: unknown[]) => void };

/**
 * GA4 — Google Analytics 4 tag loader.
 * Measurement ID dari NEXT_PUBLIC_GA_ID (env). Tidak render apa-apa kalau kosong.
 * Dipasang sekali di RootLayout; gtag.js dimuat async biar nggak blokir LCP.
 */
export default function GA4() {
  useEffect(() => {
    // Measurement ID ciloktech-web (Firebase project ciloktech-website).
    // Public ID — GA measurement ID selalu tampil di HTML public. Bukan secret.
    const id = process.env.NEXT_PUBLIC_GA_ID || "G-5NZBMX2RRF";
    if (!id) return;

    const w = window as unknown as { dataLayer?: DataLayer; gtag?: (...args: unknown[]) => void };
    // 1. Inisialisasi dataLayer
    w.dataLayer = w.dataLayer || ([] as unknown as DataLayer);
    function gtag(...args: unknown[]) {
      w.dataLayer!.push(args);
    }
    w.gtag = gtag;
    gtag("js", new Date());
    gtag("config", id, { anonymize_ip: true });

    // 2. Muat gtag.js saat idle — 150KB parser/main-thread cost ditunda
    //    setelah interaksi awal (dataLayer queue tetap menangkap event).
    const load = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
      document.head.appendChild(script);
    };
    if ("requestIdleCallback" in window) {
      (window as unknown as { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback?.(
        () => setTimeout(load, 500)
      );
    } else {
      setTimeout(load, 1200);
    }
  }, []);

  return null;
}
