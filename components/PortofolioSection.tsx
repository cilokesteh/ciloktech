const projects = [
  {
    title: "POS System UMKM",
    cat: "Web App • Firebase",
    desc: "Kasir web buat UMKM — inventori, laporan penjualan harian, struk thermal, multi-outlet sync real-time.",
    tags: ["Next.js", "Firebase", "PWA"],
    stats: "1.2k transaksi / hari",
    accent: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Server Control Dashboard",
    cat: "Internal Tool • Real-time",
    desc: "Dashboard monitoring VPS — CPU, RAM, disk, service status, auto-restart failed process via WebSocket.",
    tags: ["React", "WebSocket", "Node.js"],
    stats: "Uptime 99.9%",
    accent: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "CRM + Pipeline B2B",
    cat: "Web App • SaaS",
    desc: "Manajemen lead, follow-up WA otomatis, pipeline drag-n-drop, laporan closing rate per sales.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    stats: "+31% closing rate",
    accent: "from-orange-500 to-red-500",
  },
  {
    title: "Company Profile Pro",
    cat: "Website • SEO",
    desc: "Company profile <1s LCP, schema LocalBusiness, OG dynamic, sitemap auto, blog MDX.",
    tags: ["Next.js 15", "SEO", "MDX"],
    stats: "98 Lighthouse",
    accent: "from-blue-600 to-indigo-600",
  },
  {
    title: "Telegram Bot Ecosystem",
    cat: "Automation • Bot",
    desc: "Bot monitoring harga, notifikasi stock, auto claim & farming — 10+ worker parallel, SQLite queue.",
    tags: ["Python", "Telegram", "Queue"],
    stats: "10k+ jobs / day",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "Sales Landing UMKM",
    cat: "Landing Page • Conversion",
    desc: "Landing page conversion-focused — sticky CTA, WA direct, Maps embed, testimonial slider.",
    tags: ["Tailwind", "Conversion", "Analytics"],
    stats: "4.2% CR avg",
    accent: "from-amber-500 to-orange-600",
  },
];

export default function PortofolioSection() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-[#0a0a0a] px-6 transition-colors duration-300" id="portofolio">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 mb-10">
          <div className="inline-flex w-fit items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full">
            Portfolio — selected works
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-[32px] md:text-[44px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white max-w-[520px]">
              Hasil kerja yang
              <span className="text-gray-400 dark:text-gray-500"> beneran dipake client,</span> bukan dummy.
            </h2>
            <p className="text-[14px] text-gray-600 dark:text-gray-400 max-w-[360px] leading-relaxed">
              Tiap project repo private, ada staging, ada docs. 3 hari rata-rata go-live. No template marketplace.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group rounded-[20px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#171717] overflow-hidden hover:border-gray-900 dark:hover:border-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col"
            >
              <div className={`h-[160px] bg-gradient-to-br ${p.accent} relative p-5 flex flex-col justify-between overflow-hidden`}>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wide uppercase bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-gray-900">
                    {p.cat}
                  </span>
                  <span className="text-[11px] font-bold bg-black/20 backdrop-blur text-white px-2.5 py-1 rounded-full">
                    {p.stats}
                  </span>
                </div>
                <div className="mt-auto">
                  <div className="inline-flex h-px w-10 bg-white/60 mb-3" />
                  <div className="text-white font-extrabold text-[18px] leading-tight drop-shadow-sm">{p.title}</div>
                </div>
                <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <p className="text-[13.5px] leading-[1.6] text-gray-600 dark:text-gray-400 mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[11px] font-medium bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-full group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black group-hover:border-gray-900 dark:group-hover:border-white transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://t.me/ciloktech"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 px-6 py-3 rounded-full hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-gray-900 dark:hover:border-white transition"
          >
            Mau project serupa? Diskusi dulu →
          </a>
        </div>
      </div>
    </section>
  );
}
