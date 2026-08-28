"use client";
import { useEffect } from "react";

/**
 * SpotlightVars — delegated mousemove that feeds --mx/--my CSS vars to the
 * hovered .uiverse-card so its ::after renders a cursor-tracking spotlight.
 * Zero React re-renders: writes style props directly, rAF-throttled.
 * Gated to fine pointers without reduced motion.
 */
export default function SpotlightVars() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let raf = 0;
    let lastEvent: MouseEvent | null = null;

    const apply = () => {
      raf = 0;
      const e = lastEvent;
      if (!e) return;
      const card = (e.target as Element | null)?.closest?.(".uiverse-card") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${(((e.clientX - r.left) / r.width) * 100).toFixed(2)}%`);
      card.style.setProperty("--my", `${(((e.clientY - r.top) / r.height) * 100).toFixed(2)}%`);
    };

    const onMove = (e: MouseEvent) => {
      lastEvent = e;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      document.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
