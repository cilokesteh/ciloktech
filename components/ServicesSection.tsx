const services = [
  { icon: "🌐", title: "Website & Landing Page", desc: "Company profile, landing page, atau blog yang cepat, SEO-friendly, dan mobile-first." },
  { icon: "📊", title: "Web App & Dashboard", desc: "Sistem internal, admin panel, CRM, atau POS yang fully custom sesuai kebutuhan bisnis." },
  { icon: "⚡", title: "Custom Development", desc: "Bot Telegram, integrasi API, otomasi workflow, atau fitur spesifik yang tidak ada di tools umum." },
  { icon: "🛡️", title: "Maintenance & Security", desc: "Update berkala, monitoring uptime, patch keamanan, dan backup otomatis." },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white px-6" id="layanan">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Yang Bisa Dibantuin</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Fokus utama: website, web app, dan custom development. Dikerjakan sampai jalan dan bisa dipakai.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl border border-gray-100 hover:border-cyan-200 hover:shadow-lg transition group">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-600 transition">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
