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
              <div className="pop-sticker mb-4">
                {t.contact.label}
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

        <RevealGrid className="grid md:grid-cols-3 gap-6 items-stretch">
          <a
            href="https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20konsultasi%20website"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CS 24 Jam — Chat sekarang"
            className="pop-card p-8 flex flex-col justify-between min-h-[250px] group"
          >
            <div>
              <span className="pop-sticker mb-3">RESPON CEPAT 24 JAM</span>
              <h3 className="text-[22px] font-extrabold text-gray-950 dark:text-white mb-2">CS 24 Jam</h3>
              <p className="font-mono text-[12.5px] text-gray-600 dark:text-gray-400 leading-relaxed">
                Asisten bot resmi yang aktif 24 jam nonstop untuk cek estimasi biaya, fitur paket, dan briefing awal.
              </p>
            </div>
            <div className="pt-6 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--accent-text)] flex items-center justify-between border-t border-gray-200/60 dark:border-white/10">
              <span>Buka Bot CS</span>
              <span className="text-sm">↗</span>
            </div>
          </a>

          <a
            href="https://t.me/ciloktech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Builder — Bicara langsung dengan builder"
            className="pop-card p-8 flex flex-col justify-between min-h-[250px] group"
          >
            <div>
              <span className="pop-sticker pop-sticker-pink mb-3">KONSULTASI LANGSUNG</span>
              <h3 className="text-[22px] font-extrabold text-gray-950 dark:text-white mb-2">Telegram Builder</h3>
              <p className="font-mono text-[12.5px] text-gray-600 dark:text-gray-400 leading-relaxed">
                Bicara langsung secara teknis dengan senior developer tanpa perantara sales ataupun project manager.
              </p>
            </div>
            <div className="pt-6 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--accent-text)] flex items-center justify-between border-t border-gray-200/60 dark:border-white/10">
              <span>Hubungi Builder</span>
              <span className="text-sm">↗</span>
            </div>
          </a>

          <a
            href="https://wa.me/628137355599?text=Halo%20CilokTech%2C%20saya%20mau%20konsultasi%20website"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp — Konsultasi Proyek"
            className="pop-card p-8 flex flex-col justify-between min-h-[250px] group"
          >
            <div>
              <span className="pop-sticker pop-sticker-yellow mb-3">WHATSAPP RESMI</span>
              <h3 className="text-[22px] font-extrabold text-gray-950 dark:text-white mb-2">WhatsApp Resmi</h3>
              <p className="font-mono text-[12.5px] text-gray-600 dark:text-gray-400 leading-relaxed">
                Jalur chat WhatsApp untuk kirim dokumen penawaran, tanya jawab cepat, dan serah terima proyek resmi.
              </p>
            </div>
            <div className="pt-6 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--accent-text)] flex items-center justify-between border-t border-gray-200/60 dark:border-white/10">
              <span>Buka WhatsApp</span>
              <span className="text-sm">↗</span>
            </div>
          </a>
        </RevealGrid>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20konsultasi%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="pop-btn pop-btn-primary"
            >
              <span>{t.contact.ctaPrimary}</span>
              <span>↗</span>
            </a>
            <a
              href="#harga"
              className="pop-btn text-center flex items-center justify-center"
            >
              <span>{t.contact.ctaSecondary}</span>
            </a>
          </div>
          <div className="mt-4 font-mono text-[11px] text-gray-500">{t.contact.footerNote}</div>
        </Reveal>
      </div>
    </section>
  );
}
