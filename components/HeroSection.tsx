"use client";
import { useI18n } from "@/lib/i18n/context";

export default function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="relative bg-white dark:bg-[#0a0a0a] pt-28 pb-16 md:pt-36 md:pb-24 px-6 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:36px_36px] dark:opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-100/40 dark:from-cyan-900/20 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-7">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {t.hero.trust}
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-[11px] font-bold tracking-wide">
              <span className="text-[13px]">👨‍💻</span> {t.hero.oneManBadge}
            </div>
          </div>

          <h1 className="text-[34px] md:text-[54px] font-extrabold tracking-[-0.03em] leading-[0.95] text-gray-900 dark:text-white">
            {t.hero.headline1}<br />
            <span className="text-gray-400 dark:text-gray-500">{t.hero.headline2}</span> {t.hero.bagus}
            <br />
            {t.hero.tapi} <span className="relative inline-block"><span className="relative z-10 text-cyan-600 dark:text-cyan-400">{t.hero.ngasilinCuan}</span><span className="absolute bottom-1 left-0 right-0 h-3 bg-cyan-100 dark:bg-cyan-900/30 -z-0 rotate-1" /></span>
          </h1>

          <p className="text-[15px] md:text-[17px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-[520px]">{t.hero.desc}</p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="https://t.me/ciloktech" className="px-7 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:bg-black dark:hover:bg-cyan-300 transition text-center text-sm shadow-xl shadow-gray-900/20 flex items-center justify-center gap-2">
              <span>🚀</span> {t.hero.ctaTelegram}
            </a>
            <a href="#portofolio" className="px-7 py-3.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition text-center text-sm">
              {t.hero.ctaPortofolio}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-white/20 border-2 border-white dark:border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold">A</div>
                <div className="w-7 h-7 rounded-full bg-cyan-100 dark:bg-cyan-900/50 border-2 border-white dark:border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold text-cyan-700 dark:text-cyan-300">B</div>
                <div className="w-7 h-7 rounded-full bg-gray-900 dark:bg-white border-2 border-white dark:border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold text-white dark:text-black">+48</div>
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
          <div className="absolute -inset-6 bg-gradient-to-br from-cyan-200/30 via-blue-100/20 to-violet-200/20 dark:from-cyan-900/10 dark:via-blue-900/5 dark:to-violet-900/10 blur-2xl rounded-[32px] -z-10" />
          <div className="rounded-[20px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#151515] shadow-[0_20px_60px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="h-10 bg-gray-50 dark:bg-[#1a1a1a] border-b border-gray-100 dark:border-white/5 flex items-center gap-2 px-4">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
              <div className="ml-4 flex-1 h-6 bg-white dark:bg-[#222222] border border-gray-200 dark:border-white/10 rounded-full flex items-center px-3 text-[11px] text-gray-400 dark:text-gray-500">
                <span className="text-green-600 mr-1.5">🔒</span> {t.hero.liveBadge}
              </div>
            </div>
            <div className="p-4 md:p-5 space-y-4 bg-[#fcfcfc] dark:bg-[#111111]">
              <div className="flex items-center justify-between"><div className="h-5 w-24 bg-gray-900 dark:bg-white rounded" /><div className="h-7 w-20 bg-cyan-600 dark:bg-cyan-500 rounded-full" /></div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-xl p-3"><div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Revenue</div><div className="text-[18px] font-extrabold mt-1 text-gray-900 dark:text-white">Rp 42.5jt</div><div className="text-[11px] text-emerald-600 font-semibold">+23% ↗</div></div>
                <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-xl p-3"><div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Orders</div><div className="text-[18px] font-extrabold mt-1 text-gray-900 dark:text-white">1,248</div><div className="text-[11px] text-emerald-600 font-semibold">+12% ↗</div></div>
                <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-xl p-3"><div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Speed</div><div className="text-[18px] font-extrabold mt-1 text-gray-900 dark:text-white">0.8s</div><div className="text-[11px] text-gray-500">LCP</div></div>
              </div>
              <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3"><div className="h-3 w-20 bg-gray-200 dark:bg-white/20 rounded" /><div className="h-3 w-12 bg-gray-100 dark:bg-white/10 rounded" /></div>
                <div className="flex items-end gap-[5px] h-[72px]">{[30, 45, 25, 60, 55, 80, 65, 90, 70, 85, 60, 95].map((h, i) => (<div key={i} className="flex-1 bg-gray-900 dark:bg-white rounded-t-sm" style={{ height: h + "%", opacity: 0.15 + i * 0.07 }} />))}</div>
              </div>
              <div className="flex gap-2"><div className="h-2 flex-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden"><div className="h-full w-[78%] bg-cyan-600 dark:bg-cyan-400 rounded-full" /></div><span className="text-[10px] font-bold text-gray-600 dark:text-gray-400">78% conversion goal</span></div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-4 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
            <div className="text-xs leading-tight"><div className="font-bold text-gray-900 dark:text-white">{t.hero.liveIn}</div><div className="text-gray-500 dark:text-gray-400">{t.hero.noDrama}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
