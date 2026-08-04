import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { posts, getPost } from "../data";

type Props = { params: Promise<{ slug: string }> };

const contents: Record<string, { body: string[]; keywords: string }> = {
  "alasan-website-umkm-sepi-pengunjung": {
    keywords: "website umkm sepi, cara naikin traffic umkm, seo umkm, website umkm tidak muncul di google",
    body: [
      "Lo udah punya IG 5k followers, tapi website sepi kayak kuburan? Ini normal — IG dan Google itu beda game.",
      "### 1. Website lo gak SEO ready — cuma jadi brosur online\nGak ada OG tag, sitemap, schema LocalBusiness. Google gak ngerti bisnis lo apa. Hasilnya gak ke-index. Fix: Next.js 15 auto generate sitemap + OG + JSON-LD. Di CilokTech ini default.",
      "### 2. Load >3 detik — pengunjung kabur sebelum liat produk\nRata-rata WordPress Elementor 4.5s LCP. Orang Indonesia sabarnya 2 detik. Fix: gue build 111kB First Load, <1s LCP. Speed = conversion.",
      "### 3. Gak ada CTA jelas — pengunjung bingung mau ngapain\nWebsite cuma pajang foto dan tulisan 'Selamat datang'. Gak ada tombol WA, Telegram, Maps. Fix: sticky CTA + floating Chat di semua halaman.",
      "### 4. Gak mobile-first — 80% traffic UMKM dari HP\nDesain desktop doang, di HP berantakan. Tombol susah klik. Fix: gue desain mobile dulu baru desktop.",
      "### 5. Hosting free/hosting abal-abal — down pas butuh\nFree hosting = SEO zero. Sering down, SSL mati, kena hack. Fix: Vercel Edge + SSL auto, uptime 99.9% — gratis tahun pertama di CilokTech.",
      "#### Kesimpulan:\nWebsite UMKM yang ngasilin customer harus: SEO ready, <1s, mobile-first, CTA jelas, hosting pro. Bukan cuma bagus. Kalo website lo sepi, cek 5 ini dulu. Hitung rugi lo di /kalkulator.",
    ],
  },
  "landing-page-vs-company-profile": {
    keywords: "landing page vs company profile, beda landing page dan company profile, jenis website umkm",
    body: [
      "Banyak UMKM salah pilih: mau jualan 1 produk tapi minta company profile 5 halaman. Ujungnya boncos.",
      "### Landing Page (Rp 900rb) — buat jualan 1 produk\nFokus 1 goal: konversi. Struktur: Hero + Problem + Solution + Testi + Pricing + FAQ + CTA. Tanpa navigasi muter. Contoh: jasa las, laundry kiloan, bengkel. Go-live 2-3 hari.",
      "### Company Profile (Rp 2.5jt) — buat bangun kepercayaan\nFokus: trust. Struktur: Home + Layanan + Portofolio + Harga + Testi + Kontak + Blog. Kayak ciloktech.web.id sekarang. Ideal buat: PT, CV, konsultan, agency, sekolah.",
      "### Kapan pilih mana?\n- 1 produk, mau leads cepat → Landing Page\n- Banyak layanan, butuh portofolio + blog SEO → Company Profile\n- Aplikasi kasir/inventory/dashboard → Web App Custom mulai 5jt+",
      "#### Rule gue:\nKalo budget <1.5jt dan butuh closing minggu ini → Landing. Kalo mau long game SEO + brand → Company Profile 2.5jt (value Rp 7jt). Lihat breakdown di /harga atau hitung ROI di /kalkulator.",
    ],
  },
  "kenapa-wordpress-lemot-solusi-nextjs": {
    keywords: "wordpress lemot, nextjs vs wordpress, website wordpress kena hack, solusi wordpress lambat",
    body: [
      "Jujur aja, 90% website UMKM di Indonesia pake WordPress Elementor. Murah? Iya. Masalahnya: lemot, berat, dan jadi langganan tukang hack.",
      "### Data beneran:\n- Elementor + 15 plugin = 4.5s LCP average\n- 1 plugin gak update = pintu masuk malware\n- Hosting shared Rp 30rb/bln = tetangga abuse IP, SEO mati\n- Build size: 2-5MB vs Next.js 111kB",
      "### Kenapa Next.js 15 jauh lebih ngebut?\nNext.js generate HTML static pas build, bukan PHP render tiap request. Hasilnya: <1s LCP, 98 Lighthouse, image AVIF auto, routing prefetch.",
      "### Aman?\nWordPress = PHP + MySQL + 20 plugin = 20 celah. Next.js = static, gak ada DB di frontend. Kena hack hampir mustahil kalo static export.",
      "### Kapan WordPress masih oke?\nKalo lo butuh edit tulisan tiap hari sendiri non-teknis dan budget mepet. Tapi kalo mau speed + SEO + anti-hack → Next.js.",
      "#### Di CilokTech — One-Man Studio:\nSemua project Next.js 15. Bukan karena trend, tapi karena client gue butuh website yang buka <1s di HP kentang. Cek rugi WP lo di /kalkulator.",
    ],
  },
  "biaya-bikin-website-2026-breakdown-jujur": {
    keywords: "biaya bikin website 2026, harga jasa pembuatan website, perbandingan harga website, harga website umkm",
    body: [
      "Lo search 'jasa pembuatan website' — keluar harga Rp 500rb sampai Rp 15jt. Kok bisa beda sejauh itu? Gue pecah biar lo gak ketipu murah.",
      "### Rp 800rb - 1.8jt: Freelance Pemula / Template\nTemplate beli Rp 150rb + ganti logo. WordPress + Elementor. SEO gak ada, speed 3-6 detik, source dikunci. Gak muncul di Google.",
      "### Rp 2.5jt: CilokTech One-Man Studio — Value Asli Rp 7jt\nDesign Figma custom → code, Next.js 15 111kB, SEO OG+Schema+Sitemap+Robots lengkap, dark/light toggle pro anti-FOUC, <1s LCP, source code repo private milik lo 100%, balas <2 jam, live 3-7 hari. Kenapa 2.5jt? One-man studio senior — potong meeting & kantor. Lihat breakdown lengkap di /harga — atau hitung rugi kalo gak fix di /kalkulator.",
      "### Rp 8jt - 15jt: Agency\nSama teknologinya, tapi bayar meeting 60% budget. Go-live 2-4 minggu. Cocok kalo butuh brand guideline + invoice PT.",
      "#### Transparan gue:\nHarga di depan, breakdown di /harga, source code milik lo. Gak ada hidden fee. Domain + hosting tahun pertama include.",
    ],
  },
  "checklist-website-ngasilin-customer": {
    keywords: "checklist website conversion, website ngasilin customer, cara bikin website yang menghasilkan uang",
    body: [
      "Website bagus doang gak bikin cuan. Gue audit 50+ website UMKM — yang konversi tinggi selalu punya 12 elemen ini.",
      "### 1-3: Speed & Trust\n1. <1s LCP — kalo 3 detik 40% pengunjung kabur\n2. HTTPS + SSL valid\n3. Favicon CT + emerald dot one-man studio",
      "### 4-7: SEO & Structure\n4. Title + meta description unik tiap halaman\n5. OG image dynamic 1200x630 biar share WA cakep — sekarang auto di ciloktech.web.id/api/og\n6. Sitemap.xml + robots.txt\n7. JSON-LD Organization + FAQ + Breadcrumb",
      "### 8-12: Conversion\n8. Headline jelas 3 detik: siapa lo, buat siapa, hasil apa\n9. Social proof di atas fold: 'Dipercaya 50+ bisnis'\n10. Sticky CTA + floating chat one-man\n11. Pricing transparan + breakdown /harga\n12. FAQ yang jawab objection + kalkulator /kalkulator",
      "#### Checklist CilokTech One-Man Studio:\nSemua ada di ciloktech.web.id — 111kB, 98 Lighthouse, dark mode, blog + harga anti-nawar + kalkulator rugi. Mau sama? Ambil Company Profile 2.5jt di /harga.",
    ],
  },
  "jasa-pembuatan-website-profesional-umkm": {
    keywords: "jasa pembuatan website profesional, jasa website profesional, jasa bikin website terpercaya, jasa pembuatan website umkm terbaik, one-man studio",
    body: [
      "Lo search 'jasa pembuatan website profesional' — keluar 100+ hasil. 90% reseller template WordPress, server shared, support slow, hasilnya lemot. CilokTech beda — one-man studio, custom dari nol.",
      "### Kenapa harus yang profesional?\n1. Speed <1s = conversion. Template 4.5s bikin 40% visitor kabur. Hitung rugi lo di /kalkulator.\n2. SEO ready — OG dynamic, Schema, sitemap, robots, canonical. Template gak ada.\n3. Source code milik lo 100% repo private GitHub.\n4. Support <2 jam via Telegram @ciloktech — langsung builder, one-man ops.",
      "### Spek (sama kayak ciloktech.web.id)\n- Next.js 15 + Tailwind v4 — 111kB First Load, 98 Lighthouse\n- SEO lengkap: OG dynamic 1200x630 /api/og, sitemap.xml, robots.txt, JSON-LD FAQ + Breadcrumb, canonical\n- Dark/light toggle pro + anti-FOUC\n- <1s LCP + kalkulator rugi /kalkulator",
      "### Harga\n- Landing Page: Rp 900rb — 1 produk, 2-3 hari live\n- Company Profile Pro: Rp 2.5jt TERLARIS — value Rp 7jt agency\n- Web App Custom: mulai Rp 5jt",
      "#### Cara order — One-man studio\nChat Telegram @ciloktech 'Mau website profesional' → brief 15 menit → DP 50% → staging link tiap hari → live 3-7 hari. Konsultasi gratis.",
    ],
  },
  "jasa-website-toko-online-umkm-2026": {
    keywords: "jasa website toko online umkm, jasa bikin toko online, toko online qris, website toko online murah profesional",
    body: [
      "Masih jualan via DM IG? Capek balas 'Harga kak?', padahal customer maunya langsung checkout? Waktunya upgrade ke toko online.",
      "### Masalah jualan via DM\n- 60% calon customer males nanya harga — skip ke kompetitor yang ada harga + tombol beli\n- Stok manual — oversell\n- Rekap manual Excel — 2 jam tiap malam",
      "### Solusi: Toko Online UMKM (mulai Rp 2.5jt One-man studio)\n- Katalog + varian + stok real-time\n- Keranjang + checkout otomatis\n- Payment QRIS / Transfer / COD\n- Ongkir otomatis + resi auto\n- Dashboard admin order + stok",
      "### Marketplace vs Toko Sendiri\nMarketplace: potongan 5-10%, perang harga, data milik marketplace.\nToko Sendiri: tanpa potongan, data milik lo, branding kuat. Hitung rugi marketplace di /kalkulator.",
      "### Tech\nNext.js 15 + Prisma + PostgreSQL + Midtrans QRIS. <1s LCP, PWA, 111kB hemat kuota. OG dynamic share WA cakep.",
      "#### Mulai dari mana?\n<20 SKU → Company Profile 2.5jt + Katalog + WA Checkout. >50 SKU + payment auto → Web App Custom 5jt+.",
    ],
  },
  "jasa-website-company-profile-cv-pt-startup": {
    keywords: "jasa website company profile, jasa website cv pt, jasa website startup, website company profile profesional, one-man studio",
    body: [
      "CV/PT atau startup punya IG bagus, tapi website gak ada atau ala kadarnya? Di B2B, website = first impression. Jelek = dianggap abal.",
      "### Kenapa CV/PT butuh company profile pro?\n1. Client B2B cek website sebelum PO — lemot / 404 = trust 0\n2. Investor cek SEO + speed + legalitas footer\n3. Tender/vendor list syarat 'wajib website company profile'",
      "### Standar company profile 2026 (ada di ciloktech.web.id)\n- Homepage high-conversion: Hero + Stats + Layanan + Portofolio + Harga + Testi + FAQ + Kontak\n- Halaman /harga breakdown + /blog keyword + /kalkulator rugi\n- Legalitas: NIB, alamat, email @perusahaan, Maps\n- Tech: Next.js 15 111kB, 98 Lighthouse, OG dynamic, Schema FAQ+Organization, sitemap, robots, FAQ rich snippet\n- <1s LCP — one-man studio langsung builder",
      "### Harga\nCompany Profile Pro Rp 2.5jt TERLARIS — kayak ciloktech.web.id: 5 hal + blog + CMS + kalkulator. Value Rp 7jt agency — jual 2.5jt karena one-man studio. Breakdown di /harga + hitung ROI di /kalkulator.",
      "### Proses PT/CV anti drama — One-man ops\n01 Brief 15 menit Telegram\n02 DP 50% desain approve staging\n03 Dev 3-7 hari live staging\n04 Go-live deploy .co.id/.web.id + training\n05 Maintenance 3 bulan",
      "#### Mau company profile yang bikin client bilang 'serius'?\nChat @ciloktech 'Company Profile [Nama PT/CV] - [Bidang]'. Balas <2 jam + roadmap. One-man studio — langsung ke builder.",
    ],
  },
  "jasa-website-murah-jangan-asal-murah": {
    keywords: "jasa website murah, website murah 500rb jebakan, harga website murah vs profesional, kalkulator rugi website",
    body: [
      "Lo liat iklan 'Jasa Website Murah Rp 500rb'? 90% client yang dateng ke gue itu korban website murah yang akhirnya bayar 2x.",
      "### Bongkar paket Rp 500rb isinya apa\n- Domain gratisan + hosting 100MB — lemot, suspend\n- Template WP bajakan — backdoor siap hack\n- Gak SSL — Chrome 'Not Secure'\n- Gak sitemap/robots/OG — Google gak index\n- Source dikunci — pindah hosting dimintain tebusan",
      "### Cost sebenarnya — hitung di /kalkulator\nBulan 2 hosting minta upgrade 300rb/bln, bulan 3 kena malware 500rb, SEO nol rugi peluang 2-5jt/bln, akhirnya bikin ulang 2.5jt. Total rugi 3.5jt + waktu 2 bulan. Cek rugi lo di /kalkulator biar sreg.",
      "### Kenapa CilokTech One-Man Studio Rp 2.5jt justru lebih murah?\nUI 1.2jt + Frontend Next.js 1.5jt + SEO OG dynamic + Copy + Hosting + Deploy = value 5jt+, jual 2.5jt all-in. Sekali bayar milik selamanya, source 100% milik lo, hosting Vercel + domain 1th include, 3 bulan maintenance.",
      "### Checklist biar gak ketipu murah\n1. Tech apa? WP+Elementor doang tanpa SEO → skip\n2. Sitemap + robots ada? Gak ada → SEO nol\n3. Source code milik siapa? Sewa → jangan\n4. Speed berapa? Lighthouse <80 → lemot — cek di /kalkulator\n5. OG share WA cakep gak? Cek /api/og",
      "#### Rules gue:\nBudget mepet <1jt → Landing Page Rp 900rb (bukan company profile 500rb). Lebih worth 1 produk focus, 2-3 hari live.",
    ],
  },
  "jasa-landing-page-high-conversion-umkm": {
    keywords: "jasa landing page high conversion, jasa landing page umkm, landing page cepat closing, jasa landing page profesional",
    body: [
      "Landing page rame animasi tapi gak ada yang klik WA = gagal. Landing polos tapi sticky CTA + bukti sosial = closing tiap hari.",
      "### Formula landing page high conversion (dipake di ciloktech.web.id)\n1. Hero: headline hasil, bukan fitur\n2. Stats bar: '<1s load • 98 Lighthouse • 50+ client'\n3. Problem → Solution → Proof\n4. Pricing transparan: Rp 900rb mulai, jangan 'Hubungi kami'\n5. Testimoni verified + Maps embed\n6. FAQ objection + schema rich snippet\n7. Sticky CTA + Floating WA one-man",
      "### Kenapa Rp 900rb bisa closing?\nBukan template — sistem: Next.js 15 111kB, <1s LCP, copywriting to-the-point, SEO + OG dynamic /api/og, Kalkulator /kalkulator. Go-live 2-3 hari.",
      "### Contoh yang udah live\n- Laundry Express — 'laundry kiloan' page 1, order WA +40%\n- Bengkel — before/after + rating, booking +25%\n- Batik Tulis — katalog + WA checkout, closing +31%",
      "### Landing 900rb vs Company Profile 2.5jt\nLanding = 1 goal (chat WA). Cocok 1 produk, butuh leads minggu ini.\nCompany profile = trust + SEO + portofolio. Lihat /harga + hitung ROI /kalkulator.",
      "#### Mau landing page yang closing?\nChat @ciloktech 'Landing Page [bisnis lo]'. Gue kasih struktur headline + CTA terbukti — konsultasi gratis 15 menit, one-man studio.",
    ],
  },
  "wordpress-vs-nextjs-untuk-umkm-2026": {
    keywords: "wordpress vs nextjs umkm, perbandingan wordpress nextjs, wordpress lemot vs nextjs cepat, ganti wordpress ke nextjs, kalkulator rugi wordpress",
    body: [
      "2026 masih debat WordPress vs Next.js? Gue kasih data lapangan 50+ project UMKM.",
      "### Speed benchmark (HP kentang 4G)\nWP Elementor + 15 plugin: LCP 4.2s, TTI 6.8s, 3.2MB, Lighthouse 62\nNext.js CilokTech One-Man Studio: LCP 0.8s, TTI 1.1s, 111kB, Lighthouse 98\nWP 40% kabur sebelum load, Next.js conversion +22%. Hitung rugi WP lo di /kalkulator.",
      "### Security\nWP: PHP+MySQL+plugin = 22 CVE/tahun. 1 plugin nulled = backdoor.\nNext.js static: gak ada DB frontend, gak ada PHP. Hack hampir mustahil.",
      "### SEO\nWP: perlu Yoast + Rank Math + Cache + Smush = 4 plugin buat kejar SEO yang Next.js include default + OG dynamic /api/og + FAQ schema.\nNext.js: OG+Schema FAQ+Breadcrumb+Sitemap+Robots+Canonical+AVIF auto.",
      "### Biaya 1 tahun — cek /kalkulator\nWP murah 500rb: 500rb+600rb hosting+500rb malware+2.5jt bikin ulang = 4.1jt rugi\nNext.js 2.5jt: all-in include Vercel+domain. Tahun 2 cuma hosting $0-20/bln. ROI balik 1 bulan — hitung di /kalkulator.",
      "### Kapan WP masih oke?\nIbu kos butuh edit tiap hari sendiri gak peduli speed 3 detik. UMKM target closing + SEO page 1 → Next.js One-Man Studio.",
      "#### Migrasi WP ke Next.js?\nGue migrate konten WP ke Next.js tanpa hilang SEO (301, keep URL). Gratis audit speed — screenshot Lighthouse kirim @ciloktech, gue kasih report <2 jam + hitung rugi di /kalkulator.",
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
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-[11px] text-gray-500 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-gray-900 dark:hover:text-white">Blog</Link>
            <span>›</span>
            <span className="text-gray-900 dark:text-white font-medium truncate max-w-[200px]">{post.title}</span>
          </nav>

          <Link href="/blog" className="inline-flex items-center gap-2 text-[12px] font-bold text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8">
            ← Kembali ke Blog
          </Link>

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
                      <Link href="/kalkulator" className="text-[12px] font-bold bg-gray-900 dark:bg-white text-white dark:text-black px-3 py-1.5 rounded-full hover:bg-black dark:hover:bg-cyan-300 transition">🧮 Hitung rugi di kalkulator</Link>
                      <Link href="/harga" className="text-[12px] font-bold border border-amber-300 dark:border-amber-800 px-3 py-1.5 rounded-full hover:bg-amber-100 dark:hover:bg-amber-900/30 transition">Lihat breakdown harga</Link>
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

          <div className="mt-16 rounded-[20px] bg-gray-900 dark:bg-white text-white dark:text-black p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <div className="font-extrabold text-[18px] leading-tight">Mau website kayak yang di artikel ini?</div>
              <div className="text-[13px] opacity-70 mt-1">One-man studio — konsultasi 15 menit gratis, langsung builder bukan sales.</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0">
              <a href={`https://t.me/ciloktech?text=Halo%20CilokTech%20One-Man%20Studio%2C%20abis%20baca%20${encodeURIComponent(post.title)}%20mau%20konsultasi`} className="px-5 py-3 bg-white dark:bg-black text-gray-900 dark:text-white rounded-full font-bold text-[13px] hover:bg-cyan-300 text-center transition">
                Chat dari artikel ini →
              </a>
              <Link href="/kalkulator" className="px-5 py-3 bg-transparent border border-white/20 dark:border-black/20 rounded-full font-bold text-[13px] hover:bg-white/10 text-center transition">
                🧮 Hitung rugi dulu
              </Link>
            </div>
          </div>

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
