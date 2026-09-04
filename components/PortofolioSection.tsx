"use client";
import { useI18n } from "@/lib/i18n/context";
import { Reveal, RevealGrid } from "./Reveal";

const TAGS = [
  ["Next.js", "Firebase", "PWA"],
  ["React", "WebSocket", "Node.js"],
  ["Next.js", "PostgreSQL", "Prisma"],
  ["Next.js 15", "SEO", "MDX"],
  ["Python", "Telegram", "Queue"],
  ["Tailwind", "Conversion", "Analytics"],
];

export default function PortofolioSection() {
  const { t } = useI18n();
  const projects = t.portfolio.projects;

  return (
    <section className="py-14 md:py-20 bg-white dark:bg-[#0a0a0a] px-6 transition-colors duration-300" id="portofolio">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-col gap-3 mb-8">
          <div className="inline-flex w-fit items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full">{t.portfolio.label}</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white max-w-[520px]">
              {t.portfolio.headline1}
              <span className="text-gray-600 dark:text-gray-400">{t.portfolio.headline2}</span>{t.portfolio.headline3}
            </h2>
            <p className="text-[14px] text-gray-600 dark:text-gray-400 max-w-[360px] leading-relaxed">{t.portfolio.sub}</p>
          </div>
          </div>
        </Reveal>

        <RevealGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div key={i} className="group border swiss-line bg-[var(--card)] hover:border-[var(--accent)] hover:translate-y-[-2px] transition flex flex-col justify-between">
              <div className="p-6 border-b swiss-line bg-[var(--subtle)]">
                <div className="flex items-center justify-between font-mono text-[10px] text-gray-500 uppercase tracking-[0.1em] mb-4">
                  <span>0{i + 1} // SYS</span>
                  <span className="text-[var(--accent-text)]">● ACTIVE</span>
                </div>
                <div className="font-mono text-[11px] font-bold text-gray-600 dark:text-gray-400 mb-1">{p.cat}</div>
                <div className="text-[22px] font-extrabold tracking-[-0.03em] text-gray-900 dark:text-white">{p.title}</div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <p className="text-[13.5px] leading-relaxed text-gray-600 dark:text-gray-400 mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t swiss-line font-mono text-[10px]">
                  {(TAGS[i] || TAGS[0]).map((tag, j) => (
                    <span key={j} className="px-2 py-1 border swiss-line bg-[var(--background)] text-gray-700 dark:text-gray-300">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </RevealGrid>

        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-center">
          <a href="https://t.me/ciloktechcsbot" target="_blank" rel="noopener noreferrer" className="uiverse-button inline-flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.06em] text-gray-900 dark:text-white border swiss-line px-6 py-3.5 bg-[var(--card)] hover:bg-[var(--accent)] hover:text-[#0e0f0d] hover:border-[var(--accent)] transition">{t.portfolio.cta}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
