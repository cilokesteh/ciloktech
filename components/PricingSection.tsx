"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

const PLAN_HREFS = [
  "https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20Landing%20Page%20900rb",
  "https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20Company%20Profile%201.5jt",
  "https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20Web%20App%20Rp%202,5jt",
  "https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20konsultasi%20Custom",
];

export default function PricingSection() {
  const { t } = useI18n();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="py-14 md:py-20 bg-[#f6f6f5] dark:bg-[#0e0e12] border-y border-gray-200 dark:border-white/5 px-6 transition-colors duration-300 relative overflow-hidden" id="harga">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-100/30 dark:from-cyan-500/[0.05] to-transparent blur-3xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full mb-5 shadow-sm">
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

        <div className="grid md:grid-cols-3 gap-5 items-start max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, idx) => {
            const featured = idx === 2;
            return (
              <motion.div
              key={idx}
              data-featured={featured ? "true" : "false"}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={
                inView
                  ? featured
                    ? { opacity: 1, y: 0, scale: 1, boxShadow: "0 0 40px rgba(6,182,212,0.08)" }
                    : { opacity: 1, y: 0, scale: 1 }
                  : {}
              }
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`uiverse-card relative rounded-[22px] p-7 flex flex-col ${
                featured
                  ? "bg-gradient-to-b from-gray-900 to-gray-950 dark:from-white dark:to-gray-100 text-white dark:text-black shadow-[0_28px_72px_rgba(0,0,0,0.3)] dark:shadow-[0_28px_72px_rgba(255,255,255,0.1)] md:-mt-4 md:mb-4 border border-gray-800 dark:border-white ring-1 ring-cyan-500/30 dark:ring-cyan-400/40 scale-[1.02]"
                  : "glass hover:border-gray-900 dark:hover:border-white"
              }`}
            >
                {featured && (
                  <div className="absolute -top-3 left-7 inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg shadow-cyan-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> {t.pricing.populer}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-[18px] font-bold tracking-tight ${featured ? "text-white dark:text-black" : "text-gray-900 dark:text-white"}`}>
                    {plan.name}
                  </h3>
                  {(() => {
                    const parts = plan.unit.split(" — ");
                    const label = parts[0] || plan.unit;
                    const badge = parts[1] || null;
                    return (
                      <>
                        <div className={`text-[12px] font-medium tracking-wide uppercase mt-2 ${featured ? "text-gray-400 dark:text-gray-600" : "text-cyan-600 dark:text-cyan-400"}`}>
                          {label}
                        </div>
                        <div className="mt-1 flex items-baseline gap-2">
                          <span className="text-[36px] font-extrabold tracking-[-0.03em] leading-none">
                            {plan.price === "Custom" ? "Custom" : plan.price.startsWith("$") ? plan.price : `Rp ${plan.price}`}
                          </span>
                        </div>
                        {badge && (
                          <div className="mt-2.5">
                            <span className="inline-block text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                              {badge}
                            </span>
                          </div>
                        )}
                      </>
                    );
                  })()}
                  <p className={`text-[13px] leading-relaxed mt-4 ${featured ? "text-gray-300 dark:text-gray-600" : "text-gray-600 dark:text-gray-400"}`}>{plan.desc}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex gap-2.5 text-[13px] leading-snug">
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[11px] shrink-0 ${
                          featured ? "bg-white/10 dark:bg-black/10 text-cyan-300 dark:text-cyan-600" : "bg-gray-900 dark:bg-white text-white dark:text-black"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={featured ? "text-gray-200 dark:text-gray-700" : "text-gray-700 dark:text-gray-300"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={PLAN_HREFS[idx]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`uiverse-button w-full py-3.5 rounded-full text-center text-[13.5px] font-bold ${
                    featured
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-400 hover:to-indigo-400 shadow-lg shadow-cyan-500/25"
                      : "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-cyan-300 dark:hover:text-black"
                  }`}
                >
                  {plan.cta}
                </a>

                {!featured && (
                  <div className="text-[11px] text-center text-gray-500 mt-3">{t.pricing.footnotes[0]}</div>
                )}
                {featured && (
                  <div className="text-[11px] text-center text-gray-500 dark:text-gray-600 mt-3">{t.pricing.footnotes[1]}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-[12.5px] text-gray-600 dark:text-gray-400">
          {t.pricing.customPkg} <a href="https://t.me/ciloktechcsbot" target="_blank" rel="noopener noreferrer" className="font-bold text-gray-900 dark:text-white underline underline-offset-4">{t.pricing.chatCustom}</a> {t.pricing.customSuffix}
        </div>
      </div>
    </section>
  );
}
