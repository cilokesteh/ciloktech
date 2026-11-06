"use client";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export default function JasaClient() {
  const { locale } = useI18n();
  const isEn = locale === "en";

  const services = [
    {
      title: isEn ? "Landing Page Development Services" : "Jasa Pembuatan Landing Page",
      badge: "Rp 900.000",
      time: isEn ? "Live in 2–3 Days" : "2–3 Hari Live",
      desc: isEn
        ? "Designed to focus on one product or service with high conversion. Sharp copywriting structure, sticky WhatsApp/Telegram CTAs, and instant performance."
        : "Dirancang khusus untuk fokus pada 1 produk/layanan dengan tingkat konversi tinggi. Struktur copywriting tajam, sticky CTA WhatsApp/Telegram, dan performa instan.",
      features: [
        isEn ? "Fully custom design (no off-the-shelf templates)" : "Desain custom khusus (bukan template pasaran)",
        isEn ? "Loads in <1 second (Next.js 15)" : "Kecepatan muat <1 detik (Next.js 15)",
        isEn ? "100% mobile-first responsive" : "Mobile-first responsive 100%",
        isEn ? "Essential on-page SEO + Open Graph preview" : "SEO On-Page dasar + Open Graph preview",
        isEn ? "Domain setup & Vercel Edge hosting" : "Setup domain & hosting Vercel Edge",
      ],
      cta: isEn ? "Consult on a Landing Page" : "Konsultasi Landing Page",
      href: "https://t.me/ciloktech?text=Halo%20CilokTech%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20Landing%20Page",
    },
    {
      title: isEn ? "Company Profile Website Development" : "Jasa Website Company Profile",
      badge: "Rp 1.500.000",
      time: isEn ? "Live in 3–7 Days" : "3–7 Hari Live",
      featured: true,
      desc: isEn
        ? "Complete solution for PT, CV, institutions, and SMEs that want maximum trust from clients and business partners. Includes an SEO blog and rich-snippet schema structure."
        : "Solusi lengkap untuk PT, CV, instansi, dan UMKM yang ingin membangun kepercayaan maksimal di mata klien dan mitra bisnis. Termasuk blog SEO dan struktur schema rich snippet.",
      features: [
        isEn ? "Everything in the Landing Page package" : "Semua fitur paket Landing Page",
        isEn ? "Up to 5 structured pages + SEO blog articles" : "Hingga 5 halaman terstruktur + Blog artikel SEO",
        "Schema Markup (Organization, FAQ, Breadcrumb)",
        isEn ? "Google Search Console & sitemap integration" : "Integrasi Google Search Console & Sitemap",
        isEn ? "100% of source code in your private GitHub" : "Source code 100% di private GitHub Anda",
        isEn ? "3 months of free maintenance support" : "Dukungan maintenance gratis 3 bulan",
      ],
      cta: isEn ? "Order a Company Profile" : "Pesan Company Profile",
      href: "https://t.me/ciloktech?text=Halo%20CilokTech%2C%20saya%20mau%20bikin%20website%20Company%20Profile%20profesional",
    },
    {
      title: isEn ? "Custom Web App & System Development" : "Jasa Pembuatan Web App & Sistem",
      badge: "Mulai Rp 2.500.000",
      time: isEn ? "1–2 Weeks" : "1–2 Minggu",
      desc: isEn
        ? "POS cashier apps, service booking systems, stock management, and interactive business operations dashboards with a real-time database and secure access rights."
        : "Aplikasi kasir (POS), sistem booking layanan, manajemen stok, hingga dashboard interaktif operasional bisnis dengan database real-time dan hak akses aman.",
      features: [
        isEn ? "POS cashier, queue booking, or dynamic catalog systems" : "Sistem kasir, booking antrean, atau katalog dinamis",
        isEn ? "Encrypted real-time database & multi-role auth" : "Database real-time terenkripsi & multi-role auth",
        isEn ? "Thermal receipt printing & barcode scanner support" : "Dukungan cetak struk thermal & barcode scanner",
        isEn ? "No monthly fees from third-party platforms" : "Tanpa biaya langganan bulanan platform pihak ketiga",
        isEn ? "Try the interactive demo right in your browser" : "Bisa coba demo interaktif langsung di browser",
      ],
      cta: isEn ? "Discuss Your System Needs" : "Bahas Kebutuhan Sistem",
      href: "https://t.me/ciloktech?text=Halo%20CilokTech%2C%20saya%20mau%20konsultasi%20pembuatan%20Web%20App%20kustom",
    },
  ];

  const pillars = [
    {
      num: "01",
      title: isEn ? "Instant Loading (<1 Second)" : "Kecepatan Akses Instan (<1 Detik)",
      desc: isEn
        ? "Built on modern Next.js 15 that produces lightweight static files (First Load only ~136kB). Visitors don't bounce over slow loading like WordPress templates."
        : "Menggunakan Next.js 15 modern yang menghasilkan file statis ringan (First Load hanya ~136kB). Pengunjung tidak kabur karena loading lambat seperti WordPress template.",
    },
    {
      num: "02",
      title: isEn ? "SEO-Ready from Day One" : "SEO-Ready dari Hari Pertama",
      desc: isEn
        ? "Comes with dynamic metadata, professional WhatsApp Open Graph sharing, automatic XML sitemap, JSON-LD structured data schema, and a robots.txt setup Googlebot loves."
        : "Dilengkapi metadata dinamis, Open Graph share WhatsApp profesional, sitemap XML otomatis, schema structured data JSON-LD, dan konfigurasi robots.txt yang ramah Googlebot.",
    },
    {
      num: "03",
      title: isEn ? "No Monthly Fees / Locked Rentals" : "Tanpa Biaya Bulanan / Sewa Terkunci",
      desc: isEn
        ? "One-time payment system. No monthly renewal traps. All source code is handed over to your GitHub account, free to host anywhere."
        : "Sistem sekali bayar. Kami tidak menggunakan jebakan perpanjangan bulanan. Seluruh source code diserahkan ke akun GitHub Anda, bebas hosting di mana pun.",
    },
    {
      num: "04",
      title: isEn ? "Straight to the Builder (One-Man Studio)" : "Langsung Builder (One-Man Studio)",
      desc: isEn
        ? "Efficient communication with no sales or PM middleman. Your needs go straight to a senior full-stack developer with fast replies under 2 hours."
        : "Komunikasi efisien tanpa perantara sales atau PM. Kebutuhan Anda langsung dieksekusi oleh senior full-stack developer dengan respon cepat di bawah 2 jam.",
    },
  ];

  return (
    <main id="main-content" className="pt-20 bg-[var(--background)] text-gray-900 dark:text-white transition-colors duration-200">
      {/* Hero Section */}
      <section className="px-5 md:px-7 py-16 md:py-24 border-b swiss-line bg-[var(--card)]">
        <div className="max-w-[1320px] mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1 border swiss-line text-[var(--accent-text)] mb-6 bg-[var(--subtle)]">
            {isEn ? "SPECIALIST SERVICES • ONE-MAN STUDIO" : "LAYANAN SPESIALIS • ONE-MAN STUDIO"}
          </div>
          <h1 className="text-[34px] sm:text-[46px] md:text-[60px] font-extrabold tracking-[-0.03em] leading-[1.02] max-w-4xl text-gray-900 dark:text-white">
            {isEn
              ? "Professional Website Development — Fast & Ready for Google's First Page."
              : "Jasa Pembuatan Website Profesional, Cepat & Siap Masuk Halaman Google."}
          </h1>
          <p className="font-mono text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400 mt-6 max-w-2xl leading-relaxed">
            {isEn
              ? "Build your business's digital reputation with a modern website built on Next.js 15. Sub-1-second load times, complete technical SEO structure, clean design on every screen, and 100% of the source code yours forever."
              : "Bangun reputasi digital bisnis Anda dengan website modern berbasis Next.js 15. Kecepatan muat di bawah 1 detik, struktur SEO teknis lengkap, desain rapi di semua layar, dan source code 100% milik Anda selamanya."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-[12px]">
            <a
              href="https://t.me/ciloktech?text=Halo%20CilokTech%2C%20saya%20mau%20konsultasi%20jasa%20pembuatan%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-[#0e0f0d] font-bold uppercase tracking-wider transition flex items-center gap-2"
            >
              <span>{isEn ? "Free Project Consultation" : "Konsultasi Proyek Gratis"}</span>
              <span>↗</span>
            </a>
            <Link
              href="/harga"
              className="px-6 py-3.5 border swiss-line bg-[var(--card)] hover:border-[var(--accent)] font-bold uppercase tracking-wider transition flex items-center gap-2"
            >
              <span>{isEn ? "See Full Pricing" : "Lihat Rincian Biaya"}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="px-5 md:px-7 py-16 border-b swiss-line bg-[var(--background)]">
        <div className="max-w-[1320px] mx-auto">
          <div className="mb-12 pb-6 border-b swiss-line">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--accent-text)] uppercase">{isEn ? "THE CILOKTECH QUALITY STANDARD" : "STANDAR KUALITAS CILOKTECH"}</span>
            <h2 className="text-[28px] md:text-[38px] font-extrabold tracking-tight mt-2">
              {isEn ? "Why Businesses Choose Our Website Services" : "Mengapa Bisnis Memilih Jasa Website Kami?"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.num} className="border swiss-line bg-[var(--card)] p-6 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-[20px] font-extrabold text-[var(--accent-text)] mb-3">{p.num}</div>
                  <h3 className="text-[17px] font-bold mb-2 text-gray-900 dark:text-white">{p.title}</h3>
                  <p className="font-mono text-[12.5px] text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Offerings */}
      <section className="px-5 md:px-7 py-16 md:py-24 border-b swiss-line bg-[var(--card)]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b swiss-line">
            <div>
              <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--accent-text)] uppercase">{isEn ? "SERVICE PACKAGE OPTIONS" : "PILIHAN PAKET LAYANAN"}</span>
              <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-tight mt-2 text-gray-900 dark:text-white">
                {isEn ? "Transparent Website Development Packages" : "Paket Jasa Pembuatan Website Transparan"}
              </h2>
            </div>
            <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 max-w-md">
              {isEn
                ? "Every package includes full technical setup, speed optimization, and a management guide — no hidden extra costs."
                : "Semua paket sudah termasuk konfigurasi teknis lengkap, optimasi kecepatan, dan panduan pengelolaan tanpa biaya tambahan tersembunyi."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`border swiss-line bg-[var(--background)] p-7 flex flex-col justify-between ${
                  s.featured ? "ring-2 ring-[var(--accent)]" : ""
                }`}
              >
                <div>
                  {s.featured && (
                    <div className="inline-block font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[var(--accent)] text-[#0e0f0d] mb-4">
                      {isEn ? "Most Popular" : "Paling Banyak Dipilih"}
                    </div>
                  )}
                  <h3 className="text-[20px] font-extrabold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-[26px] font-extrabold text-gray-900 dark:text-white">{s.badge}</span>
                    <span className="font-mono text-[11px] text-gray-500">{isEn ? "/ one-time payment" : "/ sekali bayar"}</span>
                  </div>
                  <div className="font-mono text-[11px] text-[var(--accent-text)] font-semibold mb-4">⏱ {s.time}</div>
                  <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{s.desc}</p>
                  <div className="border-t swiss-line pt-5 mb-6">
                    <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">{isEn ? "Included Features:" : "Fitur Termasuk:"}</div>
                    <ul className="space-y-2.5 font-mono text-[12px] text-gray-600 dark:text-gray-400">
                      {s.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3.5 font-mono text-[11px] font-bold uppercase tracking-wider transition border swiss-line ${
                    s.featured
                      ? "bg-[var(--accent)] text-[#0e0f0d] hover:opacity-90"
                      : "bg-[var(--card)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                  }`}
                >
                  {s.cta} ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links to Articles & Tools */}
      <section className="px-5 md:px-7 py-16 border-b swiss-line bg-[var(--background)]">
        <div className="max-w-[1320px] mx-auto">
          <div className="mb-8 pb-4 border-b swiss-line">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--accent-text)] uppercase">{isEn ? "GUIDES & EDUCATIONAL ARTICLES" : "PANDUAN & ARTIKEL EDUKASI"}</span>
            <h2 className="text-[24px] md:text-[34px] font-extrabold tracking-tight mt-2">
              {isEn ? "Learn Before Choosing a Website Service" : "Pelajari Sebelum Memilih Jasa Website"}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 font-mono text-[12px]">
            <Link
              href="/blog/biaya-bikin-website-2026-breakdown-jujur"
              className="border swiss-line bg-[var(--card)] p-5 hover:border-[var(--accent)] transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[var(--accent-text)] font-bold">{isEn ? "Cost & Budget" : "Biaya & Budget"}</span>
                <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mt-2 mb-2 font-sans">
                  Breakdown Jujur Biaya Pembuatan Website 2026
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Mengapa harga jasa website bisa berkisar Rp 500rb hingga Rp 15jt? Ketahui rincian komponen biaya yang sebenarnya.
                </p>
              </div>
              <div className="pt-4 text-[var(--accent-text)] uppercase font-bold tracking-wider">{isEn ? "Read More →" : "Baca Selengkapnya →"}</div>
            </Link>

            <Link
              href="/blog/kenapa-wordpress-lemot-solusi-nextjs"
              className="border swiss-line bg-[var(--card)] p-5 hover:border-[var(--accent)] transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[var(--accent-text)] font-bold">{isEn ? "Technology & Speed" : "Teknologi & Kecepatan"}</span>
                <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mt-2 mb-2 font-sans">
                  Kenapa WordPress Sering Lambat dan Solusi Next.js
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Perbandingan performa nyata antara CMS tradisional dengan static export modern untuk kecepatan bisnis Anda.
                </p>
              </div>
              <div className="pt-4 text-[var(--accent-text)] uppercase font-bold tracking-wider">{isEn ? "Read More →" : "Baca Selengkapnya →"}</div>
            </Link>

            <Link
              href="/demo"
              className="border swiss-line bg-[var(--card)] p-5 hover:border-[var(--accent)] transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[var(--accent-text)] font-bold">Interactive Sandbox</span>
                <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mt-2 mb-2 font-sans">
                  {isEn ? "Try the Live POS & Queue Demo" : "Coba Demo Sistem Kasir & Antrean Live"}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {isEn
                    ? "Test POS features and booking systems right in your browser — no registration or app install needed."
                    : "Uji coba fitur POS dan booking sistem langsung dari browser tanpa perlu registrasi atau instal aplikasi."}
                </p>
              </div>
              <div className="pt-4 text-[var(--accent-text)] uppercase font-bold tracking-wider">{isEn ? "Open the Live Demo →" : "Buka Demo Sekarang →"}</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-5 md:px-7 py-16 bg-[var(--card)]">
        <div className="max-w-[1320px] mx-auto p-8 md:p-12 border swiss-line bg-[var(--background)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--accent-text)] uppercase">{isEn ? "READY TO START?" : "SIAP MEMULAI?"}</span>
            <h2 className="text-[26px] sm:text-[34px] font-extrabold tracking-tight mt-2 text-gray-900 dark:text-white">
              {isEn ? "Let's Talk About Your Business Website Needs." : "Diskusikan Kebutuhan Website Bisnis Anda Sekarang."}
            </h2>
            <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 mt-2 max-w-xl leading-relaxed">
              {isEn
                ? "Consult directly with an experienced builder. Fast replies under 2 hours, no complicated presentations — straight to a technical roadmap and accurate estimate."
                : "Konsultasi langsung dengan builder berpengalaman. Respon cepat di bawah 2 jam, tanpa presentasi rumit, langsung roadmap teknis dan estimasi akurat."}
            </p>
          </div>
          <a
            href="https://t.me/ciloktech?text=Halo%20CilokTech%2C%20saya%20mau%20konsultasi%20jasa%20pembuatan%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 bg-[var(--accent)] text-[#0e0f0d] font-mono text-[12px] font-bold uppercase tracking-wider hover:opacity-90 transition"
          >
            {isEn ? "Contact via Telegram ↗" : "Hubungi via Telegram ↗"}
          </a>
        </div>
      </section>
    </main>
  );
}
