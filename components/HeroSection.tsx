"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

export default function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative bg-[var(--background)] pt-24 pb-14 md:pt-32 md:pb-24 px-5 md:px-7 overflow-hidden border-b swiss-line transition-colors duration-200">
      <div className="absolute inset-0 -z-10 bg-grid opacity-90" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/15 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/15 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="flex flex-col justify-between space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Pill Tags Modern */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] px-3.5 py-1.5 rounded-full border border-sky-500/30 dark:border-cyan-400/30 bg-sky-500/10 dark:bg-cyan-400/10 text-[var(--accent-text)] tech-glow-subtle">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                <span>Slot Q4 / Oktober Terbuka</span>
              </div>
              <div className="inline-flex items-center font-mono text-[10.5px] uppercase tracking-wider px-3 py-1 rounded-full border swiss-line bg-[var(--card)] text-gray-500 dark:text-gray-400">
                ⚡ 100% Direct with Builder
              </div>
            </div>

            <h1 className="text-[42px] sm:text-[56px] lg:text-[76px] font-extrabold tracking-[-0.05em] leading-[0.94] text-gray-900 dark:text-white">
              {t.hero.headline1}<br />
              <span className="text-gray-500 dark:text-gray-400">{t.hero.headline2}</span><br />
              {t.hero.tapi} <span className="text-[var(--accent-text)]">{t.hero.ngasilinCuan}</span>
            </h1>

            <p className="text-[15.5px] sm:text-[17.5px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-[620px]">
              {t.hero.desc}
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t swiss-line">
            <a
              href="https://t.me/ciloktechcsbot"
              target="_blank"
              rel="noopener noreferrer"
              className="uiverse-button px-8 py-4 bg-[var(--accent)] text-gray-950 font-mono text-[12px] font-extrabold uppercase tracking-[0.08em] flex items-center justify-center gap-2 rounded-full shadow-[0_4px_20px_rgba(42,147,224,0.35)] hover:shadow-[0_6px_28px_rgba(42,147,224,0.5)] hover:opacity-95 transition"
            >
              <span>{t.hero.ctaTelegram}</span>
              <span className="text-[16px]">↗</span>
            </a>

            <div className="flex gap-2">
              <a
                href="/demo"
                className="px-5 py-3.5 border swiss-line bg-[var(--card)] hover:border-[var(--accent)] text-gray-900 dark:text-white font-mono text-[11px] font-bold uppercase tracking-[0.06em] rounded-full flex items-center justify-center transition"
              >
                🎮 Demo Live
              </a>
              <a
                href="#portofolio"
                className="px-5 py-3.5 border swiss-line bg-[var(--card)] hover:border-[var(--accent)] text-gray-900 dark:text-white font-mono text-[11px] font-bold uppercase tracking-[0.06em] rounded-full flex items-center justify-center transition"
              >
                Karya →
              </a>
            </div>
          </div>
        </div>

        {/* Futuristic 3D Emblem Showcase Card */}
        <div
          className="relative group p-6 sm:p-8 rounded-3xl border border-sky-500/20 dark:border-cyan-400/25 bg-gradient-to-b from-sky-500/5 via-[var(--card)] to-[var(--card)] tech-panel shadow-2xl flex flex-col items-center text-center overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 my-4 flex items-center justify-center">
            {/* Ambient halo ring */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl group-hover:scale-110 transition duration-500" />
            <Image
              src="/logo-mark-512.png"
              alt="CilokTech 3D Cyber Emblem"
              width={224}
              height={224}
              priority
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(42,147,224,0.4)] group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="w-full pt-4 border-t swiss-line flex items-center justify-between font-mono text-[11px] text-gray-800 dark:text-gray-200">
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              SYSTEM OPERATIONAL
            </span>
            <span className="text-sky-900 dark:text-cyan-300 font-extrabold uppercase tracking-widest">
              BUILD IDEAS FURTHER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
