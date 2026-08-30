"use client";
import { useI18n } from "@/lib/i18n/context";
import { Reveal, RevealGrid } from "./Reveal";

export default function ContactSection() {
  const { t } = useI18n();
  return (
    <section className="py-14 md:py-20 bg-gray-950 dark:bg-[#050507] text-white px-6 relative overflow-hidden border-t border-white/[0.06] transition-colors duration-300" id="kontak">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      </div>
      <div className="max-w-5xl mx-auto text-center relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-white/10 border border-white/10 px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> {t.contact.label}
          </div>
          <h2 className="text-[34px] md:text-[52px] font-extrabold tracking-[-0.03em] leading-[0.9]">
            {t.contact.headline1} <br />
            <span className="text-gray-500">{t.contact.headline2}</span>
          </h2>
          <p className="text-[15px] text-gray-400 mt-5 max-w-[520px] mx-auto leading-relaxed">{t.contact.sub}</p>
        </Reveal>

        <RevealGrid className="grid md:grid-cols-3 gap-4 mt-12 text-left max-w-4xl mx-auto">
          <a href="https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20konsultasi%20website" target="_blank" rel="noopener noreferrer" aria-label={`${t.contact.telegramTitle} — ${t.contact.telegramCta}`} className="uiverse-card group p-6 rounded-[18px] bg-white/[0.06] backdrop-blur border border-white/10 hover:bg-white hover:text-gray-900">
            <div className="w-8 h-8 mb-3 text-cyan-300 group-hover:text-gray-900 transition-colors duration-300" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M9.04 15.51 8.9 19.05c.44 0 .63-.18.87-.42l2.06-1.94 4.25 3.07c.77.42 1.32.2 1.53-.71l2.78-12.99c.24-1.1-.39-1.52-1.13-1.25L2.74 8.9c-1.07.41-1.05 1 .18 1.25l3.77 1.17 8.73-5.51c.41-.25.79-.11.48.15l-7.08 6.4-.28 3.15Z"/></svg>
            </div>
            <div className="font-bold text-[15px]">{t.contact.telegramTitle}</div>
            <div className="text-[13px] mt-1 opacity-80 group-hover:opacity-70">{t.contact.telegramDesc}</div>
            <div className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold">{t.contact.telegramCta} <span className="group-hover:translate-x-1 transition">→</span></div>
          </a>
          <a href="mailto:hi@ciloktech.my.id?subject=Konsultasi%20Website%20CilokTech" aria-label={`${t.contact.emailTitle} — hi@ciloktech.my.id`} className="uiverse-card group p-6 rounded-[18px] bg-white/[0.06] backdrop-blur border border-white/10 hover:bg-white hover:text-gray-900">
            <div className="w-8 h-8 mb-3 text-cyan-300 group-hover:text-gray-900 transition-colors duration-300" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-full h-full"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3.5 6 8.5 6.5L20.5 6"/></svg>
            </div>
            <div className="font-bold text-[15px]">{t.contact.emailTitle}</div>
            <div className="text-[13px] mt-1 opacity-80 group-hover:opacity-70">{t.contact.emailMeta}</div>
            <div className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold">{t.contact.emailCta} <span className="group-hover:translate-x-1 transition">→</span></div>
          </a>
          <a href="https://t.me/ciloktech" target="_blank" rel="noopener noreferrer" aria-label={`${t.contact.devTitle} — ${t.contact.devDesc}`} className="uiverse-card group p-6 rounded-[18px] bg-white/[0.06] backdrop-blur border border-white/10 hover:bg-white hover:text-gray-900">
            <div className="w-8 h-8 mb-3 text-cyan-300 group-hover:text-gray-900 transition-colors duration-300" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="w-full h-full"><circle cx="12" cy="7" r="3.5"/><path d="M4.5 19.5c0-3.5 3.4-6 7.5-6s7.5 2.5 7.5 6"/></svg>
            </div>
            <div className="font-bold text-[15px]">{t.contact.devTitle}</div>
            <div className="text-[13px] mt-1 opacity-80 group-hover:opacity-70">{t.contact.devHandle} — {t.contact.devDesc}</div>
            <div className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold">{t.contact.devCta} <span className="group-hover:translate-x-1 transition">→</span></div>
          </a>
        </RevealGrid>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20konsultasi%20gratis" target="_blank" rel="noopener noreferrer" className="uiverse-button px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-cyan-400 text-sm shadow-[0_10px_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2">🚀 {t.contact.ctaPrimary}</a>
          <a href="#harga" className="uiverse-button px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 text-sm flex items-center justify-center gap-2">{t.contact.ctaSecondary}</a>
        </div>
        <div className="mt-8 text-[11.5px] text-gray-400">{t.contact.footerNote}</div>
        </Reveal>
      </div>
    </section>
  );
}
