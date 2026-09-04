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
            <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--accent-text)] border swiss-line px-3 py-1 mb-3 bg-[var(--card)]">
              {t.faq.label}
            </div>
            <h2 className="text-[34px] md:text-[46px] font-extrabold tracking-[-0.04em] leading-[0.94] text-gray-900 dark:text-white">
              {t.faq.headline1}
            </h2>
          </div>
        </Reveal>

        <RevealGrid className="max-w-4xl space-y-2">
          {faqs.map((f, i) => {
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-trigger-${i}`;
            return (
              <div
                key={i}
                className={`border swiss-line bg-[var(--card)] transition ${open === i ? "border-[var(--accent)]" : ""}`}
              >
                <button
                  id={btnId}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={open === i}
                  aria-controls={panelId}
                >
                  <span className="font-mono text-[11px] text-gray-500 mr-4">0{i + 1}</span>
                  <span className="text-[15px] md:text-[16px] font-extrabold text-gray-900 dark:text-white flex-1 pr-4">{f.q}</span>
                  <span
                    className={`font-mono text-sm px-2 py-0.5 border swiss-line transition ${open === i ? "bg-[var(--accent)] text-[#0e0f0d] border-[var(--accent)]" : "text-gray-500"}`}
                  >
                    {open === i ? "—" : "+"}
                  </span>
                </button>
                {open === i && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="px-6 pb-6 pt-2 font-mono text-[13px] leading-relaxed text-gray-600 dark:text-gray-400 border-t swiss-line"
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
