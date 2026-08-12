"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

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
    <section className="py-20 md:py-28 bg-[#fafafa] dark:bg-[#111111] border-y border-gray-200 dark:border-white/5 px-6 transition-colors duration-300" id="faq">
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ciloktech.web.id/" },
              { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.ciloktech.web.id/#faq" },
            ],
          }),
        }}
      />
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full mb-4">
            {t.faq.label}
          </div>
          <h2 className="text-[30px] md:text-[42px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white">
            {t.faq.headline1}
            <span className="text-gray-600 dark:text-gray-400"> {t.faq.headline2}</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`uiverse-disclosure rounded-[16px] border bg-white dark:bg-[#171717] ${open === i ? "border-gray-900 dark:border-white shadow-sm" : "border-gray-200 dark:border-white/10"}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-[14px] md:text-[15px] font-bold text-gray-900 dark:text-white pr-4">{f.q}</span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0 transition ${open === i ? "bg-gray-900 dark:bg-white text-white dark:text-black rotate-45" : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400"}`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-[13.5px] leading-[1.7] text-gray-600 dark:text-gray-400 animate-in fade-in duration-200">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 text-[13px] text-gray-600 dark:text-gray-400 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-5 py-2.5 rounded-full">
            {t.faq.stillQ} <a href="https://t.me/ciloktechcsbot" className="font-bold text-gray-900 dark:text-white underline underline-offset-4">{t.faq.askTelegram}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
