"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

/* Count-up hook — animasi angka dari target default langsung render (SSR-safe), lalu animate jika inView */
function useCountUp(target: number, active: boolean, duration = 1400): number {
  const [value, setValue] = useState(target); // Default target agar tidak 0 di SSR / snapshot
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    setValue(0);
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(target * eased));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [active, target, duration]);

  return value;
}

function StatItem({ target, suffix, label, accent }: { target: number; suffix: string; label: string; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useCountUp(target, inView);

  return (
    <div ref={ref} className="text-center px-2 min-w-0">
      <div className="stat-number inline-flex items-baseline justify-center whitespace-nowrap leading-none font-mono">
        <span className="text-[36px] md:text-[46px] font-extrabold tracking-[-0.04em] text-gray-950 dark:text-white">{value}</span>
        <span className={`font-bold tracking-[-0.02em] ${accent} ${suffix === "/100" ? "text-[18px] md:text-[22px] ml-0.5" : "text-[22px] md:text-[26px] ml-0.5"}`}>
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { t } = useI18n();
  return (
    <section className="py-10 bg-[var(--background)] px-5 md:px-7 border-b swiss-line transition-colors duration-200">
      <div className="max-w-[1320px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="pop-card p-6 flex flex-col justify-between"><span aria-hidden="true" className="mx-auto mb-4 block h-2.5 w-12 rounded-full pop-tint-lime" /><StatItem target={50} suffix="+" label={t.stats.proyek} accent="text-[var(--accent)]" /></div>
        <div className="pop-card p-6 flex flex-col justify-between"><span aria-hidden="true" className="mx-auto mb-4 block h-2.5 w-12 rounded-full pop-tint-pink" /><StatItem target={98} suffix="/100" label={t.stats.lighthouse} accent="text-[var(--pop-pink)]" /></div>
        <div className="pop-card p-6 flex flex-col justify-between"><span aria-hidden="true" className="mx-auto mb-4 block h-2.5 w-12 rounded-full pop-tint-yellow" /><StatItem target={3} suffix=" Hari" label={t.stats.pengerjaan} accent="text-[var(--pop-yellow)]" /></div>
        <div className="pop-card p-6 flex flex-col justify-between"><span aria-hidden="true" className="mx-auto mb-4 block h-2.5 w-12 rounded-full pop-tint-violet" /><StatItem target={100} suffix="%" label={t.stats.pengalaman || "Hak Milik Kode"} accent="text-[var(--pop-violet)]" /></div>
      </div>
    </section>
  );
}
