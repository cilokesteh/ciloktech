"use client";
import Link from "next/link";

export default function JasaClient() {
  const services = [
    {
      title: "Jasa Pembuatan Landing Page",
      badge: "Rp 900.000",
      time: "2–3 Hari Live",
      desc: "Dirancang khusus untuk fokus pada 1 produk/layanan dengan tingkat konversi tinggi. Struktur copywriting tajam, sticky CTA WhatsApp/Telegram, dan performa instan.",
      features: [
        "Desain custom khusus (bukan template pasaran)",
        "Kecepatan muat <1 detik (Next.js 15)",
        "Mobile-first responsive 100%",
        "SEO On-Page dasar + Open Graph preview",
        "Setup domain & hosting Vercel Edge",
      ],
      cta: "Konsultasi Landing Page",
      href: "https://t.me/ciloktech?text=Halo%20CilokTech%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20Landing%20Page",
    },
    {
      title: "Jasa Website Company Profile",
      badge: "Rp 1.500.000",
      time: "3–7 Hari Live",
      featured: true,
      desc: "Solusi lengkap untuk PT, CV, instansi, dan UMKM yang ingin membangun kepercayaan maksimal di mata klien dan mitra bisnis. Termasuk blog SEO dan struktur schema rich snippet.",
      features: [
        "Semua fitur paket Landing Page",
        "Hingga 5 halaman terstruktur + Blog artikel SEO",
        "Schema Markup (Organization, FAQ, Breadcrumb)",
        "Integrasi Google Search Console & Sitemap",
        "Source code 100% di private GitHub Anda",
        "Dukungan maintenance gratis 3 bulan",
      ],
      cta: "Pesan Company Profile",
      href: "https://t.me/ciloktech?text=Halo%20CilokTech%2C%20saya%20mau%20bikin%20website%20Company%20Profile%20profesional",
    },
    {
      title: "Jasa Pembuatan Web App & Sistem",
      badge: "Mulai Rp 2.500.000",
      time: "1–2 Minggu",
      desc: "Aplikasi kasir (POS), sistem booking layanan, manajemen stok, hingga dashboard interaktif operasional bisnis dengan database real-time dan hak akses aman.",
      features: [
        "Sistem kasir, booking antrean, atau katalog dinamis",
        "Database real-time terenkripsi & multi-role auth",
        "Dukungan cetak struk thermal & barcode scanner",
        "Tanpa biaya langganan bulanan platform pihak ketiga",
        "Bisa coba demo interaktif langsung di browser",
      ],
      cta: "Bahas Kebutuhan Sistem",
      href: "https://t.me/ciloktech?text=Halo%20CilokTech%2C%20saya%20mau%20konsultasi%20pembuatan%20Web%20App%20kustom",
    },
  ];

  const pillars = [
    {
      num: "01",
      title: "Kecepatan Akses Instan (<1 Detik)",
      desc: "Menggunakan Next.js 15 modern yang menghasilkan file statis ringan (First Load hanya ~136kB). Pengunjung tidak kabur karena loading lambat seperti WordPress template.",
    },
    {
      num: "02",
      title: "SEO-Ready dari Hari Pertama",
      desc: "Dilengkapi metadata dinamis, Open Graph share WhatsApp profesional, sitemap XML otomatis, schema structured data JSON-LD, dan konfigurasi robots.txt yang ramah Googlebot.",
    },
    {
      num: "03",
      title: "Tanpa Biaya Bulanan / Sewa Terkunci",
      desc: "Sistem sekali bayar. Kami tidak menggunakan jebakan perpanjangan bulanan. Seluruh source code diserahkan ke akun GitHub Anda, bebas hosting di mana pun.",
    },
    {
      num: "04",
      title: "Langsung Builder (One-Man Studio)",
      desc: "Komunikasi efisien tanpa perantara sales atau PM. Kebutuhan Anda langsung dieksekusi oleh senior full-stack developer dengan respon cepat di bawah 2 jam.",
    },
  ];

  return (
    <main id="main-content" className="pt-20 bg-[var(--background)] text-gray-900 dark:text-white transition-colors duration-200">
      {/* Hero Section */}
      <section className="px-5 md:px-7 py-16 md:py-24 border-b swiss-line bg-[var(--card)]">
        <div className="max-w-[1320px] mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1 border swiss-line text-[var(--accent-text)] mb-6 bg-[var(--subtle)]">
            LAYANAN SPESIALIS • ONE-MAN STUDIO
          </div>
          <h1 className="text-[34px] sm:text-[46px] md:text-[60px] font-extrabold tracking-[-0.03em] leading-[1.02] max-w-4xl text-gray-900 dark:text-white">
            Jasa Pembuatan Website Profesional, Cepat &amp; Siap Masuk Halaman Google.
          </h1>
          <p className="font-mono text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400 mt-6 max-w-2xl leading-relaxed">
            Bangun reputasi digital bisnis Anda dengan website modern berbasis Next.js 15. Kecepatan muat di bawah 1 detik, struktur SEO teknis lengkap, desain rapi di semua layar, dan source code 100% milik Anda selamanya.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-[12px]">
            <a
              href="https://t.me/ciloktech?text=Halo%20CilokTech%2C%20saya%20mau%20konsultasi%20jasa%20pembuatan%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-[#0e0f0d] font-bold uppercase tracking-wider transition flex items-center gap-2"
            >
              <span>Konsultasi Proyek Gratis</span>
              <span>↗</span>
            </a>
            <Link
              href="/harga"
              className="px-6 py-3.5 border swiss-line bg-[var(--card)] hover:border-[var(--accent)] font-bold uppercase tracking-wider transition flex items-center gap-2"
            >
              <span>Lihat Rincian Biaya</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="px-5 md:px-7 py-16 border-b swiss-line bg-[var(--background)]">
        <div className="max-w-[1320px] mx-auto">
          <div className="mb-12 pb-6 border-b swiss-line">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--accent-text)] uppercase">STANDAR KUALITAS CILOKTECH</span>
            <h2 className="text-[28px] md:text-[38px] font-extrabold tracking-tight mt-2">
              Mengapa Bisnis Memilih Jasa Website Kami?
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
              <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--accent-text)] uppercase">PILIHAN PAKET LAYANAN</span>
              <h2 className="text-[28px] md:text-[42px] font-extrabold tracking-tight mt-2 text-gray-900 dark:text-white">
                Paket Jasa Pembuatan Website Transparan
              </h2>
            </div>
            <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 max-w-md">
              Semua paket sudah termasuk konfigurasi teknis lengkap, optimasi kecepatan, dan panduan pengelolaan tanpa biaya tambahan tersembunyi.
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
                      Paling Banyak Dipilih
                    </div>
                  )}
                  <h3 className="text-[20px] font-extrabold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-[26px] font-extrabold text-gray-900 dark:text-white">{s.badge}</span>
                    <span className="font-mono text-[11px] text-gray-500">/ sekali bayar</span>
                  </div>
                  <div className="font-mono text-[11px] text-[var(--accent-text)] font-semibold mb-4">⏱ {s.time}</div>
                  <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{s.desc}</p>
                  <div className="border-t swiss-line pt-5 mb-6">
                    <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">Fitur Termasuk:</div>
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
            <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--accent-text)] uppercase">PANDUAN &amp; ARTIKEL EDUKASI</span>
            <h2 className="text-[24px] md:text-[34px] font-extrabold tracking-tight mt-2">
              Pelajari Sebelum Memilih Jasa Website
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 font-mono text-[12px]">
            <Link
              href="/blog/biaya-bikin-website-2026-breakdown-jujur"
              className="border swiss-line bg-[var(--card)] p-5 hover:border-[var(--accent)] transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[var(--accent-text)] font-bold">Biaya &amp; Budget</span>
                <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mt-2 mb-2 font-sans">
                  Breakdown Jujur Biaya Pembuatan Website 2026
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Mengapa harga jasa website bisa berkisar Rp 500rb hingga Rp 15jt? Ketahui rincian komponen biaya yang sebenarnya.
                </p>
              </div>
              <div className="pt-4 text-[var(--accent-text)] uppercase font-bold tracking-wider">Baca Selengkapnya →</div>
            </Link>

            <Link
              href="/blog/kenapa-wordpress-lemot-solusi-nextjs"
              className="border swiss-line bg-[var(--card)] p-5 hover:border-[var(--accent)] transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[var(--accent-text)] font-bold">Teknologi &amp; Kecepatan</span>
                <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mt-2 mb-2 font-sans">
                  Kenapa WordPress Sering Lambat dan Solusi Next.js
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Perbandingan performa nyata antara CMS tradisional dengan static export modern untuk kecepatan bisnis Anda.
                </p>
              </div>
              <div className="pt-4 text-[var(--accent-text)] uppercase font-bold tracking-wider">Baca Selengkapnya →</div>
            </Link>

            <Link
              href="/demo"
              className="border swiss-line bg-[var(--card)] p-5 hover:border-[var(--accent)] transition flex flex-col justify-between"
            >
              <div>
                <span className="text-[var(--accent-text)] font-bold">Interactive Sandbox</span>
                <h4 className="text-[15px] font-bold text-gray-900 dark:text-white mt-2 mb-2 font-sans">
                  Coba Demo Sistem Kasir &amp; Antrean Live
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Uji coba fitur POS dan booking sistem langsung dari browser tanpa perlu registrasi atau instal aplikasi.
                </p>
              </div>
              <div className="pt-4 text-[var(--accent-text)] uppercase font-bold tracking-wider">Buka Demo Sekarang →</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-5 md:px-7 py-16 bg-[var(--card)]">
        <div className="max-w-[1320px] mx-auto p-8 md:p-12 border swiss-line bg-[var(--background)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-[11px] font-bold tracking-widest text-[var(--accent-text)] uppercase">SIAP MEMULAI?</span>
            <h2 className="text-[26px] sm:text-[34px] font-extrabold tracking-tight mt-2 text-gray-900 dark:text-white">
              Diskusikan Kebutuhan Website Bisnis Anda Sekarang.
            </h2>
            <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 mt-2 max-w-xl leading-relaxed">
              Konsultasi langsung dengan builder berpengalaman. Respon cepat di bawah 2 jam, tanpa presentasi rumit, langsung roadmap teknis dan estimasi akurat.
            </p>
          </div>
          <a
            href="https://t.me/ciloktech?text=Halo%20CilokTech%2C%20saya%20mau%20konsultasi%20jasa%20pembuatan%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 bg-[var(--accent)] text-[#0e0f0d] font-mono text-[12px] font-bold uppercase tracking-wider hover:opacity-90 transition"
          >
            Hubungi via Telegram ↗
          </a>
        </div>
      </section>
    </main>
  );
}
