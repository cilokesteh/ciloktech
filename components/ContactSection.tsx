"use client";
import { useI18n } from "@/lib/i18n/context";
import { Reveal, RevealGrid } from "./Reveal";

export default function ContactSection() {
  const { t, locale } = useI18n();
  const isEn = locale === "en";
  const cardLinks = [
    {
      href: `https://t.me/ciloktechcsbot?text=${encodeURIComponent(isEn ? "Hi CilokTech, I'd like to consult about a website" : "Halo CilokTech, mau konsultasi website")}`,
      stickerClass: "",
    },
    { href: "https://t.me/ciloktech", stickerClass: "pop-sticker-pink" },
    {
      href: `https://wa.me/628137355599?text=${encodeURIComponent(isEn ? "Hi CilokTech, I'd like to consult about a website" : "Halo CilokTech, saya mau konsultasi website")}`,
      stickerClass: "pop-sticker-yellow",
    },
  ];
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
          {t.contact.cards.map((card, i) => (
            <a
              key={card.title}
              href={cardLinks[i].href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={card.aria}
              className="pop-card p-8 flex flex-col justify-between min-h-[250px] group"
            >
              <div>
                <span className={`pop-sticker mb-3 ${cardLinks[i].stickerClass}`}>{card.sticker}</span>
                <h3 className="text-[22px] font-extrabold text-gray-950 dark:text-white mb-2">{card.title}</h3>
                <p className="font-mono text-[12.5px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div className="pt-6 font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--accent-text)] flex items-center justify-between border-t border-gray-200/60 dark:border-white/10">
                <span>{card.cta}</span>
                <span className="text-sm">↗</span>
              </div>
            </a>
          ))}
        </RevealGrid>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://t.me/ciloktechcsbot?text=${encodeURIComponent(isEn ? "Hi CilokTech, I'd like a free consultation" : "Halo CilokTech, mau konsultasi gratis")}`}
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
