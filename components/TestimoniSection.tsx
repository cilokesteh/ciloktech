"use client";
import { useI18n } from "@/lib/i18n/context";

const meta = [
  { initial: "B", color: "bg-gray-900 dark:bg-white text-white dark:text-black" },
  { initial: "R", color: "bg-cyan-600 text-white" },
  { initial: "A", color: "bg-amber-500 text-white" },
];

const logosId = ["UMKM Batik", "FashionHub", "Fintech ID", "Kopi Kenangan Lokal", "Bengkel Maju", "Laundry Express"];
const logosEn = ["Batik SME", "FashionHub", "Fintech ID", "Local Kopi", "Maju Workshop", "Express Laundry"];

export default function TestimoniSection() {
  const { t, locale } = useI18n();
  const logos = locale === "en" ? logosEn : logosId;

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0a0a0a] px-6 transition-colors duration-300" id="testimoni">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full mb-4">
              {t.testimoni.label}
            </div>
            <h2 className="text-[30px] md:text-[42px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white max-w-[500px]">
              {t.testimoni.headline1}
              <br />
              <span className="text-gray-400 dark:text-gray-500">{t.testimoni.headline2}</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[16px] text-amber-400">★</span>
              ))}
            </div>
            <div className="text-[13px]">
              <span className="font-bold text-gray-900 dark:text-white">4.9/5</span>
              <span className="text-gray-500 dark:text-gray-400"> {t.testimoni.ratingLabel}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {t.testimoni.items.map((item, i) => {
            const m = meta[i] ?? meta[0];
            return (
              <div key={i} className="relative rounded-[20px] border border-gray-200 dark:border-white/10 bg-[#fafafa] dark:bg-[#171717] p-6 hover:bg-white dark:hover:bg-[#1a1a1a] hover:border-gray-900 dark:hover:border-white hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-amber-400 text-[14px]">★</span>
                  ))}
                </div>
                <p className="text-[14px] leading-[1.7] text-gray-700 dark:text-gray-300">&ldquo;{item.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold ${m.color}`}>
                    {m.initial}
                  </div>
                  <div className="leading-tight">
                    <div className="text-[13.5px] font-bold text-gray-900 dark:text-white">{item.name}</div>
                    <div className="text-[11.5px] text-gray-500 dark:text-gray-400">{item.role}</div>
                  </div>
                  <div className="ml-auto text-[11px] font-bold tracking-widest uppercase text-gray-300 dark:text-white/20 border border-gray-200 dark:border-white/10 px-2 py-1 rounded-full">
                    VERIFIED
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 pt-10 border-t border-gray-100 dark:border-white/5">
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 text-center mb-6">{t.testimoni.trustedTitle}</div>
          <div className="flex flex-wrap justify-center gap-3">
            {logos.map((l, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[12.5px] font-semibold text-gray-600 dark:text-gray-400"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
