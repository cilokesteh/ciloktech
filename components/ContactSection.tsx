"use client";
import { useI18n } from "@/lib/i18n/context";

export default function ContactSection() {
  const { t } = useI18n();
  return (
    <section className="py-14 md:py-20 bg-gray-950 dark:bg-[#050507] text-white px-6 relative overflow-hidden border-t border-white/[0.06] transition-colors duration-300" id="kontak">
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-cyan-500/20 to-transparent blur-[80px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-white/10 border border-white/10 px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> {t.contact.label}
        </div>
        <h2 className="text-[34px] md:text-[52px] font-extrabold tracking-[-0.03em] leading-[0.9]">
          {t.contact.headline1} <br />
          <span className="text-gray-500">{t.contact.headline2}</span>
        </h2>
        <p className="text-[15px] text-gray-400 mt-5 max-w-[520px] mx-auto leading-relaxed">{t.contact.sub}</p>

        <div className="grid md:grid-cols-3 gap-4 mt-12 text-left max-w-4xl mx-auto">
          <a href="https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20konsultasi%20website" target="_blank" rel="noopener noreferrer" className="uiverse-card group p-6 rounded-[18px] bg-white/[0.06] backdrop-blur border border-white/10 hover:bg-white hover:text-gray-900">
            <div className="text-2xl mb-3">💬</div>
            <div className="font-bold text-[15px]">{t.contact.telegramTitle}</div>
            <div className="text-[13px] mt-1 opacity-80 group-hover:opacity-70">{t.contact.telegramDesc}</div>
            <div className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold">{t.contact.telegramCta} <span className="group-hover:translate-x-1 transition">→</span></div>
          </a>
          <a href="mailto:hi@ciloktech.my.id?subject=Konsultasi%20Website%20CilokTech" className="uiverse-card group p-6 rounded-[18px] bg-white/[0.06] backdrop-blur border border-white/10 hover:bg-white hover:text-gray-900">
            <div className="text-2xl mb-3">📧</div>
            <div className="font-bold text-[15px]">{t.contact.emailTitle}</div>
            <div className="text-[13px] mt-1 opacity-80 group-hover:opacity-70">hi@ciloktech.my.id</div>
            <div className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold">{t.contact.emailCta} <span className="group-hover:translate-x-1 transition">→</span></div>
          </a>
          <a href="https://t.me/ciloktech" target="_blank" rel="noopener noreferrer" className="uiverse-card group p-6 rounded-[18px] bg-white/[0.06] backdrop-blur border border-white/10 hover:bg-white hover:text-gray-900">
            <div className="text-2xl mb-3">👨‍💻</div>
            <div className="font-bold text-[15px]">{t.contact.devTitle}</div>
            <div className="text-[13px] mt-1 opacity-80 group-hover:opacity-70">{t.contact.devHandle} — {t.contact.devDesc}</div>
            <div className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold">{t.contact.devCta} <span className="group-hover:translate-x-1 transition">→</span></div>
          </a>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20konsultasi%20gratis" target="_blank" rel="noopener noreferrer" className="uiverse-button px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-cyan-300 text-sm shadow-[0_10px_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2">🚀 {t.contact.ctaPrimary}</a>
          <a href="#harga" className="uiverse-button px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 text-sm flex items-center justify-center gap-2">{t.contact.ctaSecondary}</a>
        </div>
        <div className="mt-8 text-[11.5px] text-gray-400">{t.contact.footerNote}</div>
      </div>
    </section>
  );
}
