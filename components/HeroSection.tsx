"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

export default function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative bg-[var(--background)] pt-24 pb-16 md:pt-36 md:pb-28 px-5 md:px-7 overflow-hidden transition-colors duration-200">
      {/* Studio Radial Lighting Stage */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-gradient-to-b from-sky-500/15 via-blue-600/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-cyan-400/15 dark:bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[1.2fr_1.1fr] gap-12 lg:gap-14 items-center">
        <div className="flex flex-col justify-between space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Studio Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] px-3.5 py-1.5 rounded-full border border-sky-500/30 dark:border-cyan-400/30 bg-sky-500/10 dark:bg-cyan-400/10 text-sky-950 dark:text-cyan-300 font-bold shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#38bdf8]" />
                <span>Slot Q4 / Oktober Terbuka</span>
              </div>
              <div className="inline-flex items-center font-mono text-[10.5px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm text-gray-800 dark:text-gray-200 font-bold">
                ⚡ Direct Senior Builder
              </div>
            </div>

            {/* Fluid Editorial Headline */}
            <h1 className="text-[40px] sm:text-[54px] lg:text-[68px] font-extrabold tracking-[-0.04em] leading-[1.08] text-gray-950 dark:text-white">
              Website yang <span className="font-medium text-gray-500 dark:text-gray-400">bukan cuma enak dilihat,</span>
              <br />
              tapi bikin <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 dark:from-cyan-300 dark:to-blue-400">bisnis Anda terlihat lebih siap.</span>
            </h1>

            <p className="text-[16px] sm:text-[18px] leading-relaxed text-gray-800 dark:text-gray-200 font-medium max-w-[580px]">
              {t.hero.desc}
            </p>
          </motion.div>

          {/* Clean Action Buttons without hard line divider */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a
              href="https://t.me/ciloktechcsbot"
              target="_blank"
              rel="noopener noreferrer"
              className="uiverse-button px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-mono text-[12px] font-bold uppercase tracking-[0.08em] flex items-center justify-center gap-2 rounded-2xl shadow-[0_8px_25px_rgba(14,165,233,0.35)] hover:shadow-[0_12px_32px_rgba(14,165,233,0.5)] transition-all"
            >
              <span>{t.hero.ctaTelegram}</span>
              <span className="text-[16px]">↗</span>
            </a>

            <div className="flex gap-2.5">
              <a
                href="/demo"
                className="px-5 py-4 border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-[#12161f] hover:border-cyan-500/50 text-gray-900 dark:text-white font-mono text-[11px] font-bold uppercase tracking-[0.06em] rounded-2xl flex items-center justify-center transition backdrop-blur-sm"
              >
                🎮 Demo Live
              </a>
              <a
                href="#portofolio"
                className="px-5 py-4 border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-[#12161f] hover:border-cyan-500/50 text-gray-900 dark:text-white font-mono text-[11px] font-bold uppercase tracking-[0.06em] rounded-2xl flex items-center justify-center transition backdrop-blur-sm"
              >
                Karya →
              </a>
            </div>
          </div>
        </div>

        {/* 3D Isometric Tilt Digital Cockpit with Video Showcase */}
        <div className="relative group w-full perspective-[1200px] lg:pl-4">
          {/* Ambient Studio Backlight */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-sky-400/30 rounded-[36px] blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 pointer-events-none" />

          {/* Isometric Perspective Container */}
          <div className="relative rounded-[28px] border border-white/20 dark:border-white/15 bg-gradient-to-b from-[#161c28]/95 to-[#0b0e14]/95 p-3.5 sm:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl text-left font-sans transition-transform duration-700 lg:group-hover:rotate-x-2 lg:group-hover:-rotate-y-2 lg:[transform:rotateY(-4deg)_rotateX(2deg)] overflow-hidden">
            
            {/* MacBook Header Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] font-mono text-gray-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ciloktech.id/showcase</span>
              </div>
              <div className="font-mono text-[10px] text-gray-400 font-bold">4K STUDIO REEL</div>
            </div>

            {/* Video Showcase Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-inner group/video">
              <video
                src="/hero-showcase.mp4"
                poster="/hero-showcase.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  <span>STUDIO SHOWCASE · LIVE</span>
                </div>
                <div className="px-2 py-1 rounded-lg bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 text-[9.5px] font-mono font-bold text-cyan-300">
                  FROM CONCEPT TO LAUNCH
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10.5px] text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-gray-300">Production Ready Ecosystem</span>
              </span>
              <span className="text-cyan-400 font-bold tracking-wider">
                MACBOOK · IPAD · IPHONE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
