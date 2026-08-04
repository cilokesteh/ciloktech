const projects = [
  { title: "POS System UMKM", desc: "Aplikasi kasir berbasis web untuk UMKM dengan fitur inventori, laporan penjualan, dan multi-outlet.", tags: ["Next.js", "Firebase", "Tailwind"], gradient: "from-emerald-400 to-cyan-500" },
  { title: "Server Control Dashboard", desc: "Dashboard monitoring server real-time — CPU, RAM, disk, dan service status dalam satu tampilan.", tags: ["React", "WebSocket", "Node.js"], gradient: "from-violet-400 to-fuchsia-500" },
  { title: "Admin Panel & CRM", desc: "Sistem manajemen pelanggan, follow-up otomasi, dan pipeline penjualan untuk bisnis B2B.", tags: ["Next.js", "PostgreSQL", "Prisma"], gradient: "from-orange-400 to-red-500" },
  { title: "Website Company Profile", desc: "Landing page profesional dengan SEO on-page dan kecepatan loading di bawah 1 detik.", tags: ["Next.js", "Vercel", "Tailwind"], gradient: "from-blue-400 to-indigo-500" },
  { title: "Telegram Bot & Automation", desc: "Bot otomasi untuk monitoring harga, notifikasi, dan integrasi multi-platform.", tags: ["Python", "Baileys", "SQLite"], gradient: "from-cyan-400 to-blue-500" },
  { title: "Landing Page UMKM", desc: "Halaman penjualan conversion-focused untuk bisnis lokal dengan WhatsApp button dan Google Maps.", tags: ["HTML", "Tailwind", "SEO"], gradient: "from-amber-400 to-orange-500" },
];

export default function PortofolioSection() {
  return (
    <section className="py-24 bg-gray-50 px-6" id="portofolio">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contoh yang Udah Dikerjain</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Setiap proyek dikerjakan dari nol sampai jalan. Bukan template, bukan Copas.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition">
              <div className={`h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white font-bold text-sm">{p.title}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-600 transition">{p.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
