const plans = [
  { name: "Landing Page", price: "Rp 900rb", features: ["Satu Halaman", "Mobile Friendly", "SEO Dasar", "Chat WhatsApp", "Hosting 1 Tahun"], cta: "Pesan Sekarang", featured: false },
  { name: "Company Profile", price: "Rp 2.5jt", features: ["Hingga 5 Halaman", "CMS Admin", "SEO Advanced", "Keamanan SSL", "Maintenance 3 Bulan"], cta: "Pesan Sekarang", featured: true },
  { name: "Web App / Custom", price: "Konsultasi", features: ["Dashboard Admin", "Integrasi API", "Database", "Sistem Otomasi", "Full Support"], cta: "Diskusikan Project", featured: false },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-white px-6" id="harga">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pilih Paket yang Sesuai</h2>
          <p className="text-gray-600">Transparan, tanpa biaya tersembunyi.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <div key={idx} className={`p-8 rounded-2xl border ${plan.featured ? "border-cyan-500 shadow-xl md:-mt-4" : "border-gray-200"}`}>
              {plan.featured && <span className="bg-cyan-500 text-white text-xs px-3 py-1 rounded-full uppercase font-bold">Terlaris</span>}
              <h3 className="text-xl font-bold mt-4">{plan.name}</h3>
              <div className="text-3xl font-extrabold my-6">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2"><span className="text-cyan-500">✓</span> {f}</li>
                ))}
              </ul>
              <a href="https://t.me/ciloktech" className={`block w-full py-3 text-center rounded-lg font-bold ${plan.featured ? "bg-cyan-600 text-white hover:bg-cyan-700" : "bg-gray-900 text-white hover:bg-gray-800"} transition`}>{plan.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
