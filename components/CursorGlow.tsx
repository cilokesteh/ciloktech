"use client";
import { useEffect, useRef, useState } from "react";

/**
 * CursorGlow — dot + glow yang ngikutin cursor (desktop only, pointer:fine).
 * Hidden di touch device. Menghormati prefers-reduced-motion.
 */
export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let gx = 0, gy = 0;       // glow position (lag)
    let tx = 0, ty = 0;        // target
    let raf: number | null = null;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
      }
      if (!raf) loop();
    };

    const loop = () => {
      raf = requestAnimationFrame(loop);
      // lerp glow biar geraknya smooth lag dikit
      gx += (tx - gx) * 0.12;
      gy += (ty - gy) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
      }
      if (Math.abs(tx - gx) < 0.5 && Math.abs(ty - gy) < 0.5 && raf) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* glow besar */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed z-[60] w-[300px] h-[300px] rounded-full opacity-60 dark:opacity-80"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)",
          top: 0, left: 0,
          mixBlendMode: "plus-lighter",
        }}
      />
      {/* dot kecil */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed z-[61] w-2 h-2 rounded-full bg-cyan-500/70 dark:bg-cyan-400/80 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
        style={{ top: 0, left: 0 }}
      />
    </>
  );
}
