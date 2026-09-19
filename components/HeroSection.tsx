"use client";
import { motion } from "framer-motion";
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

        {/* Modern MacBook / Digital Cockpit Mockup Showcase */}
        <div className="relative group w-full">
          {/* Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-[28px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />

          <div className="relative rounded-[24px] border border-gray-200 dark:border-white/10 bg-gray-900/90 dark:bg-[#0d1117] p-3 sm:p-4 shadow-2xl backdrop-blur-md overflow-hidden text-left font-sans">
            {/* MacBook Header / Window Controls */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/40 border border-white/5 text-[11px] font-mono text-gray-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>analytics.ciloktech.id/live</span>
              </div>
              <div className="font-mono text-[10px] text-gray-500">PROD-v3.0</div>
            </div>

            {/* Dashboard Screen Content */}
            <div className="space-y-4 p-1">
              {/* Top Stats Cards in Mockup */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Performance</div>
                  <div className="text-[18px] sm:text-[22px] font-black text-emerald-400 mt-0.5">99.8%</div>
                  <div className="text-[9.5px] text-gray-400 mt-0.5">LCP: 0.82s (Fast)</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Conversion</div>
                  <div className="text-[18px] sm:text-[22px] font-black text-cyan-400 mt-0.5">+42.6%</div>
                  <div className="text-[9.5px] text-gray-400 mt-0.5">Growth Q3/Q4</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5">
                  <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Security</div>
                  <div className="text-[18px] sm:text-[22px] font-black text-white mt-0.5">Zero Fail</div>
                  <div className="text-[9.5px] text-emerald-400 mt-0.5">PCI / OWASP Pass</div>
                </div>
              </div>

              {/* Main Visual Chart SVG */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-bold text-white">Real-Time Traffic &amp; Revenue Index</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">LIVE TELEMETRY</span>
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400 font-bold">Rp 148.500.000</span>
                </div>

                {/* Simulated Wave / Area Chart */}
                <div className="relative h-28 sm:h-32 w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="cyberChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="70" x2="400" y2="70" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    
                    {/* Area fill */}
                    <path
                      d="M 0 100 Q 60 40 120 70 T 240 30 T 340 50 T 400 15 L 400 120 L 0 120 Z"
                      fill="url(#cyberChartGrad)"
                    />
                    {/* Line path */}
                    <path
                      d="M 0 100 Q 60 40 120 70 T 240 30 T 340 50 T 400 15"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                    />
                    {/* Peak Glow Point */}
                    <circle cx="240" cy="30" r="4.5" fill="#38bdf8" className="animate-ping" />
                    <circle cx="240" cy="30" r="4" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
                    <circle cx="400" cy="15" r="4" fill="#38bdf8" />
                  </svg>
                </div>

                {/* Chart Bottom Labels */}
                <div className="flex justify-between font-mono text-[9.5px] text-gray-400 mt-2 pt-2 border-t border-white/5">
                  <span>08:00</span>
                  <span>12:00</span>
                  <span>16:00</span>
                  <span>20:00</span>
                  <span className="text-cyan-400 font-bold">Now (Peak)</span>
                </div>
              </div>
            </div>

            {/* Mockup Status Bar */}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10.5px] text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-gray-300">Cluster Jakarta-1 (Latency: 12ms)</span>
              </span>
              <span className="text-cyan-400 font-bold tracking-wider">
                AUTO-SCALING: ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
