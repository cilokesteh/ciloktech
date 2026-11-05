"use client";
import { useI18n } from "@/lib/i18n/context";

const TAGS = [
  ["Next.js", "Firebase", "PWA"],
  ["React", "WebSocket", "Node.js"],
  ["Next.js", "PostgreSQL", "Prisma"],
  ["Next.js 15", "SEO", "MDX"],
  ["Python", "Telegram", "Queue"],
  ["Tailwind", "Conversion", "Analytics"],
];

const CAT_STICKERS = ["pop-sticker", "pop-sticker pop-sticker-pink", "pop-sticker pop-sticker-yellow", "pop-sticker pop-sticker-violet", "pop-sticker pop-sticker-sky"];

export default function PortofolioSection() {
  const { t } = useI18n();
  const projects = t.portfolio.projects;

  return (
    <section className="py-14 md:py-20 bg-[var(--background)] px-5 md:px-7 border-b swiss-line transition-colors duration-200" id="portofolio">
      <div className="max-w-[1320px] mx-auto">
        <div>
          <div className="flex flex-col gap-3 mb-10 pb-6 border-b swiss-line">
            <div className="pop-sticker w-fit">
              [02] ARSIP REKAYASA PRODUKSI
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="text-[34px] md:text-[48px] font-extrabold tracking-[-0.04em] leading-[1.08] text-gray-950 dark:text-white max-w-[560px]">
                {t.portfolio.headline1}
                <span className="text-gray-500">{t.portfolio.headline2}</span>{t.portfolio.headline3}
              </h2>
              <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 max-w-[400px] leading-relaxed">
                {t.portfolio.sub}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((p, i) => (
            <div key={i} className="pop-card p-7 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between font-mono text-[10.5px] mb-4">
                  <span className="font-bold text-gray-500 uppercase tracking-wider">PROJECT 0{i + 1}</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-500 font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE DEPLOYED
                  </span>
                </div>
                <span className={`${CAT_STICKERS[i % CAT_STICKERS.length]} mb-3`}>
                  {p.cat}
                </span>
                <h3 className="text-[22px] font-extrabold tracking-[-0.03em] text-gray-950 dark:text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                  {p.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-200/60 dark:border-white/10 font-mono text-[10px]">
                {(TAGS[i] || TAGS[0]).map((tag, j) => (
                  <span key={j} className="px-3 py-1 bg-[var(--subtle)] border-2 border-[var(--border-strong)] text-gray-700 dark:text-gray-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="mt-10 flex justify-center">
            <a
              href="https://t.me/ciloktechcsbot"
              target="_blank"
              rel="noopener noreferrer"
              className="pop-btn pop-btn-primary"
            >
              <span>{t.portfolio.cta}</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
