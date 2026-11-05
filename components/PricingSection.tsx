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
          <h2 className="text-[34px] md:text-[50px] font-extrabold tracking-[-0.04em] leading-[1.05] text-gray-900 dark:text-white">
            {t.pricing.headline1} <br />
            <span className="text-gray-500">{t.pricing.headline2}</span>
          </h2>
          <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            {t.pricing.sub}
          </p>
        </motion.div>

        {/* Aerodynamic Triad Grid */}
        <div className="grid md:grid-cols-[1fr_1.12fr_1fr] gap-6 items-stretch max-w-[1240px] mx-auto">
          {t.pricing.plans.map((plan, idx) => {
            const featured = idx === 1; // Company profile is the sweet spot / featured
            return (
              <motion.div
                key={idx}
                data-featured={featured ? "true" : "false"}
                initial={false}
                className={`aero-panel p-8 md:p-9 flex flex-col justify-between ${
                  featured
                    ? "border-[var(--accent)] bg-[var(--section-alt)] shadow-[0_0_40px_-12px_rgba(183,242,28,0.45)] md:-translate-y-2 z-10"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
                      PAKET 0{idx + 1}
                    </span>
                    {featured && (
                      <span className="aero-badge-skew">
                        <span className="font-mono text-[9.5px] font-extrabold uppercase text-[var(--accent-text)]">
                          {t.pricing.populer}
                        </span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-[23px] font-extrabold tracking-tight text-gray-950 dark:text-white mb-2">
                    {plan.name}
                  </h3>

                  <div className="mt-4 mb-6 p-5 neu-well text-center">
                    <div className={`text-[38px] md:text-[42px] font-extrabold tracking-[-0.05em] leading-none ${
                      featured ? "text-[var(--accent-text)]" : "text-gray-950 dark:text-white"
                    }`}>
                      {plan.price === "Custom" ? "Custom" : plan.price.startsWith("$") ? plan.price : `Rp ${plan.price}`}
                    </div>
                    <div className="font-mono text-[11px] text-gray-500 uppercase tracking-wider mt-2">
                      {plan.unit}
                    </div>
                  </div>

                  <p className="text-[13.5px] leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                    {plan.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 font-mono text-[12px] leading-relaxed text-gray-700 dark:text-gray-300">
                        <span className="neu-socket w-4 h-4 rounded-none text-[10px] text-[var(--accent-text)] font-extrabold shrink-0 mt-0.5">✓</span>
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
                    className={`w-full justify-center ${
                      featured
                        ? "btn-blade-primary"
                        : "btn-blade-ghost"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <span>↗</span>
                  </a>
                  <div className="font-mono text-[10.5px] text-center text-gray-500 mt-3">
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
