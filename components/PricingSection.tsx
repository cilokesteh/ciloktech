"use client";

import { useI18n } from "@/lib/i18n/context";

const PLAN_HREFS = [
  "https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20Landing%20Page%20900rb",
  "https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20Company%20Profile%202.5jt",
  "https://t.me/ciloktechcsbot?text=Halo%20CilokTech%2C%20mau%20konsultasi%20Web%20App%20Custom",
];

export default function PricingSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-[#f6f6f5] dark:bg-[#111111] border-y border-gray-200 dark:border-white/5 px-6 transition-colors duration-300" id="harga">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full mb-5 shadow-sm">
            {t.pricing.label}
          </div>
          <h2 className="text-[32px] md:text-[46px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white">
            {t.pricing.headline1} <br />
            <span className="text-gray-400 dark:text-gray-500">{t.pricing.headline2}</span>
          </h2>
          <p className="text-[15px] text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            {t.pricing.sub}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, idx) => {
            const featured = idx === 1;
            return (
              <div
                key={idx}
                className={`relative rounded-[22px] p-7 flex flex-col transition-colors duration-300 ${
                  featured
                    ? "bg-gray-900 dark:bg-white text-white dark:text-black shadow-[0_24px_64px_rgba(0,0,0,0.22)] dark:shadow-[0_24px_64px_rgba(255,255,255,0.08)] md:-mt-4 md:mb-4 border border-gray-800 dark:border-white"
                    : "bg-white dark:bg-[#171717] border border-gray-200 dark:border-white/10 hover:border-gray-900 dark:hover:border-white"
                }`}
              >
                {featured && (
                  <div className="absolute -top-3 left-7 inline-flex items-center gap-1.5 bg-cyan-400 dark:bg-cyan-300 text-gray-900 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-900 animate-pulse" /> {t.pricing.populer}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-[18px] font-bold tracking-tight ${featured ? "text-white dark:text-black" : "text-gray-900 dark:text-white"}`}>
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-[36px] font-extrabold tracking-[-0.03em] leading-none">
                      {plan.price === "Custom" ? "Custom" : `Rp ${plan.price}`}
                    </span>
                  </div>
                  <div className={`text-[12px] mt-1 ${featured ? "text-gray-400 dark:text-gray-600" : "text-gray-500 dark:text-gray-400"}`}>{plan.unit}</div>
                  <p className={`text-[13px] leading-relaxed mt-4 ${featured ? "text-gray-400 dark:text-gray-600" : "text-gray-600 dark:text-gray-400"}`}>{plan.desc}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex gap-2.5 text-[13px] leading-snug">
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[11px] shrink-0 ${
                          featured ? "bg-white/10 dark:bg-black/10 text-white dark:text-black" : "bg-gray-900 dark:bg-white text-white dark:text-black"
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
                  className={`w-full py-3.5 rounded-full text-center text-[13.5px] font-bold transition active:scale-[0.98] ${
                    featured
                      ? "bg-white dark:bg-black text-gray-900 dark:text-white hover:bg-cyan-300 dark:hover:bg-cyan-300 dark:hover:text-black"
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
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-[12.5px] text-gray-500 dark:text-gray-400">
          {t.pricing.customPkg} <a href="https://t.me/ciloktechcsbot" className="font-bold text-gray-900 dark:text-white underline underline-offset-4">{t.pricing.chatCustom}</a> {t.pricing.customSuffix}
        </div>
      </div>
    </section>
  );
}
