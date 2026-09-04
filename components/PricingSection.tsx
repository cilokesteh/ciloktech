"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

const PLAN_HREFS = [
  "https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20Landing%20Page%20900rb",
  "https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20Company%20Profile%201.5jt",
  "https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20Web%20App%20Rp%202,5jt",
  "https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20paket%20Bundling%20Rp%203,5jt",
  "https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20konsultasi%20Custom",
];

export default function PricingSection() {
  const { t } = useI18n();

  return (
    <section className="py-14 md:py-20 bg-[var(--background)] border-b swiss-line px-5 md:px-7 transition-colors duration-200 relative overflow-hidden" id="harga">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--accent-text)] border swiss-line px-3 py-1 mb-4 bg-[var(--card)]">
            {t.pricing.label}
          </div>
          <h2 className="text-[34px] md:text-[50px] font-extrabold tracking-[-0.04em] leading-[0.92] text-gray-900 dark:text-white">
            {t.pricing.headline1} <br />
            <span className="text-gray-500">{t.pricing.headline2}</span>
          </h2>
          <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            {t.pricing.sub}
          </p>
        </motion.div>

        {/* Swiss Grid 3 Columns */}
        <div className="grid md:grid-cols-3 gap-4 items-stretch max-w-6xl mx-auto">
          {t.pricing.plans.map((plan, idx) => {
            const featured = idx === 2;
            return (
              <motion.div
                key={idx}
                data-featured={featured ? "true" : "false"}
                initial={false}
                className={`relative p-7 md:p-8 flex flex-col justify-between border swiss-line ${
                  featured
                    ? "bg-[var(--card)] border-[var(--accent)] shadow-[0_0_0_1px_var(--accent)]"
                    : "bg-[var(--card)]"
                }`}
              >
                {featured && (
                  <div className="absolute top-0 right-0 bg-[var(--accent)] text-[#0e0f0d] font-mono text-[10px] font-extrabold tracking-widest uppercase px-3 py-1">
                    {t.pricing.populer}
                  </div>
                )}

                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-gray-500 mb-2">
                    0{idx + 1}
                  </div>
                  <h3 className="text-[24px] font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mt-4 mb-6 pb-6 border-b swiss-line">
                    <div className="text-[40px] font-extrabold tracking-[-0.05em] leading-none text-gray-900 dark:text-white">
                      {plan.price === "Custom" ? "Custom" : plan.price.startsWith("$") ? plan.price : `Rp ${plan.price}`}
                    </div>
                    <div className="font-mono text-[11px] text-gray-500 uppercase tracking-[0.08em] mt-2">
                      {plan.unit}
                    </div>
                  </div>

                  <p className="text-[13.5px] leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                    {plan.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-mono text-[12px] leading-relaxed text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 mt-1.5 bg-[var(--accent)] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <a
                    href={PLAN_HREFS[idx]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`uiverse-button w-full py-4 text-center font-mono text-[12px] font-bold uppercase tracking-[0.08em] block transition ${
                      featured
                        ? "bg-[var(--accent)] text-[#0e0f0d] hover:opacity-90"
                        : "bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-[#0e0f0d]"
                    }`}
                  >
                    {plan.cta} ↗
                  </a>
                  <div className="font-mono text-[10px] text-center text-gray-500 mt-3">
                    {featured ? t.pricing.footnotes[1] : t.pricing.footnotes[0]}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center font-mono text-[12px] text-gray-600 dark:text-gray-400">
          {t.pricing.customPkg} <a href="https://t.me/ciloktechcsbot" target="_blank" rel="noopener noreferrer" className="font-bold text-[var(--accent-text)] underline underline-offset-4">{t.pricing.chatCustom}</a> {t.pricing.customSuffix}
        </div>
      </div>
    </section>
  );
}
