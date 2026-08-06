"use client";
import { useI18n } from "@/lib/i18n/context";

export default function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative bg-white dark:bg-[#08080b] pt-32 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden transition-colors duration-300">
      {/* ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[560px] bg-gradient-to-b from-cyan-100/50 dark:from-cyan-500/[0.07] to-transparent blur-3xl rounded-full" />
        <div className="absolute -top-24 right-[-10%] w-[520px] h-[520px] bg-indigo-200/30 dark:bg-indigo-500/[0.06] blur-3xl rounded-full" />
        <div className="absolute bottom-[-20%] left-[-5%] w-[420px] h-[420px] bg-cyan-200/30 dark:bg-cyan-500/[0.05] blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-semibold tracking-wide shadow-lg shadow-gray-900/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.hero.trust}
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-[11px] font-bold tracking-wide">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-600 dark:text-cyan-400"><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              {t.hero.oneManBadge}
            </div>
          </div>

          <h1 className="text-[36px] md:text-[58px] font-extrabold tracking-[-0.035em] leading-[0.95] text-gray-900 dark:text-white">
            {t.hero.headline1}<br />
            <span className="text-gray-400 dark:text-gray-500">{t.hero.headline2}</span> {t.hero.bagus}
            <br />
            {t.hero.tapi} <span className="relative inline-block"><span className="relative z-10 text-gradient">{t.hero.ngasilinCuan}</span><span className="absolute bottom-1 left-0 right-0 h-3 bg-cyan-100 dark:bg-cyan-900/30 -z-0 rotate-1" /></span>
          </h1>

          <p className="text-[15px] md:text-[17px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-[520px]">{t.hero.desc}</p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a href="https://t.me/ciloktechcsbot" className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-black dark:hover:bg-cyan-300 transition text-center text-sm shadow-xl shadow-gray-900/20 flex items-center justify-center gap-2 group">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="group-hover:rotate-[10deg] transition-transform"><path d="M21.9 4.3l-3 14.2c-.2 1-.8 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.8L18.6 6c.4-.3-.1-.5-.6-.2L7.1 12.6l-4.6-1.4c-1-.3-1-1 .2-1.5L20.6 2.8c.8-.3 1.6.2 1.3 1.5z"/></svg>
              {t.hero.ctaTelegram}
            </a>
            <a href="#portofolio" className="px-8 py-4 glass text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition text-center text-sm">
              {t.hero.ctaPortofolio}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-gray-100 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/20 border-2 border-white dark:border-[#08080b] flex items-center justify-center text-[10px] font-bold">A</div>
                <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/50 border-2 border-white dark:border-[#08080b] flex items-center justify-center text-[10px] font-bold text-cyan-700 dark:text-cyan-300">B</div>
                <div className="w-8 h-8 rounded-full bg-gray-900 dark:bg-white border-2 border-white dark:border-[#08080b] flex items-center justify-center text-[10px] font-bold text-white dark:text-black">+48</div>
              </div>
              <div className="text-xs leading-tight">
                <div className="font-bold text-gray-900 dark:text-white">{t.hero.trusted}</div>
                <div className="text-gray-500 dark:text-gray-400">{t.hero.rating}</div>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-200 dark:bg-white/10 hidden sm:block" />
            <div className="flex gap-5 text-xs">
              <div><span className="block font-extrabold text-gray-900 dark:text-white text-[15px]">&lt;1s</span><span className="text-gray-500">{t.hero.loadTime}</span></div>
              <div><span className="block font-extrabold text-gray-900 dark:text-white text-[15px]">98</span><span className="text-gray-500">{t.hero.lighthouse}</span></div>
              <div><span className="block font-extrabold text-gray-900 dark:text-white text-[15px]">3 {t.common.language === "Bahasa" ? "hari" : "days"}</span><span className="text-gray-500">{t.hero.avgDelivery}</span></div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-br from-cyan-200/40 via-blue-100/30 to-indigo-200/40 dark:from-cyan-500/10 dark:via-blue-500/5 dark:to-indigo-500/10 blur-2xl rounded-[36px] -z-10" />
          <div className="rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#121217] shadow-[0_24px_70px_rgba(0,0,0,0.1),0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.55)] overflow-hidden">
            <div className="h-11 bg-gray-50 dark:bg-[#16161c] border-b border-gray-100 dark:border-white/5 flex items-center gap-2 px-4">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
              <div className="ml-4 flex-1 h-6 bg-white dark:bg-[#1c1c24] border border-gray-200 dark:border-white/10 rounded-full flex items-center px-3 text-[11px] text-gray-400 dark:text-gray-500">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-600 mr-1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                {t.hero.liveBadge}
              </div>
            </div>
            <div className="p-5 md:p-6 space-y-4 bg-[#fcfcfd] dark:bg-[#0e0e12]">
              <div className="flex items-center justify-between"><div className="h-5 w-28 bg-gray-900 dark:bg-white rounded" /><div className="h-8 w-24 bg-gradient-to-r from-cyan-600 to-indigo-500 dark:from-cyan-500 dark:to-indigo-400 rounded-full" /></div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white dark:bg-[#16161c] border border-gray-100 dark:border-white/5 rounded-xl p-3"><div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Revenue</div><div className="text-[18px] font-extrabold mt-1 text-gray-900 dark:text-white">Rp 42.5jt</div><div className="text-[11px] text-emerald-600 font-semibold">+23% ↗</div></div>
                <div className="bg-white dark:bg-[#16161c] border border-gray-100 dark:border-white/5 rounded-xl p-3"><div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Orders</div><div className="text-[18px] font-extrabold mt-1 text-gray-900 dark:text-white">1,248</div><div className="text-[11px] text-emerald-600 font-semibold">+12% ↗</div></div>
                <div className="bg-white dark:bg-[#16161c] border border-gray-100 dark:border-white/5 rounded-xl p-3"><div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Speed</div><div className="text-[18px] font-extrabold mt-1 text-gray-900 dark:text-white">0.8s</div><div className="text-[11px] text-gray-500">LCP</div></div>
              </div>
              <div className="bg-white dark:bg-[#16161c] border border-gray-100 dark:border-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3"><div className="h-3 w-20 bg-gray-200 dark:bg-white/20 rounded" /><div className="h-3 w-12 bg-gray-100 dark:bg-white/10 rounded" /></div>
                <div className="flex items-end gap-[5px] h-[72px]">{[30, 45, 25, 60, 55, 80, 65, 90, 70, 85, 60, 95].map((h, i) => (<div key={i} className="flex-1 bg-gradient-to-t from-cyan-600 to-indigo-500 dark:from-cyan-500 dark:to-indigo-400 rounded-t-sm" style={{ height: h + "%", opacity: 0.15 + i * 0.07 }} />))}</div>
              </div>
              <div className="flex gap-2"><div className="h-2 flex-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden"><div className="h-full w-[78%] bg-gradient-to-r from-cyan-600 to-indigo-500 dark:from-cyan-400 dark:to-indigo-400 rounded-full" /></div><span className="text-[10px] font-bold text-gray-600 dark:text-gray-400">78% conversion goal</span></div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-4 bg-white dark:bg-[#16161c] border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
            <div className="text-xs leading-tight"><div className="font-bold text-gray-900 dark:text-white">{t.hero.liveIn}</div><div className="text-gray-500 dark:text-gray-400">{t.hero.noDrama}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
