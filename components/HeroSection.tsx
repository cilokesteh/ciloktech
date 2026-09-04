"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

export default function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative bg-[var(--background)] pt-24 pb-14 md:pt-32 md:pb-20 px-5 md:px-7 overflow-hidden border-b swiss-line transition-colors duration-200">
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />

      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-14 items-stretch">
        <aside className="border-b lg:border-b-0 lg:border-r swiss-line pb-8 lg:pb-0 lg:pr-10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--accent-text)]">
              CILOKTECH / SPEC-01
            </div>
            <p className="font-mono text-[12px] leading-relaxed text-gray-600 dark:text-gray-400">
              One-Man Engineering Studio<br />
              Independent · Remote · WIB<br />
              High-Precision Web Systems
            </p>
          </div>

          <div className="pt-8">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] px-3 py-1.5 border swiss-line bg-[var(--card)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
              <span>{t.common.available} — Slot September Terbuka</span>
            </div>
          </div>
        </aside>

        <div className="flex flex-col justify-between space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gray-500 dark:text-gray-400">
              [ 01 // ARCHITECTURE &amp; EXECUTION ]
            </div>

            <h1
              className="text-[44px] sm:text-[60px] lg:text-[88px] font-extrabold tracking-[-0.06em] leading-[0.92] text-gray-900 dark:text-white"
            >
              {t.hero.headline1}<br />
              <span className="text-gray-600 dark:text-gray-400">{t.hero.headline2}</span><br />
              {t.hero.tapi} <span className="text-[var(--accent-text)]">{t.hero.ngasilinCuan}</span>
            </h1>

            <p className="text-[16px] sm:text-[18px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-[680px]">
              {t.hero.desc}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t swiss-line">
            <a
              href="https://t.me/ciloktechcsbot"
              target="_blank"
              rel="noopener noreferrer"
              className="uiverse-button px-7 py-4 bg-[var(--accent)] text-[#0e0f0d] font-mono text-[12px] font-bold uppercase tracking-[0.08em] flex items-center justify-between group"
            >
              <span>{t.hero.ctaTelegram}</span>
              <span className="text-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </a>

            <div className="flex gap-2">
              <a
                href="/demo"
                className="flex-1 px-4 py-4 border swiss-line bg-[var(--card)] hover:border-[var(--accent)] text-gray-900 dark:text-white font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-center flex items-center justify-center transition"
              >
                🎮 Demo Live
              </a>
              <a
                href="#portofolio"
                className="flex-1 px-4 py-4 border swiss-line bg-[var(--card)] hover:border-[var(--accent)] text-gray-900 dark:text-white font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-center flex items-center justify-center transition"
              >
                Karya →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
