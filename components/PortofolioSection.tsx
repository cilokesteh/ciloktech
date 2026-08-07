"use client";
import { useI18n } from "@/lib/i18n/context";

const accents = [
  "from-emerald-500 to-cyan-500",
  "from-violet-600 to-fuchsia-500",
  "from-orange-500 to-red-500",
  "from-blue-600 to-indigo-600",
  "from-cyan-500 to-blue-600",
  "from-amber-500 to-orange-600",
];

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
    <section className="py-20 md:py-28 bg-white dark:bg-[#0a0a0a] px-6 transition-colors duration-300" id="portofolio">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 mb-10">
          <div className="inline-flex w-fit items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full">{t.portfolio.label}</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white max-w-[520px]">
              {t.portfolio.headline1}
              <span className="text-gray-400 dark:text-gray-500">{t.portfolio.headline2}</span>{t.portfolio.headline3}
            </h2>
            <p className="text-[14px] text-gray-600 dark:text-gray-400 max-w-[360px] leading-relaxed">{t.portfolio.sub}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div key={i} className="group rounded-[24px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141419] overflow-hidden hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-[0_24px_60px_rgba(6,182,212,0.12)] dark:hover:shadow-[0_24px_60px_rgba(6,182,212,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col">
              <div className={`h-[170px] bg-gradient-to-br ${accents[i] || accents[0]} relative p-6 flex flex-col justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" />
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-bold tracking-wide uppercase bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-gray-900 shadow-sm">{p.cat}</span>
                  <span className="text-[11px] font-bold bg-black/30 backdrop-blur-sm text-white px-3 py-1.5 rounded-full shadow-sm">{p.stats}</span>
                </div>
                <div className="mt-auto relative z-10"><div className="inline-flex h-px w-12 bg-white/70 mb-3" /><div className="text-white font-extrabold text-[20px] leading-tight drop-shadow-lg">{p.title}</div></div>
                <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
              </div>
              <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-white/[0.02]">
                <p className="text-[14px] leading-[1.7] text-gray-600 dark:text-gray-400 mb-5 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {(TAGS[i] || TAGS[0]).map((tag, j) => (
                    <span key={j} className="text-[11px] font-medium bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full group-hover:bg-gray-900 dark:group-hover:bg-cyan-600 group-hover:text-white group-hover:border-gray-900 dark:group-hover:border-cyan-600 transition-all duration-300">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="https://t.me/ciloktechcsbot" className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 px-6 py-3 rounded-full hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-gray-900 dark:hover:border-white transition">{t.portfolio.cta}</a>
        </div>
      </div>
    </section>
  );
}
