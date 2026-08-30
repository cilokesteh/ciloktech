"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

const icons = [
  <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>,
  <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  <svg key={3} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
];

/* Bento layout: card 0 & 2 span tinggi dobel di desktop, card 1 span 2 kolom.
   Grid 4 kolom → baris atas [0, 0, 1, 1], baris bawah [2, 2, 3, 3] visual asimetris. */
const bentoSpan = [
  "lg:row-span-2 lg:flex lg:flex-col",
  "",
  "lg:row-span-2 lg:flex lg:flex-col",
  "",
];

export default function ServicesSection() {
  const { t } = useI18n();

  return (
    <section className="py-14 md:py-20 bg-[#fafafa] dark:bg-[#101014] px-6 border-y border-gray-100 dark:border-white/5 transition-colors duration-300 relative overflow-hidden" id="layanan">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 64 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.9, ease: [0.12, 1, 0.22, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 px-3 py-1 rounded-full mb-4">{t.services.label}</div>
            <h2 className="text-[32px] md:text-[42px] font-extrabold tracking-[-0.03em] leading-[0.95] text-gray-900 dark:text-white">
              {t.services.headline1}<br />{t.services.headline2}
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-[380px]">{t.services.sub}</p>
        </motion.div>

        {/* Bento grid: asimetris, kartu pertama & ketiga lebih tinggi di desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:auto-rows-fr">
          {t.services.items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 64 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.9, delay: i * 0.25, ease: [0.12, 1, 0.22, 1] }}
              className={`uiverse-card group relative rounded-[20px] p-6 bg-white dark:bg-[#141419] border border-gray-200 dark:border-white/10 ${bentoSpan[i]} overflow-hidden`}
            >
              {/* gradient wash — beda warna per kartu biar ada identitas */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                i === 0 ? "bg-gradient-to-br from-amber-700/[0.07] via-transparent to-rose-500/[0.05]"
                : i === 1 ? "bg-gradient-to-br from-amber-600/[0.06] via-transparent to-amber-700/[0.04]"
                : i === 2 ? "bg-gradient-to-br from-rose-500/[0.05] via-transparent to-rose-600/[0.04]"
                : "bg-gradient-to-br from-amber-500/[0.06] via-transparent to-emerald-500/[0.04]"
              }`} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-amber-800 dark:bg-amber-500 text-white dark:text-black flex items-center justify-center mb-5 shadow-lg group-hover:shadow-amber-700/30 dark:group-hover:shadow-amber-400/30 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">{icons[i]}</div>
                <h3 className="text-[17px] font-bold tracking-tight mb-3 text-gray-900 dark:text-white">{s.title}</h3>
                <p className="text-[13.5px] leading-[1.7] text-gray-600 dark:text-gray-400 mb-5">{s.desc}</p>
                <ul className="space-y-2.5 mt-auto">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-[12.5px] font-medium text-gray-700 dark:text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-amber-800 dark:bg-amber-500 text-white flex items-center justify-center text-[10px] shadow-sm">✓</span>{p}
                    </li>
                  ))}
                </ul>
                {/* nomor besar watermark ala bento premium */}
                <div className="absolute bottom-3 right-5 text-[44px] leading-none font-extrabold text-gray-900/[0.04] dark:text-white/[0.04] select-none pointer-events-none">{String(i + 1).padStart(2, "0")}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
