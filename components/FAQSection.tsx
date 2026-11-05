"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { Reveal, RevealGrid } from "./Reveal";

export default function FAQSection() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  const faqs = t.faq.items;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-14 md:py-20 bg-[var(--background)] border-b swiss-line px-5 md:px-7 transition-colors duration-200" id="faq">
      {/* FAQ JSON-LD — rich snippet Google */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ciloktech.id/" },
              { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.ciloktech.id/#faq" },
            ],
          }),
        }}
      />
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <div className="pop-sticker mb-3">
              {t.faq.label}
            </div>
            <h2 className="text-[34px] md:text-[46px] font-extrabold tracking-[-0.04em] leading-[0.94] text-gray-900 dark:text-white">
              {t.faq.headline1}
            </h2>
          </div>
        </Reveal>

        <RevealGrid className="max-w-4xl space-y-3">
          {faqs.map((f, i) => {
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-trigger-${i}`;
            return (
              <div
                key={i}
                className={`pop-card ${open === i ? "border-[var(--accent)]" : ""}`}
              >
                <button
                  id={btnId}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={open === i}
                  aria-controls={panelId}
                >
                  <span className="font-mono text-[11px] text-[var(--accent-text)] font-bold mr-4">0{i + 1}</span>
                  <span className="text-[15px] md:text-[16px] font-extrabold text-gray-950 dark:text-white flex-1 pr-4">{f.q}</span>
                  <span
                    className={open === i ? "pop-sticker" : "inline-flex items-center justify-center rounded-full border-2 border-[var(--border-strong)] bg-[var(--card)] px-2.5 py-1 font-mono text-sm text-gray-400"}
                  >
                    {open === i ? "—" : "+"}
                  </span>
                </button>
                {open === i && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="px-6 pb-6 pt-2 font-mono text-[13px] leading-relaxed text-gray-600 dark:text-gray-400 border-t border-gray-200/60 dark:border-white/10"
                  >
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </RevealGrid>

        <Reveal delay={0.2}>
          <div className="mt-10 font-mono text-[12px] text-gray-600 dark:text-gray-400">
            {t.faq.stillQ} <a href="https://t.me/ciloktechcsbot" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--accent-text)] underline underline-offset-4">{t.faq.askTelegram}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
