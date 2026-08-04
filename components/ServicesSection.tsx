const services = [
  {
    title: "Website & Landing Page",
    desc: "Company profile, landing page, sales page yang ngebut <1s, SEO on-page lengkap, mobile-first. Fokus 1 hal: konversi.",
    points: ["Next.js 15 + Tailwind", "SEO + OG + Schema", "Analytics + Pixel siap"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    ),
  },
  {
    title: "Web App & Dashboard",
    desc: "POS, CRM, admin panel, inventory, multi-outlet. Dibikin dari nol sesuai flow bisnis lo, bukan template ngasal.",
    points: ["Custom DB + Auth + Role", "Real-time + Export", "PWA ready"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
    ),
  },
  {
    title: "Custom Dev & Automation",
    desc: "Bot Telegram, scraper monitor, integrasi API, webhook, auto-notifikasi. Yang gak ada di SaaS umum, gue bikinin.",
    points: ["Telegram Bot + WA Bot", "API & Webhook", "Cron & Worker"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    ),
  },
  {
    title: "Maintenance & Security",
    desc: "Uptime monitor, backup harian, patch security, performance tuning. Website lo tetep ngebut tanpa drama down.",
    points: ["Uptime 99.9% monitor", "Backup + Rollback", "Speed & Security patch"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa] dark:bg-[#111111] px-6 border-y border-gray-100 dark:border-white/5 transition-colors duration-300" id="layanan">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900/50 px-3 py-1 rounded-full mb-4">
              Layanan
            </div>
            <h2 className="text-[32px] md:text-[42px] font-extrabold tracking-[-0.03em] leading-[0.95] text-gray-900 dark:text-white">
              Bukan jualan template.<br />Gue bangun sistem
              <span className="text-gray-400 dark:text-gray-500"> yang dipakai.</span>
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 max-w-[380px]">
            Semua project dikerjain dari nol, repo private, dokumentasi jelas. Fokus ke speed, SEO, dan conversion. Bukan sekedar &ldquo;jadi&rdquo;.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-[#171717] rounded-[18px] border border-gray-200 dark:border-white/10 p-6 hover:border-gray-900 dark:hover:border-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-center mb-5 group-hover:bg-cyan-600 dark:group-hover:bg-cyan-400 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-[16px] font-bold tracking-tight mb-2 text-gray-900 dark:text-white">{s.title}</h3>
              <p className="text-[13.5px] leading-[1.6] text-gray-600 dark:text-gray-400 mb-4">{s.desc}</p>
              <ul className="space-y-2">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-2 text-[12.5px] font-medium text-gray-700 dark:text-gray-300">
                    <span className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-[10px]">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="absolute top-5 right-5 text-[11px] font-bold text-gray-300 dark:text-white/20 group-hover:text-gray-900 dark:group-hover:text-white transition">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
