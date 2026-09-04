"use client";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

const icons = [
  <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>,
  <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  <svg key={3} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
];

export default function ServicesSection() {
  const { t } = useI18n();

  return (
    <section className="py-14 md:py-20 bg-[var(--background)] px-5 md:px-7 border-b swiss-line transition-colors duration-200 relative overflow-hidden" id="layanan">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-[1fr_2fr] gap-6 items-end pb-8 mb-10 border-b swiss-line"
        >
          <div>
            <div className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--accent-text)] mb-3">
              01 // KAPABILITAS
            </div>
            <h2 className="text-[34px] md:text-[50px] font-extrabold tracking-[-0.04em] leading-[0.94] text-gray-900 dark:text-white">
              {t.services.headline1}<br />{t.services.headline2}
            </h2>
          </div>
          <p className="font-mono text-[13px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-[560px]">
            {t.services.sub}
          </p>
        </motion.div>

        {/* Swiss Modular 2x2 grid */}
        <div className="grid md:grid-cols-2 border-t border-l swiss-line">
          {t.services.items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="p-7 md:p-9 border-r border-b swiss-line bg-[var(--card)] hover:bg-[var(--subtle)] transition flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[12px] font-bold tracking-[0.1em] text-[var(--accent-text)]">
                    0{i + 1} — SPEC
                  </span>
                  <div className="text-gray-900 dark:text-white opacity-40 hover:opacity-100 transition">
                    {icons[i]}
                  </div>
                </div>

                <h3 className="text-[22px] font-extrabold tracking-[-0.03em] mb-3 text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                  {s.desc}
                </p>
              </div>

              <ul className="space-y-2 pt-4 border-t swiss-line">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-2.5 font-mono text-[11px] text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-[var(--accent)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
