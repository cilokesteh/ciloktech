"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
    <div ref={ref} className="text-center px-4">
      <div className="stat-number text-[40px] md:text-[52px] font-extrabold tracking-[-0.04em] leading-none bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
        {value}{suffix}
      </div>
      <div className="mt-2 text-[12px] md:text-[13px] font-semibold tracking-wide uppercase text-gray-500 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-10 md:py-14 bg-white dark:bg-[#08080b] px-6 relative overflow-hidden transition-colors duration-300">
      {/* aurora tipis di belakang stats */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-blob aurora-anim top-[30%] left-[35%] w-[380px] h-[200px] bg-gradient-to-r from-cyan-200/25 via-indigo-200/20 to-fuchsia-100/15 dark:from-cyan-500/[0.05] dark:via-indigo-500/[0.04] dark:to-transparent" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.2, ease: [0.12, 1, 0.22, 1] }}
        className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 divide-x-0 md:divide-x md:divide-gray-100 dark:md:divide-white/5"
      >
        <StatItem target={50} suffix="+" label="Proyek Selesai" />
        <StatItem target={98} suffix="/100" label="Lighthouse Score" />
        <StatItem target={3} suffix=" hari" label="Rata-rata Pengerjaan" />
        <StatItem target={3} suffix="+ thn" label="Pengalaman" />
      </motion.div>
    </section>
  );
}
