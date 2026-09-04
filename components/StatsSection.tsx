"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

/* Count-up hook — animasi angka dari 0 ke target pas masuk viewport */
function useCountUp(target: number, active: boolean, duration = 1600): number {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo biar cepet di awal, smooth di akhir
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(target * eased));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [active, target, duration]);

  return value;
}

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useCountUp(target, inView);

  return (
    <div ref={ref} className="text-center px-2 sm:px-4 min-w-0">
      <div className="stat-number inline-flex items-baseline justify-center whitespace-nowrap leading-none bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
        <span className="text-[38px] md:text-[50px] font-extrabold tracking-[-0.04em]">{value}</span>
        <span className={`font-bold tracking-[-0.02em] ${suffix === "/100" ? "text-[18px] md:text-[22px] ml-0.5" : "text-[24px] md:text-[30px] ml-0.5"}`}>
          {suffix}
        </span>
      </div>
      <div className="mt-2 text-[11px] sm:text-[12px] md:text-[13px] font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const { t } = useI18n();
  return (
    <section className="py-8 bg-[var(--background)] px-5 md:px-7 border-b swiss-line transition-colors duration-200">
      <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-4 border-l swiss-line">
        <div className="border-r border-b md:border-b-0 swiss-line py-5 px-4"><StatItem target={50} suffix="+" label={t.stats.proyek} /></div>
        <div className="border-r border-b md:border-b-0 swiss-line py-5 px-4"><StatItem target={98} suffix="/100" label={t.stats.lighthouse} /></div>
        <div className="border-r swiss-line py-5 px-4"><StatItem target={3} suffix=" hari" label={t.stats.pengerjaan} /></div>
        <div className="border-r swiss-line py-5 px-4"><StatItem target={3} suffix="+ thn" label={t.stats.pengalaman} /></div>
      </div>
    </section>
  );
}
