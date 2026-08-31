"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

export default function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative bg-white dark:bg-[#08080b] pt-24 pb-14 md:pt-32 md:pb-20 px-6 overflow-hidden transition-colors duration-300">
      {/* ambient background — single subtle cyan orb only, no aurora blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="hero-orb hero-orb-main absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[560px] bg-gradient-to-b from-cyan-100/40 dark:from-cyan-400/[0.06] to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            className="hero-reveal hero-reveal-1 flex flex-wrap items-center gap-2"
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.9, delay: 0, ease: [0.12, 1, 0.22, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-semibold tracking-wide shadow-lg shadow-gray-900/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              {t.hero.trust}
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full surface-elev text-[11px] font-bold tracking-wide">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-700 dark:text-cyan-300"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              {t.hero.oneManBadge}
            </div>
          </motion.div>

          <motion.h1
            aria-label={`${t.hero.headline1} ${t.hero.headline2} ${t.hero.tapi} ${t.hero.ngasilinCuan}`}
            className="hero-reveal hero-reveal-2 text-[36px] md:text-[58px] font-extrabold tracking-[-0.035em] leading-[0.95] text-gray-900 dark:text-white text-balance"
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.9, delay: 0.15, ease: [0.12, 1, 0.22, 1] }}
          >
            {t.hero.headline1}<br />
            <span className="text-gray-600 dark:text-gray-400">{t.hero.headline2}</span>
            <br />
            {t.hero.tapi}
            <span className="font-display italic font-medium text-accent">
              {"\u00a0"}
              {t.hero.ngasilinCuan}
            </span>
          </motion.h1>

          <motion.p
            className="hero-reveal hero-reveal-3 text-[15px] md:text-[17px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-[520px]"
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.9, delay: 0.3, ease: [0.12, 1, 0.22, 1] }}
          >
            {t.hero.desc}
          </motion.p>

          <motion.div
            className="hero-reveal hero-reveal-4 flex flex-col sm:flex-row gap-3 pt-1"
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.9, delay: 0.45, ease: [0.12, 1, 0.22, 1] }}
          >
            <a href="https://t.me/ciloktechcsbot" target="_blank" rel="noopener noreferrer" className="hero-cta uiverse-button px-7 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-black dark:hover:bg-cyan-500 dark:hover:text-white text-center text-sm shadow-xl shadow-gray-900/20 flex items-center justify-center gap-2 group">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:rotate-[10deg] transition-transform"><path d="M21.9 4.3l-3 14.2c-.2 1-.8 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.8L18.6 6c.4-.3-.1-.5-.6-.2L7.1 12.6l-4.6-1.4c-1-.3-1-1 .2-1.5L20.6 2.8c.8-.3 1.6.2 1.3 1.5z"/></svg>
              {t.hero.ctaTelegram}
            </a>
            <a href="/demo" className="hero-cta px-6 py-3.5 bg-amber-500/10 border border-amber-600/40 dark:border-amber-400/40 text-amber-900 dark:text-amber-300 font-bold rounded-full hover:bg-amber-500/20 text-center text-sm flex items-center justify-center gap-1.5 shadow-sm">
              <span>🎮</span>
              <span>Coba Demo Live</span>
            </a>
            <a href="#portofolio" className="hero-cta px-6 py-3.5 surface-elev text-gray-900 dark:text-white font-bold rounded-full hover:bg-cyan-50 dark:hover:bg-cyan-950/30 text-center text-sm flex items-center justify-center">
              {t.hero.ctaPortofolio}
            </a>
          </motion.div>

          <motion.div
            className="hero-reveal hero-reveal-5 flex flex-wrap items-center gap-3 pt-5 border-t border-gray-100 dark:border-white/10 text-xs"
            initial={{ opacity: 0, y: 64 }}
            whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.9, delay: 0.6, ease: [0.12, 1, 0.22, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-white/[0.06] px-3 py-2 font-semibold text-gray-700 dark:text-gray-300"><span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />{t.hero.trusted}</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-white/[0.06] px-3 py-2 font-semibold text-gray-700 dark:text-gray-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />{t.hero.rating}</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-white/[0.06] px-3 py-2 font-semibold text-gray-700 dark:text-gray-300"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" />{t.hero.noDrama}</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-preview relative"
          initial={{ opacity: 0, y: 64 }}
          whileInView={{ opacity: 1, y: [0, -8, 0] }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.9, delay: 0.2, ease: [0.12, 1, 0.22, 1], y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        >
          <div className="absolute -inset-8 bg-gradient-to-br from-cyan-100/40 via-blue-100/30 to-indigo-100/30 dark:from-cyan-400/8 dark:via-blue-500/4 dark:to-indigo-500/8 blur-2xl rounded-[36px] -z-10 animate-pulse" />
          <div className="uiverse-card rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#121217] shadow-[0_24px_70px_rgba(0,0,0,0.1),0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.55)] overflow-hidden">
            <div className="h-11 bg-gray-50 dark:bg-[#16161c] border-b border-gray-100 dark:border-white/5 flex items-center gap-2 px-4">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
              <div className="ml-4 flex-1 h-6 bg-white dark:bg-[#1c1c24] border border-gray-200 dark:border-white/10 rounded-full flex items-center px-3 text-[11px] text-gray-600 dark:text-gray-400">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-600 dark:text-cyan-300 mr-1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                {t.hero.liveBadge}
              </div>
            </div>
            <div className="p-5 md:p-6 space-y-4 bg-[#fcfcfd] dark:bg-[#0e0e12]">
              <div className="flex items-center justify-between"><div className="h-5 w-28 bg-gray-900 dark:bg-white rounded" /><div className="h-8 w-24 bg-cyan-600 dark:bg-cyan-400 rounded-full" /></div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white dark:bg-[#16161c] border border-gray-100 dark:border-white/5 rounded-xl p-3"><div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Discover</div><div className="text-[14px] font-extrabold mt-1 text-gray-900 dark:text-white">Strategy</div><div className="text-[11px] text-cyan-600 dark:text-cyan-300 font-semibold">Clear direction</div></div>
                <div className="bg-white dark:bg-[#16161c] border border-gray-100 dark:border-white/5 rounded-xl p-3"><div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Design</div><div className="text-[14px] font-extrabold mt-1 text-gray-900 dark:text-white">Custom UI</div><div className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">Built for brand</div></div>
                <div className="bg-white dark:bg-[#16161c] border border-gray-100 dark:border-white/5 rounded-xl p-3"><div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Launch</div><div className="text-[14px] font-extrabold mt-1 text-gray-900 dark:text-white">Ready</div><div className="text-[11px] text-cyan-700 font-semibold">Ready to grow</div></div>
              </div>
              <div className="bg-white dark:bg-[#16161c] border border-gray-100 dark:border-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3"><div className="h-3 w-20 bg-gray-200 dark:bg-white/20 rounded" /><div className="h-3 w-12 bg-gray-100 dark:bg-white/10 rounded" /></div>
                <div className="flex items-end gap-[5px] h-[72px]">{[30, 45, 25, 60, 55, 80, 65, 90, 70, 85, 60, 95].map((h, i) => (<div key={i} className="flex-1 bg-cyan-600 dark:bg-cyan-400 rounded-t-sm" style={{ height: h + "%", opacity: 0.15 + i * 0.07 }} />))}</div>
              </div>
              <div className="flex gap-2"><div className="h-2 flex-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden"><div className="h-full w-[78%] bg-cyan-600 dark:bg-cyan-400 rounded-full" /></div><span className="text-[10px] font-bold text-gray-600 dark:text-gray-400">from brief to launch</span></div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-4 bg-white dark:bg-[#16161c] border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-9 h-9 bg-cyan-600 dark:bg-cyan-400 rounded-full flex items-center justify-center text-white text-sm shadow-lg shadow-cyan-600/30">✓</div>
            <div className="text-xs leading-tight"><div className="font-bold text-gray-900 dark:text-white">{t.hero.liveIn}</div><div className="text-gray-500 dark:text-gray-400">{t.hero.noDrama}</div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
