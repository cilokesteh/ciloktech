const plans = [
  {
    name: "Landing Page",
    price: "900rb",
    unit: "mulai",
    desc: "Buat validasi produk / jasa cepat. 1 halaman high-convert, bukan company profile abal-abal.",
    features: [
      "1 halaman sales-focused",
      "Mobile-first + <1s load",
      "SEO dasar + OG share",
      "WhatsApp CTA + Maps",
      "Hosting + domain *.web.id 1th",
      "Free 2x revisi minor",
    ],
    cta: "Pesan Landing Page",
    featured: false,
    href: "https://t.me/ciloktech?text=Halo%20CilokTech%2C%20mau%20Landing%20Page%20900rb",
  },
  {
    name: "Company Profile",
    price: "2.5jt",
    unit: "mulai — TERLARIS",
    desc: "Buat bisnis yang butuh kepercayaan. 5 halaman + CMS biar tim lo bisa update sendiri.",
    features: [
      "Hingga 5 halaman + Blog",
      "CMS Admin (tambah/edit sendiri)",
      "SEO advanced + sitemap + schema",
      "SSL + Security header",
      "Speed 90+ Lighthouse",
      "Maintenance 3 bulan",
      "Analytics + Pixel + Search Console",
    ],
    cta: "Ambil Paket Terlaris",
    featured: true,
    href: "https://t.me/ciloktech?text=Halo%20CilokTech%2C%20mau%20Company%20Profile%202.5jt",
  },
  {
    name: "Web App / Custom",
    price: "Custom",
    unit: "konsultasi dulu",
    desc: "POS, inventory, CRM, dashboard internal, bot, integrator. Dibikin dari nol sesuai alur bisnis lo.",
    features: [
      "Flow & DB design dari nol",
      "Auth + Role + Permission",
      "Real-time + Export + PWA",
      "API & integrasi pihak ketiga",
      "Docs + training tim",
      "Support & iterasi",
    ],
    cta: "Diskusikan Project",
    featured: false,
    href: "https://t.me/ciloktech?text=Halo%20CilokTech%2C%20mau%20konsultasi%20Web%20App%20Custom",
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f6f6f5] dark:bg-[#111111] border-y border-gray-200 dark:border-white/5 px-6 transition-colors duration-300" id="harga">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-900 dark:text-white bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 px-3 py-1 rounded-full mb-5 shadow-sm">
            Harga transparan, tanpa hidden fee
          </div>
          <h2 className="text-[32px] md:text-[46px] font-extrabold tracking-[-0.03em] leading-[0.9] text-gray-900 dark:text-white">
            Bayar sesuai value, <br />
            <span className="text-gray-400 dark:text-gray-500">bukan janji manis.</span>
          </h2>
          <p className="text-[15px] text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            Semua paket sudah termasuk konsultasi, desain, dev, deploy, dan training. Gak ada biaya kaget di belakang.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-[22px] p-7 flex flex-col transition-colors duration-300 ${
                plan.featured
                  ? "bg-gray-900 dark:bg-white text-white dark:text-black shadow-[0_24px_64px_rgba(0,0,0,0.22)] dark:shadow-[0_24px_64px_rgba(255,255,255,0.08)] md:-mt-4 md:mb-4 border border-gray-800 dark:border-white"
                  : "bg-white dark:bg-[#171717] border border-gray-200 dark:border-white/10 hover:border-gray-900 dark:hover:border-white"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-7 inline-flex items-center gap-1.5 bg-cyan-400 dark:bg-cyan-300 text-gray-900 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 animate-pulse" /> POPULER
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-[18px] font-bold tracking-tight ${plan.featured ? "text-white dark:text-black" : "text-gray-900 dark:text-white"}`}>
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-[36px] font-extrabold tracking-[-0.03em] leading-none">
                    {plan.price === "Custom" ? "Custom" : `Rp ${plan.price}`}
                  </span>
                </div>
                <div className={`text-[12px] mt-1 ${plan.featured ? "text-gray-400 dark:text-gray-600" : "text-gray-500 dark:text-gray-400"}`}>{plan.unit}</div>
                <p className={`text-[13px] leading-relaxed mt-4 ${plan.featured ? "text-gray-400 dark:text-gray-600" : "text-gray-600 dark:text-gray-400"}`}>{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex gap-2.5 text-[13px] leading-snug">
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[11px] shrink-0 ${
                        plan.featured ? "bg-white/10 dark:bg-black/10 text-white dark:text-black" : "bg-gray-900 dark:bg-white text-white dark:text-black"
                      }`}
                    >
                      ✓
                    </span>
                    <span className={plan.featured ? "text-gray-200 dark:text-gray-700" : "text-gray-700 dark:text-gray-300"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className={`w-full py-3.5 rounded-full text-center text-[13.5px] font-bold transition active:scale-[0.98] ${
                  plan.featured
                    ? "bg-white dark:bg-black text-gray-900 dark:text-white hover:bg-cyan-300 dark:hover:bg-cyan-300 dark:hover:text-black"
                    : "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-cyan-300 dark:hover:text-black"
                }`}
              >
                {plan.cta}
              </a>

              {!plan.featured && (
                <div className="text-[11px] text-center text-gray-500 mt-3">Konsultasi gratis, no hard-selling</div>
              )}
              {plan.featured && (
                <div className="text-[11px] text-center text-gray-500 dark:text-gray-600 mt-3">Balas &lt;2 jam • rata-rata live 3 hari</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-[12.5px] text-gray-500 dark:text-gray-400">
          Butuh paket lain? <a href="https://t.me/ciloktech" className="font-bold text-gray-900 dark:text-white underline underline-offset-4">Chat dulu</a> — gue bikinin custom sesuai budget.
        </div>
      </div>
    </section>
  );
}
