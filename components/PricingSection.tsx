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
    <section className="py-14 md:py-20 bg-[#f6f6f5] dark:bg-[#0e0e12] border-y border-gray-200 dark:border-white/5 px-6 transition-colors duration-300 relative overflow-hidden" id="harga">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 64 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.9, ease: [0.12, 1, 0.22, 1] }}
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900/50 px-3 py-1 rounded-full mb-5 shadow-sm">
            {t.pricing.label}
          </div>
          <h2 className="text-[32px] md:text-[46px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white">
            {t.pricing.headline1} <br />
            <span className="text-gray-600 dark:text-gray-400">{t.pricing.headline2}</span>
          </h2>
          <p className="text-[15px] text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            {t.pricing.sub}
          </p>
        </motion.div>

        {/* Asymmetric grid: kolom tengah lebih besar, sisi lebih ringkas
            (anti-AI §II.3.2: break perfect symmetry) */}
        <div className="grid md:grid-cols-[1fr_1.15fr_1fr] gap-4 md:gap-5 items-stretch max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, idx) => {
            const featured = idx === 2;
            const sizeClass = featured
              ? "md:py-10 md:px-8 md:scale-[1.02]"
              : idx === 0
                ? "md:py-7 md:px-6 md:scale-[0.96] md:opacity-90"
                : "md:py-7 md:px-6 md:scale-[0.96] md:opacity-90";
            return (
              <motion.div
              key={idx}
              data-featured={featured ? "true" : "false"}
              initial={false}
              className={`uiverse-card relative rounded-[22px] p-7 flex flex-col will-change-transform ${sizeClass} ${
                featured
                  ? "bg-cyan-700 dark:bg-cyan-500 text-cyan-50 dark:text-cyan-950 shadow-[0_28px_72px_rgba(6,182,212,0.25)] dark:shadow-[0_28px_72px_rgba(6,182,212,0.4)] border border-cyan-900 dark:border-cyan-600"
                  : "surface-elev hover:border-cyan-700/40 dark:hover:border-cyan-300/40"
              }`}
            >
                {featured && <div className="border-beam" aria-hidden="true" />}
                {featured && (
                  <div className="absolute -top-3 left-7 inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-900 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-700 animate-pulse" /> {t.pricing.populer}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-[18px] font-bold tracking-tight font-display italic ${featured ? "text-cyan-50 dark:text-cyan-950" : "text-gray-900 dark:text-white"}`}>
                    {plan.name}
                  </h3>
                  {(() => {
                    const parts = plan.unit.split(" — ");
                    const label = parts[0] || plan.unit;
                    const badge = parts[1] || null;
                    return (
                      <>
                        <div className={`text-[12px] font-medium tracking-wide uppercase mt-2 ${featured ? "text-cyan-200 dark:text-cyan-700" : "text-cyan-700 dark:text-cyan-300"}`}>
                          {label}
                        </div>
                        <div className="mt-1 flex items-baseline gap-2">
                          <span className="text-[36px] font-extrabold tracking-[-0.03em] leading-none">
                            {plan.price === "Custom" ? "Custom" : plan.price.startsWith("$") ? plan.price : `Rp ${plan.price}`}
                          </span>
                        </div>
                        {badge && (
                          <div className="mt-2.5">
                            <span className="inline-block text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-cyan-50 text-cyan-900 border border-cyan-200">
                              {badge}
                            </span>
                          </div>
                        )}
                      </>
                    );
                  })()}
                  <p className={`text-[13px] leading-relaxed mt-4 ${featured ? "text-cyan-100 dark:text-cyan-900" : "text-gray-600 dark:text-gray-400"}`}>{plan.desc}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex gap-2.5 text-[13px] leading-snug">
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[11px] shrink-0 ${
                          featured ? "bg-cyan-50 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-50" : "bg-cyan-700 dark:bg-cyan-400 text-cyan-50"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={featured ? "text-cyan-50 dark:text-cyan-950" : "text-gray-700 dark:text-gray-300"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={PLAN_HREFS[idx]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`uiverse-button w-full py-3.5 rounded-full text-center text-[13.5px] font-bold ${
                    featured
                      ? "bg-cyan-50 text-cyan-900 hover:bg-white shadow-lg"
                      : "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-cyan-700 dark:hover:bg-cyan-400 dark:hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>

                {!featured && (
                  <div className="text-[11px] text-center text-gray-500 mt-3">{t.pricing.footnotes[0]}</div>
                )}
                {featured && (
                  <div className="text-[11px] text-center text-cyan-100 dark:text-cyan-700 mt-3">{t.pricing.footnotes[1]}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-[12.5px] text-gray-600 dark:text-gray-400">
          {t.pricing.customPkg} <a href="https://t.me/ciloktechcsbot" target="_blank" rel="noopener noreferrer" className="font-bold text-cyan-700 dark:text-cyan-300 underline underline-offset-4">{t.pricing.chatCustom}</a> {t.pricing.customSuffix}
        </div>
      </div>
    </section>
  );
}
