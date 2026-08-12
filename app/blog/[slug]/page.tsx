import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { posts, getPost } from "../data";
import { BlogDetailClientLabels, BlogDetailCTA } from "./BlogSlugClient";

type Props = { params: Promise<{ slug: string }> };

const contents: Record<string, { body: string[]; keywords: string }> = {
  "alasan-website-umkm-sepi-pengunjung": {
    keywords: "website umkm sepi, cara meningkatkan traffic umkm, seo umkm, website umkm tidak muncul di google",
    body: [
      "Anda sudah memiliki 5.000 followers Instagram, tetapi website tetap sepi pengunjung? Kondisi ini umum terjadi — Instagram dan Google menggunakan mekanisme yang sangat berbeda dalam mendatangkan audiens.",
      "### 1. Website Anda belum SEO-ready — masih berfungsi sebagai brosur online\nTanpa Open Graph tag, sitemap.xml, dan schema LocalBusiness, Google kesulitan memahami bisnis Anda. Akibatnya, website tidak terindeks. Solusi: Next.js 15 menghasilkan sitemap + OG + JSON-LD secara otomatis. Di CilokTech, ini adalah standar default.",
      "### 2. Waktu muat lebih dari 3 detik — pengunjung pergi sebelum melihat produk\nRata-rata WordPress + Elementor memiliki LCP 4,5 detik. Sementara pengguna Indonesia hanya bersedia menunggu sekitar 2 detik. Solusi: Saya membangun dengan First Load 111kB dan LCP <1 detik. Kecepatan berbanding lurus dengan konversi.",
      "### 3. Tidak ada call-to-action yang jelas — pengunjung kebingungan harus melakukan apa\nWebsite hanya menampilkan foto dan tulisan 'Selamat datang'. Tidak ada tombol WhatsApp, Telegram, atau Google Maps. Solusi: Sticky CTA + floating Chat di setiap halaman.",
      "### 4. Tidak mobile-first — padahal 80% traffic UMKM berasal dari ponsel\nDesain hanya untuk desktop, ketika dibuka di HP menjadi berantakan dan tombol sulit diklik. Solusi: Saya mendesain versi mobile terlebih dahulu, kemudian desktop.",
      "### 5. Menggunakan hosting gratis atau berkualitas rendah — down saat dibutuhkan\nHosting gratis berarti SEO nol. Sering mengalami downtime, SSL tidak aktif, dan rentan diretas. Solusi: Vercel Edge + SSL otomatis dengan uptime 99,9% — gratis tahun pertama di CilokTech.",
      "#### Kesimpulan:\nWebsite UMKM yang menghasilkan pelanggan harus: SEO-ready, <1 detik, mobile-first, CTA jelas, dan hosting profesional. Bukan sekadar tampilan menarik. Jika website Anda sepi pengunjung, periksa 5 poin ini terlebih dahulu. Hitung kerugian Anda di /kalkulator.",
    ],
  },
  "landing-page-vs-company-profile": {
    keywords: "landing page vs company profile, perbedaan landing page dan company profile, jenis website umkm",
    body: [
      "Banyak UMKM salah memilih: ingin menjual 1 produk tetapi meminta company profile 5 halaman. Hasil akhirnya: biaya membengkak tanpa konversi yang jelas.",
      "### Landing Page (Rp 900rb) — untuk menjual 1 produk\nFokus pada 1 tujuan: konversi. Struktur ideal: Hero + Problem + Solution + Testimoni + Pricing + FAQ + CTA. Tanpa navigasi yang berputar-putar. Contoh penggunaan: jasa las, laundry kiloan, bengkel mobil. Go-live dalam 2–3 hari.",
      "### Company Profile (Rp 1,5jt) — untuk membangun kepercayaan\nFokus pada: kepercayaan dan kredibilitas. Struktur: Home + Layanan + Portofolio + Harga + Testimoni + Kontak + Blog. Seperti ciloktech.web.id saat ini. Ideal untuk: PT, CV, konsultan, agency, dan institusi pendidikan.",
      "### Kapan harus memilih yang mana?\n- 1 produk, butuh leads cepat → Landing Page\n- Banyak layanan, butuh portofolio + blog SEO → Company Profile\n- Aplikasi kasir / inventory / dashboard internal → Web App Custom mulai Rp 2,5jt+",
      "#### Aturan praktis saya:\nJika budget di bawah Rp 1,5jt dan Anda butuh closing minggu ini → pilih Landing Page. Jika ingin bermain untuk jangka panjang dengan SEO + branding → Company Profile Rp 1,5jt (value setara Rp 5-7jt). Lihat rincian lengkap di /harga atau hitung ROI di /kalkulator.",
    ],
  },
  "kenapa-wordpress-lemot-solusi-nextjs": {
    keywords: "wordpress lemot, nextjs vs wordpress, website wordpress kena hack, solusi wordpress lambat",
    body: [
      "90% website UMKM di Indonesia menggunakan WordPress + Elementor. Memang terjangkau, tetapi masalah utamanya: lambat, berat, dan rentan terhadap serangan siber.",
      "### Data berdasarkan lapangan:\n- Elementor + 15 plugin = rata-rata LCP 4,5 detik\n- 1 plugin yang tidak di-update = celah masuk malware\n- Hosting shared Rp 30rb/bulan = IP disalahgunakan tetangga, SEO mati\n- Ukuran build: 2–5MB vs Next.js 111kB",
      "### Mengapa Next.js 15 jauh lebih cepat?\nNext.js menghasilkan HTML statis pada saat build, bukan PHP yang melakukan render setiap request. Hasilnya: <1 detik LCP, skor Lighthouse 98, format gambar AVIF otomatis, dan routing dengan prefetch.",
      "### Bagaimana dengan keamanan?\nWordPress = PHP + MySQL + 20 plugin = 20 potensi celah keamanan. Next.js = statis, tidak ada database di frontend. Kemungkinan diretas hampir tidak ada jika menggunakan static export.",
      "### Kapan WordPress masih relevan?\nJika Anda perlu mengedit tulisan setiap hari secara mandiri, non-teknis, dan budget sangat terbatas. Namun jika prioritas Anda adalah kecepatan + SEO + anti-hack → Next.js adalah pilihan tepat.",
      "#### Di CilokTech — One-Man Studio:\nSemua project menggunakan Next.js 15. Bukan karena tren, melainkan karena klien saya membutuhkan website yang terbuka <1 detik bahkan di HP dengan spesifikasi rendah. Cek kerugian WP Anda di /kalkulator.",
    ],
  },
  "biaya-bikin-website-2026-breakdown-jujur": {
    keywords: "biaya bikin website 2026, harga jasa pembuatan website, perbandingan harga website, harga website umkm",
    body: [
      "Jika Anda mencari 'jasa pembuatan website' — akan muncul harga Rp 500rb hingga Rp 15jt. Mengapa bisa berbeda sejauh itu? Saya pecah secara transparan agar Anda tidak terjebak harga murah.",
      "### Rp 800rb - 1,8jt: Freelance Pemula / Template\nTemplate dibeli Rp 150rb + ganti logo. WordPress + Elementor. Tanpa SEO, kecepatan 3–6 detik, source code terkunci. Tidak muncul di Google.",
      "### Rp 1,5jt: CilokTech One-Man Studio — Value Asli Setara Rp 5-7jt\nDesain Figma custom → coding, Next.js 15 dengan 111kB, SEO lengkap OG+Schema+Sitemap+Robots, toggle dark/light profesional anti-FOUC, <1 detik LCP, source code repository private 100% milik Anda, respon <2 jam, live dalam 3–7 hari. Mengapa Rp 1,5jt? One-man studio yang dikerjakan senior — memangkas biaya meeting dan kantor. Lihat breakdown lengkap di /harga — atau hitung kerugian jika tidak segera diperbaiki di /kalkulator.",
      "### Rp 8jt - 15jt: Agency Jakarta\nTeknologi yang sama, tetapi 60% budget habis untuk meeting. Go-live 2–4 minggu. Cocok jika Anda membutuhkan brand guideline + invoice perusahaan.",
      "#### Prinsip transparansi saya:\nHarga ditampilkan di depan, breakdown di /harga, source code 100% milik Anda. Tidak ada biaya tersembunyi. Domain + hosting tahun pertama sudah termasuk.",
    ],
  },
  "checklist-website-ngasilin-customer": {
    keywords: "checklist website conversion, website menghasilkan customer, cara bikin website yang menghasilkan uang",
    body: [
      "Website yang hanya bagus tidak otomatis menghasilkan cuan. Saya telah mengaudit 50+ website UMKM — yang memiliki tingkat konversi tinggi selalu memiliki 12 elemen berikut.",
      "### 1-3: Kecepatan & Kepercayaan\n1. <1 detik LCP — jika 3 detik, 40% pengunjung langsung pergi\n2. HTTPS + SSL valid dan aktif\n3. Favicon profesional dengan identitas one-man studio",
      "### 4-7: SEO & Struktur\n4. Title + meta description unik untuk setiap halaman\n5. OG image dinamis 1200x630 agar share WhatsApp terlihat menarik — sekarang otomatis di ciloktech.web.id/api/og\n6. Sitemap.xml + robots.txt yang valid\n7. JSON-LD Organization + FAQ + Breadcrumb untuk rich snippet",
      "### 8-12: Konversi\n8. Headline yang jelas dalam 3 detik: siapa Anda, untuk siapa, dan hasil apa yang didapat\n9. Social proof di atas lipatan: 'Dipercaya 50+ bisnis'\n10. Sticky CTA + floating chat one-man studio\n11. Pricing transparan + rincian di /harga\n12. FAQ yang menjawab keberatan + kalkulator di /kalkulator",
      "#### Checklist CilokTech One-Man Studio:\nSemua elemen di atas tersedia di ciloktech.web.id — 111kB, 98 Lighthouse, dark mode, blog + harga transparan + kalkulator kerugian. Ingin hasil yang sama? Ambil paket Company Profile Rp 1,5jt di /harga.",
    ],
  },
  "jasa-pembuatan-website-profesional-umkm": {
    keywords: "jasa pembuatan website profesional, jasa website profesional, jasa bikin website terpercaya, jasa pembuatan website umkm terbaik, one-man studio",
    body: [
      "Jika Anda mencari 'jasa pembuatan website profesional' — akan muncul 100+ hasil. 90% di antaranya adalah reseller template WordPress dengan server shared, support lambat, dan hasil akhir yang lambat. CilokTech berbeda — one-man studio yang membangun dari nol secara custom.",
      "### Mengapa harus yang profesional?\n1. Kecepatan <1 detik = konversi meningkat. Template dengan 4,5 detik membuat 40% pengunjung pergi. Hitung kerugian Anda di /kalkulator.\n2. SEO-ready — OG dinamis, Schema Markup, sitemap, robots.txt, canonical. Template tidak memiliki ini.\n3. Source code 100% milik Anda dalam repository private GitHub.\n4. Support <2 jam via Telegram @ciloktech — langsung dengan builder, one-man operations.",
      "### Spesifikasi (sama seperti ciloktech.web.id)\n- Next.js 15 + Tailwind v4 — 111kB First Load, 98 Lighthouse\n- SEO lengkap: OG dinamis 1200x630 via /api/og, sitemap.xml, robots.txt, JSON-LD FAQ + Breadcrumb, canonical\n- Toggle dark/light profesional + anti-FOUC\n- <1 detik LCP + kalkulator kerugian di /kalkulator",
      "### Paket Harga\n- Landing Page: Rp 900rb — 1 produk, live dalam 2–3 hari\n- Company Profile Pro: Rp 1,5jt — TERLARIS — value setara Rp 5-7jt di agency\n- Web App Custom: mulai dari Rp 2,5jt",
      "#### Cara pemesanan — One-Man Studio\nChat Telegram @ciloktech dengan pesan 'Mau website profesional' → brief 15 menit → DP 50% → link staging setiap hari → live dalam 3–7 hari. Konsultasi gratis tanpa komitmen.",
    ],
  },
  "jasa-website-toko-online-umkm-2026": {
    keywords: "jasa website toko online umkm, jasa bikin toko online, toko online qris, website toko online murah profesional",
    body: [
      "Masih berjualan melalui DM Instagram? Lelah membalas 'Berapa harganya kak?' padahal pelanggan ingin langsung checkout? Saatnya upgrade ke toko online profesional.",
      "### Masalah berjualan via DM\n- 60% calon pelanggan enggan bertanya harga — langsung beralih ke kompetitor yang menampilkan harga + tombol beli jelas\n- Stok manual — risiko overselling\n- Rekapitulasi manual via Excel — menghabiskan 2 jam setiap malam",
      "### Solusi: Toko Online UMKM (mulai Rp 2,5jt One-Man Studio)\n- Katalog produk + varian + stok real-time\n- Keranjang belanja + checkout otomatis\n- Pembayaran QRIS / Transfer / COD\n- Ongkir otomatis + pembuatan resi otomatis\n- Dashboard admin untuk order + manajemen stok",
      "### Marketplace vs Toko Mandiri\nMarketplace: potongan 5-10%, perang harga tidak sehat, data pelanggan milik marketplace.\nToko Mandiri: tanpa potongan, data 100% milik Anda, branding lebih kuat. Hitung kerugian marketplace di /kalkulator.",
      "### Teknologi yang digunakan\nNext.js 15 + Prisma + PostgreSQL + Midtrans QRIS. <1 detik LCP, PWA ready, 111kB hemat kuota. OG dinamis untuk share WhatsApp yang menarik.",
      "#### Mulai dari mana?\n<20 SKU → Company Profile Rp 1,5jt + Katalog + Checkout via WhatsApp. >50 SKU + pembayaran otomatis → Web App Custom mulai Rp 2,5jt+.",
    ],
  },
  "jasa-website-company-profile-cv-pt-startup": {
    keywords: "jasa website company profile, jasa website cv pt, jasa website startup, website company profile profesional, one-man studio",
    body: [
      "CV/PT atau startup Anda sudah memiliki Instagram yang bagus, tetapi website belum ada atau asal jadi? Di dunia B2B, website adalah first impression. Tampilan yang kurang profesional akan dianggap tidak meyakinkan.",
      "### Mengapa CV/PT membutuhkan company profile profesional?\n1. Klien B2B selalu mengecek website sebelum melakukan PO — lambat atau error 404 = kepercayaan nol\n2. Investor mengecek SEO + kecepatan + legalitas di footer\n3. Syarat tender atau vendor list: 'wajib memiliki website company profile'",
      "### Standar company profile 2026 (tersedia di ciloktech.web.id)\n- Homepage high-conversion: Hero + Statistik + Layanan + Portofolio + Harga + Testimoni + FAQ + Kontak\n- Halaman /harga dengan breakdown + /blog untuk SEO + /kalkulator untuk edukasi\n- Legalitas: NIB, alamat kantor, email @perusahaan, dan Google Maps\n- Teknologi: Next.js 15 111kB, 98 Lighthouse, OG dinamis, Schema FAQ+Organization, sitemap.xml, robots.txt, FAQ rich snippet\n- <1 detik LCP — dikerjakan one-man studio langsung oleh builder",
      "### Paket Harga\nCompany Profile Pro Rp 1,5jt — TERLARIS — seperti ciloktech.web.id: 5 halaman + blog + CMS + kalkulator. Value setara Rp 5-7jt di agency — saya jual Rp 1,5jt karena one-man studio. Rincian di /harga dan hitung ROI di /kalkulator.",
      "### Proses pengerjaan PT/CV tanpa drama — One-man ops\n01 Brief 15 menit via Telegram\n02 DP 50%, desain disetujui via staging\n03 Development 3–7 hari dengan staging live\n04 Go-live deployment .co.id/.web.id + training\n05 Maintenance gratis 3 bulan",
      "#### Ingin company profile yang membuat klien berkata 'perusahaan ini serius'?\nChat @ciloktech dengan format 'Company Profile [Nama PT/CV] - [Bidang]'. Respon <2 jam disertai roadmap. One-man studio — langsung dengan builder.",
    ],
  },
  "jasa-website-murah-jangan-asal-murah": {
    keywords: "jasa website murah, website murah 500rb jebakan, harga website murah vs profesional, kalkulator rugi website",
    body: [
      "Melihat iklan 'Jasa Website Murah Rp 500rb'? 90% klien yang datang kepada saya adalah korban website murah yang akhirnya harus membayar dua kali lipat.",
      "### Bongkar paket Rp 500rb isinya apa?\n- Domain gratisan + hosting 100MB — lambat dan sering suspend\n- Template WordPress bajakan — sudah termasuk backdoor siap diretas\n- Tanpa SSL — Chrome menampilkan 'Not Secure'\n- Tanpa sitemap/robots/OG — Google tidak mengindeks\n- Source code terkunci — jika ingin pindah hosting diminta biaya tambahan",
      "### Biaya sebenarnya — silakan hitung di /kalkulator\nBulan ke-2 hosting meminta upgrade Rp 300rb/bulan, bulan ke-3 terkena malware Rp 500rb, SEO nol dengan kerugian peluang Rp 2–5jt/bulan, akhirnya harus membuat ulang Rp 1,5jt. Total kerugian Rp 3,5jt + waktu 2 bulan terbuang. Cek kerugian Anda di /kalkulator agar lebih yakin.",
      "### Mengapa CilokTech One-Man Studio Rp 1,5jt justru lebih hemat?\nDesain UI Rp 1,2jt + Frontend Next.js Rp 1,5jt + SEO OG dinamis + Copywriting + Hosting + Deployment = value Rp 5jt+, saya jual Rp 1,5jt all-in. Sekali bayar, milik selamanya, source code 100% milik Anda, hosting via Vercel + domain 1 tahun sudah termasuk, dan gratis maintenance 3 bulan.",
      "### Checklist agar tidak terjebak website murah\n1. Teknologi apa yang digunakan? Jika hanya WP+Elementor tanpa SEO → hindari\n2. Apakah ada sitemap + robots.txt? Jika tidak ada → SEO nol\n3. Source code milik siapa? Jika sistem sewa → jangan diambil\n4. Kecepatan berapa? Jika Lighthouse <80 → lambat — cek di /kalkulator\n5. Apakah OG untuk share WhatsApp terlihat profesional? Cek di /api/og",
      "#### Prinsip saya:\nBudget terbatas di bawah Rp 1jt → ambil Landing Page Rp 900rb (bukan company profile Rp 500rb). Lebih worth it untuk 1 produk yang fokus, live dalam 2–3 hari.",
    ],
  },
  "jasa-landing-page-high-conversion-umkm": {
    keywords: "jasa landing page high conversion, jasa landing page umkm, landing page cepat closing, jasa landing page profesional",
    body: [
      "Landing page yang penuh animasi tetapi tidak ada yang mengklik WhatsApp dianggap gagal. Landing page yang sederhana tetapi memiliki sticky CTA + bukti sosial = closing setiap hari.",
      "### Formula landing page high conversion (digunakan di ciloktech.web.id)\n1. Hero: headline yang menampilkan hasil, bukan fitur\n2. Stats bar: '<1s load • 98 Lighthouse • 50+ klien'\n3. Problem → Solution → Proof (masalah, solusi, bukti)\n4. Pricing yang transparan: mulai Rp 900rb, bukan 'Hubungi kami'\n5. Testimoni yang terverifikasi + Google Maps embed\n6. FAQ yang menjawab keberatan + schema rich snippet\n7. Sticky CTA + Floating WhatsApp one-man studio",
      "### Mengapa Rp 900rb bisa menghasilkan closing?\nBukan sekadar template — ini adalah sistem: Next.js 15 111kB, <1 detik LCP, copywriting to-the-point, SEO + OG dinamis via /api/og, dan kalkulator di /kalkulator. Go-live dalam 2–3 hari.",
      "### Contoh yang sudah live\n- Laundry Express — keyword 'laundry kiloan' halaman 1 Google, order WhatsApp +40%\n- Bengkel Mobil — menampilkan before/after + rating, pemesanan +25%\n- Batik Tulis — katalog + checkout via WhatsApp, closing +31%",
      "### Landing Page Rp 900rb vs Company Profile Rp 1,5jt\nLanding Page = 1 tujuan (chat WhatsApp). Cocok untuk 1 produk yang butuh leads minggu ini.\nCompany Profile = kepercayaan + SEO + portofolio lengkap. Lihat perbandingan di /harga dan hitung ROI di /kalkulator.",
      "#### Ingin landing page yang benar-benar closing?\nChat @ciloktech dengan pesan 'Landing Page [jenis bisnis Anda]'. Saya berikan struktur headline + CTA yang telah terbukti — konsultasi gratis 15 menit, one-man studio.",
    ],
  },
  "wordpress-vs-nextjs-untuk-umkm-2026": {
    keywords: "wordpress vs nextjs umkm, perbandingan wordpress nextjs, wordpress lemot vs nextjs cepat, ganti wordpress ke nextjs, kalkulator rugi wordpress",
    body: [
      "Tahun 2026 masih memperdebatkan WordPress vs Next.js? Berikut data lapangan berdasarkan 50+ project UMKM yang saya tangani.",
      "### Benchmark kecepatan (HP entry-level dengan koneksi 4G)\nWordPress Elementor + 15 plugin: LCP 4,2 detik, TTI 6,8 detik, ukuran 3,2MB, skor Lighthouse 62\nNext.js CilokTech One-Man Studio: LCP 0,8 detik, TTI 1,1 detik, ukuran 111kB, skor Lighthouse 98\nWordPress: 40% pengunjung pergi sebelum halaman dimuat. Next.js: konversi +22%. Hitung kerugian WP Anda di /kalkulator.",
      "### Keamanan\nWordPress: PHP+MySQL+plugin = 22 CVE per tahun. 1 plugin bajakan = pintu masuk backdoor.\nNext.js statis: tidak ada database di frontend, tidak ada PHP. Hampir tidak mungkin diretas.",
      "### SEO\nWordPress: memerlukan Yoast + Rank Math + Cache + Smush = 4 plugin untuk mengejar SEO yang di Next.js sudah termasuk secara default + OG dinamis via /api/og + FAQ schema.\nNext.js: OG+Schema FAQ+Breadcrumb+Sitemap+Robots+Canonical+AVIF otomatis tersedia.",
      "### Biaya dalam 1 tahun — silakan cek di /kalkulator\nWP murah Rp 500rb: Rp 500rb + Rp 600rb hosting + Rp 500rb perbaikan malware + Rp 1,5jt pembuatan ulang = rugi Rp 4,1jt\nNext.js Rp 1,5jt: all-in sudah termasuk Vercel+domain. Tahun kedua hanya hosting $0–20/bulan. ROI kembali dalam 1 bulan — hitung di /kalkulator.",
      "### Kapan WordPress masih relevan?\nJika Anda butuh edit konten setiap hari secara mandiri, tidak terlalu peduli dengan kecepatan 3 detik. Namun jika target Anda adalah closing + SEO halaman 1 → Next.js One-Man Studio adalah pilihan tepat.",
      "#### Migrasi dari WordPress ke Next.js?\nSaya melakukan migrasi konten WordPress ke Next.js tanpa kehilangan SEO (301 redirect, URL tetap sama). Gratis audit kecepatan — kirim screenshot Lighthouse ke @ciloktech, saya berikan laporan <2 jam disertai hitungan kerugian di /kalkulator.",
    ],
  },
  "template-vs-custom-website": {
    keywords: "template website vs custom, website siap pakai murah, jasa website template 390rb, beda template dan custom website, website custom vs template",
    body: [
      "Lihat iklan 'Jasa Website Toko Online Rp 390rb'? Kedengarannya murah sekali. Tapi kalimat kuncinya: 'website siap pakai'. Ini bukan website yang dibuat khusus untuk bisnis Anda — ini template yang sama sudah dipakai ratusan bisnis lain.",
      "### Apa itu template website?\nTemplate = desain jadi yang dijual berulang-ulang. Penjual tinggal ganti logo, ganti foto, ganti teks — lalu bilang 'website Anda sudah jadi'. Yang sama: layout, warna dasar, struktur halaman, bahkan kadang font dan animasi. Bisnis A dan bisnis B (yang beda bidang!) bisa punya website yang mirip banget.",
      "### Perbedaan mendasar: Template vs Custom\n| Aspek | Template Rp 390rb | Custom CilokTech Rp 1,5jt |\n|---|---|---|\n| Desain | Pilih dari 20 template jadi | Figma custom sesuai brand Anda |\n| Source code | Milik penjual, Anda 'sewa' | 100% milik Anda, repo private |\n| Kecepatan | Tergantung template + hosting kecil | <1 detik LCP, Next.js 15 |\n| SEO | Template default, minim | OG + Schema + Sitemap + Robots lengkap |\n| Hosting | 150–250MB, bandwidth 15–25GB | Vercel Edge, uptime 99,9% |\n| Perpanjangan | Rp 311–381rb/tahun | Domain + hosting tahun pertama sudah termasuk |\n| Kebebasan ubah | Terbatas pada template | Bebas — code milik Anda |\n| Skala bisnis | Sulit — template gak bisa diubah banyak | Bisa berkembang jadi web app |",
      "### Kenapa template bisa murah?\nSederhana: penjual membuat sekali, menjual seratus kali. Biaya per klien hampir nol — yang dikerjakan cuma isi konten. Itu kenapa harga bisa 390rb. Tapi yang Anda dapat juga 'seratusan orang lain punya' — desain yang sama dengan kompetitor Anda.",
      "### Biaya tersembunyi template murah\n- Perpanjangan hosting + domain Rp 311–381rb/tahun (di luar harga awal)\n- Hosting 150MB — lambat, gampang down kalau traffic naik\n- 'Garansi anti-hacker' — tidak ada yang bisa menjamin 100%\n- Mau fitur baru? Bayar lagi — karena code bukan milik Anda\n- SEO minim — website tidak muncul di Google, pengunjung nol",
      "### Kenapa custom Rp 1,5jt justru lebih hemat\nCustom = desain + code + SEO + hosting + training, semua untuk bisnis ANDA. Sekali bayar, milik selamanya. Source code 100% di tangan Anda — mau pindah hosting, tambah fitur, atau ganti developer, bebas. Ditambah maintenance gratis 3 bulan dan respon <2 jam langsung ke builder. Hitung perbandingan biaya 3 tahun di /kalkulator.",
      "### Kapan template masih oke?\nJika Anda hanya butuh kartu nama online, tidak peduli desain sama dengan orang lain, dan tidak butuh tampil di Google. Tapi kalau website adalah bagian dari mesin penjualan — pilih yang benar-benar milik Anda.",
      "#### Kesimpulan:\nHarga murah itu bukan jaminan hemat. Template 390rb terlihat murah di awal, tapi bayar perpanjangan, desain sama dengan kompetitor, dan SEO nol — itu biaya yang tidak terlihat. Custom Rp 1,5jt: sekali bayar, milik selamanya, tampil beda, dan muncul di Google. Cek perbandingan lengkap di /harga dan hitung ROI Anda di /kalkulator.",
    ],
  },
};

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const kw = contents[slug]?.keywords.split(", ") || post.tags;
  const ogUrl = `https://ciloktech.web.id/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.tags.join(" • "))}&tag=ciloktech.web.id%2Fblog%2F${slug}&type=blog`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://ciloktech.web.id/blog/${slug}` },
    keywords: kw,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://ciloktech.web.id/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: [{ url: ogUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl],
    },
  };
}
export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();
  const content = contents[slug];
  if (!content) return notFound();

  const ogUrl = `https://ciloktech.web.id/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.tags.join(" • "))}&tag=ciloktech.web.id%2Fblog%2F${slug}&type=blog`;

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 min-h-screen">
        <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
          <BlogDetailClientLabels slug={slug} title={post.title} />

          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((t) => (
              <span key={t} className="text-[11px] font-bold bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 px-2.5 py-1 rounded-full text-gray-700 dark:text-gray-300">
                {t}
              </span>
            ))}
            <span className="text-[11px] text-gray-400">• {post.readingTime} • {new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>

          <h1 className="text-[32px] md:text-[42px] font-extrabold tracking-[-0.03em] leading-[0.95] text-gray-900 dark:text-white">{post.title}</h1>
          <p className="text-[17px] leading-relaxed text-gray-600 dark:text-gray-400 mt-5">{post.description}</p>

          {/* OG preview mini */}
          <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111]">
            <img src={ogUrl} alt={`OG ${post.title}`} className="w-full h-auto" loading="lazy" />
          </div>

          <div className="mt-10 prose prose-sm dark:prose-invert max-w-none prose-headings:tracking-tight prose-headings:font-extrabold prose-p:leading-[1.8] prose-p:text-[15px] prose-h3:text-[20px] prose-h3:mt-10 prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-strong:text-gray-900 dark:prose-strong:text-white">
            {content.body.map((para, i) => {
              if (para.startsWith("### ")) {
                return <h3 key={i} className="text-[22px] font-extrabold mt-10 mb-4 text-gray-900 dark:text-white">{para.replace("### ", "")}</h3>;
              }
              if (para.startsWith("#### ")) {
                return (
                  <div key={i} className="mt-10 p-5 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-2xl">
                    <p className="font-bold text-[14px] text-amber-900 dark:text-amber-200 leading-relaxed whitespace-pre-wrap">{para.replace("#### ", "")}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Link href="/kalkulator" className="text-[12px] font-bold bg-gray-900 dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-full hover:bg-black dark:hover:bg-cyan-300 transition">🧮 Hitung kerugian di kalkulator</Link>
                      <Link href="/harga" className="text-[12px] font-bold border border-amber-300 dark:border-amber-800 px-3 py-1.5 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 transition">Lihat rincian harga</Link>
                    </div>
                  </div>
                );
              }
              return (
                <p key={i} className="text-[15px] leading-[1.85] text-gray-700 dark:text-gray-300 whitespace-pre-wrap mt-6">
                  {para.includes("/kalkulator") ? (
                    <>
                      {para.split("/kalkulator")[0]}
                      <Link href="/kalkulator" className="font-bold text-cyan-600 dark:text-cyan-400 underline underline-offset-4">/kalkulator</Link>
                      {para.split("/kalkulator").slice(1).join("/kalkulator")}
                    </>
                  ) : para.includes("/harga") ? (
                    <>
                      {para.split("/harga")[0]}
                      <Link href="/harga" className="font-bold text-cyan-600 dark:text-cyan-400 underline underline-offset-4">/harga</Link>
                      {para.split("/harga").slice(1).join("/harga")}
                    </>
                  ) : (
                    para
                  )}
                </p>
              );
            })}
          </div>

          <BlogDetailCTA title={post.title} />

          <div className="mt-12 pt-10 border-t border-gray-100 dark:border-white/10">
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">Baca Juga</div>
            <div className="grid md:grid-cols-2 gap-3">
              {posts
                .filter((p) => p.slug !== slug)
                .slice(0, 2)
                .map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:border-gray-900 dark:hover:border-white transition group">
                    <div className="font-bold text-[14px] text-gray-900 dark:text-white group-hover:text-cyan-600 transition line-clamp-2">{p.title}</div>
                    <div className="text-[12px] text-gray-500 mt-1">{p.readingTime} • {p.tags[0]}</div>
                  </Link>
                ))}
            </div>
          </div>
        </article>

        {/* JSON-LD Breadcrumb + Article + FAQ hint */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://ciloktech.web.id/" },
                { "@type": "ListItem", position: 2, name: "Blog", item: "https://ciloktech.web.id/blog" },
                { "@type": "ListItem", position: 3, name: post.title, item: `https://ciloktech.web.id/blog/${slug}` },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              author: { "@type": "Organization", name: "Cilok Tech — One-Man Studio", url: "https://ciloktech.web.id" },
              publisher: {
                "@type": "Organization",
                name: "Cilok Tech — One-Man Studio",
                logo: { "@type": "ImageObject", url: "https://ciloktech.web.id/logo-oneman-512.png" },
              },
              datePublished: post.date,
              dateModified: post.date,
              mainEntityOfPage: `https://ciloktech.web.id/blog/${slug}`,
              image: ogUrl,
              keywords: contents[slug]?.keywords,
            }),
          }}
        />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
