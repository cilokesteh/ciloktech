"use client";
import { useI18n } from "@/lib/i18n/context";
import { Reveal, RevealGrid } from "./Reveal";

export default function ContactSection() {
  const { t } = useI18n();
  return (
    <section className="py-14 md:py-20 bg-[var(--background)] px-5 md:px-7 border-b swiss-line transition-colors duration-200" id="kontak">
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-end pb-12 border-b swiss-line">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--accent-text)] border swiss-line px-3 py-1 mb-4 bg-[var(--card)]">
                04 // KONTAK &amp; INTAKE
              </div>
              <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-extrabold tracking-[-0.05em] leading-[0.92] text-gray-900 dark:text-white">
                {t.contact.headline1} <br />
                <span className="text-[var(--accent-text)]">{t.contact.headline2}</span>
              </h2>
            </div>
            <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed max-w-[560px]">
              {t.contact.sub}
            </p>
          </div>
        </Reveal>

        <RevealGrid className="grid md:grid-cols-3 border-l swiss-line">
          <a
            href="https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20konsultasi%20website"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.contact.telegramTitle} — ${t.contact.telegramCta}`}
            className="p-8 border-r border-b swiss-line bg-[var(--card)] hover:bg-[var(--subtle)] transition flex flex-col justify-between min-h-[260px] group"
          >
            <div>
              <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.1em] mb-4">CHANNEL 01 // TELEGRAM</div>
              <div className="text-[20px] font-extrabold text-gray-900 dark:text-white mb-2">{t.contact.telegramTitle}</div>
              <div className="font-mono text-[12px] text-gray-600 dark:text-gray-400">{t.contact.telegramDesc}</div>
            </div>
            <div className="pt-6 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--accent-text)] flex items-center justify-between">
              <span>{t.contact.telegramCta}</span>
              <span className="text-sm">↗</span>
            </div>
          </a>

          <a
            href="mailto:hi@ciloktech.my.id?subject=Konsultasi%20Website%20CilokTech"
            aria-label={`${t.contact.emailTitle} — hi@ciloktech.my.id`}
            className="p-8 border-r border-b swiss-line bg-[var(--card)] hover:bg-[var(--subtle)] transition flex flex-col justify-between min-h-[260px] group"
          >
            <div>
              <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.1em] mb-4">CHANNEL 02 // DIRECT MAIL</div>
              <div className="text-[20px] font-extrabold text-gray-900 dark:text-white mb-2">{t.contact.emailTitle}</div>
              <div className="font-mono text-[12px] text-gray-600 dark:text-gray-400">{t.contact.emailMeta}</div>
            </div>
            <div className="pt-6 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--accent-text)] flex items-center justify-between">
              <span>{t.contact.emailCta}</span>
              <span className="text-sm">↗</span>
            </div>
          </a>

          <a
            href="https://t.me/ciloktech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.contact.devTitle} — ${t.contact.devDesc}`}
            className="p-8 border-r border-b swiss-line bg-[var(--card)] hover:bg-[var(--subtle)] transition flex flex-col justify-between min-h-[260px] group"
          >
            <div>
              <div className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.1em] mb-4">CHANNEL 03 // LEAD BUILDER</div>
              <div className="text-[20px] font-extrabold text-gray-900 dark:text-white mb-2">{t.contact.devTitle}</div>
              <div className="font-mono text-[12px] text-gray-600 dark:text-gray-400">{t.contact.devHandle} — {t.contact.devDesc}</div>
            </div>
            <div className="pt-6 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--accent-text)] flex items-center justify-between">
              <span>{t.contact.devCta}</span>
              <span className="text-sm">↗</span>
            </div>
          </a>
        </RevealGrid>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20konsultasi%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="uiverse-button px-8 py-4 bg-[var(--accent)] text-[#0e0f0d] font-mono text-[12px] font-bold uppercase tracking-[0.08em] flex items-center justify-center gap-2"
            >
              {t.contact.ctaPrimary} ↗
            </a>
            <a
              href="#harga"
              className="px-8 py-4 border swiss-line bg-[var(--card)] text-gray-900 dark:text-white font-mono text-[12px] font-bold uppercase tracking-[0.08em] hover:border-[var(--accent)] text-center flex items-center justify-center transition"
            >
              {t.contact.ctaSecondary}
            </a>
          </div>
          <div className="mt-4 font-mono text-[11px] text-gray-500">{t.contact.footerNote}</div>
        </Reveal>
      </div>
    </section>
  );
}
