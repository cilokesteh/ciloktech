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
      "### 3. Gak ada CTA jelas — pengunjung bingung mau ngapain\nWebsite cuma pajang foto dan tulisan 'Selamat datang'. Gak ada tombol WA, Telegram, Maps. Fix: sticky CTA + floating Chat kami di semua halaman.",
      "### 4. Gak mobile-first — 80% traffic UMKM dari HP\nDesain desktop doang, di HP berantakan. Tombol susah klik. Fix: gue desain mobile dulu baru desktop.",
      "### 5. Hosting free/hosting abal-abal — down pas butuh\nFree hosting = SEO zero. Sering down, SSL mati, kena hack. Fix: Vercel Edge + SSL auto, uptime 99.9% — gratis tahun pertama di CilokTech.",
      "#### Kesimpulan:\nWebsite UMKM yang ngasilin customer harus: SEO ready, <1s, mobile-first, CTA jelas, hosting pro. Bukan cuma bagus. Kalo website lo sepi, cek 5 ini dulu.",
    ],
  },
  "landing-page-vs-company-profile": {
    keywords: "landing page vs company profile, beda landing page dan company profile, jenis website umkm",
    body: [
      "Banyak UMKM salah pilih: mau jualan 1 produk tapi minta company profile 5 halaman. Ujungnya boncos.",
      "### Landing Page (Rp 900rb) — buat jualan 1 produk\nFokus 1 goal: konversi. Struktur: Hero + Problem + Solution + Testi + Pricing + FAQ + CTA. Tanpa navigasi muter. Contoh: jasa las, laundry kiloan, bengkel. Go-live 2-3 hari.",
      "### Company Profile (Rp 2.5jt) — buat bangun kepercayaan\nFokus: trust. Struktur: Home + Layanan + Portofolio + Harga + Testi + Kontak + Blog. Kayak ciloktech.web.id yang lo liat sekarang. Ideal buat: PT, CV, konsultan, agency, sekolah.",
      "### Kapan pilih mana?\n- 1 produk, mau leads cepat → Landing Page\n- Banyak layanan, butuh portofolio + blog SEO → Company Profile\n- Aplikasi kasir/inventory/dashboard → Web App Custom mulai 5jt+",
      "#### Rule gue:\nKalo budget <1.5jt dan butuh closing minggu ini → Landing. Kalo mau long game SEO + brand → Company Profile 2.5jt (value Rp 7jt). Lihat breakdown di /harga biar sreg.",
    ],
  },
  "kenapa-wordpress-lemot-solusi-nextjs": {
    keywords: "wordpress lemot, nextjs vs wordpress, website wordpress kena hack, solusi wordpress lambat",
    body: [
      "Jujur aja, 90% website UMKM di Indonesia pake WordPress Elementor. Murah? Iya. Masalahnya: lemot, berat, dan jadi langganan tukang hack.",
      "### Data beneran:\n- Elementor + 15 plugin = 4.5s LCP average\n- 1 plugin gak update = pintu masuk malware\n- Hosting shared Rp 30rb/bln = tetangga abuse IP, SEO mati\n- Build size: 2-5MB vs Next.js gue 111kB",
      "### Kenapa Next.js 15 jauh lebih ngebut?\nNext.js generate HTML static pas build, bukan PHP render tiap request. Hasilnya: <1s LCP, 98 Lighthouse, image AVIF auto, routing prefetch. Hosting di Vercel Edge — server di SG/JP.",
      "### Aman?\nWordPress = PHP + MySQL + 20 plugin = 20 celah. Next.js = static, gak ada DB di frontend, API pisah. Kena hack hampir mustahil kalo static export.",
      "### Kapan WordPress masih oke?\nKalo lo butuh edit tulisan tiap hari sendiri non-teknis dan budget mepet. Tapi kalo mau speed + SEO + anti-hack → Next.js.",
      "#### Di CilokTech:\nSemua project Next.js 15. Bukan karena trend, tapi karena client gue butuh website yang buka <1s di HP kentang.",
    ],
  },
  "biaya-bikin-website-2026-breakdown-jujur": {
    keywords: "biaya bikin website 2026, harga jasa pembuatan website, perbandingan harga website, harga website umkm",
    body: [
      "Lo search 'jasa pembuatan website' — keluar harga Rp 500rb sampai Rp 15jt. Kok bisa beda sejauh itu? Gue pecah biar lo gak ketipu murah.",
      "### Rp 800rb - 1.8jt: Freelance Pemula / Template\nTemplate beli Rp 150rb + ganti logo. WordPress + Elementor. SEO gak ada, speed 3-6 detik, source dikunci. Gak muncul di Google, revisi hilang.",
      "### Rp 2.5jt: CilokTech — Value Asli Rp 7jt\nDesign Figma custom → code, Next.js 15 111kB, SEO OG+Schema+Sitemap+Robots lengkap, dark/light toggle pro anti-FOUC, <1s LCP, source code repo private milik lo 100%, balas <2 jam, live 3-7 hari. Kenapa 2.5jt? One-man studio senior — potong meeting & kantor. Lihat breakdown lengkap di /harga.",
      "### Rp 8jt - 15jt: Agency\nSama teknologinya, tapi bayar meeting 60% budget. Go-live 2-4 minggu. Cocok kalo butuh brand guideline + invoice PT.",
      "### Mana yang worth?\nUMKM mau validasi pasar cepat tapi tetap SEO ready + scalable → 2.5jt sweet spot. 800rb ujungnya bayar 2x karena bikin ulang. 10jt overkill kalo belum butuh meeting.",
      "#### Transparan gue:\nHarga di depan, breakdown di /harga, source code milik lo. Gak ada hidden fee. Domain + hosting tahun pertama include.",
    ],
  },
  "checklist-website-ngasilin-customer": {
    keywords: "checklist website conversion, website ngasilin customer, cara bikin website yang menghasilkan uang",
    body: [
      "Website bagus doang gak bikin cuan. Gue audit 50+ website UMKM — yang konversi tinggi selalu punya 12 elemen ini.",
      "### 1-3: Speed & Trust\n1. <1s LCP — kalo 3 detik 40% pengunjung kabur\n2. HTTPS + SSL valid\n3. Favicon + logo rapi",
      "### 4-7: SEO & Structure\n4. Title + meta description unik tiap halaman\n5. OG image 1200x630 biar share WA cakep\n6. Sitemap.xml + robots.txt\n7. JSON-LD LocalBusiness",
      "### 8-12: Conversion\n8. Headline jelas 3 detik: siapa lo, buat siapa, hasil apa\n9. Social proof di atas fold: 'Dipercaya 50+ bisnis'\n10. Sticky CTA + floating chat\n11. Pricing transparan\n12. FAQ yang jawab objection",
      "#### Checklist CilokTech:\nSemua ada di ciloktech.web.id — 111kB, 98 Lighthouse, dark mode, blog + harga anti-nawar. Mau sama? Ambil Company Profile 2.5jt di /harga.",
    ],
  },
  "jasa-pembuatan-website-profesional-umkm": {
    keywords: "jasa pembuatan website profesional, jasa website profesional, jasa bikin website terpercaya, jasa pembuatan website umkm terbaik",
    body: [
      "Lo search 'jasa pembuatan website profesional' — keluar 100+ hasil. 90% reseller template WordPress, server shared, support slow, hasilnya lemot. CilokTech beda — gue bikin custom dari nol.",
      "### Kenapa harus yang profesional (bukan template 500rb)?\n1. Speed <1s = conversion. Template 4.5s bikin 40% visitor kabur.\n2. SEO ready — OG, Schema LocalBusiness, sitemap, robots, canonical otomatis. Template gak ada.\n3. Source code milik lo 100% repo private GitHub — bukan sewa, bukan dikunci.\n4. Support <2 jam via Telegram @ciloktech — langsung dev, bukan CS template yang hilang.",
      "### Spek yang lo dapet (sama kayak ciloktech.web.id)\n- Next.js 15 + Tailwind v4 — 111kB First Load, 98 Lighthouse\n- SEO lengkap: OG 1200x630, sitemap.xml, robots.txt, JSON-LD, canonical ciloktech.web.id\n- Dark/light toggle pro + anti-FOUC\n- <1s LCP — buka di HP 4G kentang tetap ngebut\n- Hosting Vercel Edge + domain .web.id 1 tahun include",
      "### Harga transparan\n- Landing Page: Rp 900rb — 1 produk/jasa, 2-3 hari live\n- Company Profile Pro: Rp 2.5jt TERLARIS — 5 halaman + blog + CMS, value Rp 7jt agency\n- Web App Custom: mulai Rp 5jt — POS, inventory, CRM, dashboard",
      "### Portfolio\n- UMKM Batik — landing + katalog + WA checkout, closing +31%\n- POS Laundry — Firebase + PWA + nota + stok\n- Company Profile Bengkel — <1s LCP, Maps embed + rating",
      "#### Cara order\nChat Telegram @ciloktech 'Mau website profesional' → brief 15 menit → DP 50% → staging link tiap hari → live 3-7 hari → pelunasan. Konsultasi gratis, gak cocok gak usah lanjut.",
    ],
  },
  "jasa-website-toko-online-umkm-2026": {
    keywords: "jasa website toko online umkm, jasa bikin toko online, toko online qris, website toko online murah profesional",
    body: [
      "Masih jualan via DM IG? Capek balas 'Harga kak?', padahal customer maunya langsung checkout? Waktunya upgrade ke toko online.",
      "### Masalah jualan via DM\n- 60% calon customer males nanya harga — skip ke kompetitor yang ada harga + tombol beli\n- Stok manual — oversell, customer marah\n- Rekap manual Excel — 2 jam tiap malam\n- Data hilang — gak bisa retargeting",
      "### Solusi: Toko Online UMKM (mulai Rp 2.5jt di CilokTech)\n- Katalog + varian + stok real-time\n- Keranjang + checkout otomatis\n- Payment QRIS / Transfer / COD\n- Ongkir otomatis (RajaOngkir) + resi auto\n- Dashboard admin order + stok + export Excel\n- SEO per produk: 'beli batik tulis'",
      "### Marketplace vs Toko Sendiri\nMarketplace: potongan 5-10%, perang harga, data milik marketplace, toko bisa ditutup.\nToko Sendiri: tanpa potongan, data milik lo, branding kuat, promo bebas.",
      "### Tech\nNext.js 15 + Prisma + PostgreSQL + Midtrans QRIS. <1s LCP, PWA install HP, 111kB First Load hemat kuota.",
      "#### Mulai dari mana?\nProduk <20 SKU → paket Company Profile 2.5jt + Katalog + WA Checkout (paling laris). >50 SKU + payment auto → Web App Custom 5jt+.",
    ],
  },
  "jasa-website-company-profile-cv-pt-startup": {
    keywords: "jasa website company profile, jasa website cv pt, jasa website startup, website company profile profesional",
    body: [
      "CV/PT atau startup punya IG bagus, tapi website gak ada atau ala kadarnya? Di B2B, website = first impression. Jelek = dianggap abal.",
      "### Kenapa CV/PT butuh company profile pro?\n1. Client B2B cek website sebelum PO — lemot / 404 = trust 0\n2. Investor cek SEO + speed + legalitas footer — gak ada = gak serius\n3. Tender/vendor list syarat 'wajib website company profile'\n4. Recruitment — calon karyawan bagus cek website dulu",
      "### Standar company profile 2026 (ada di ciloktech.web.id)\n- Homepage high-conversion: Hero + Stats + Layanan + Portofolio + Harga + Testi + FAQ + Kontak\n- Halaman /harga breakdown + /blog keyword\n- Legalitas: NIB, alamat, email domain @perusahaan, Maps\n- Tech: Next.js 15 111kB, 98 Lighthouse, OG 1200x630, Schema Organization, sitemap, robots\n- <1s LCP\n- Source repo private milik perusahaan 100%",
      "### Harga\nCompany Profile Pro Rp 2.5jt TERLARIS — kayak ciloktech.web.id: 5 hal + blog + CMS, copywriting B2B, SEO lengkap, dark/light mode. Value Rp 7jt agency — jual 2.5jt karena one-man senior. Breakdown di /harga.",
      "### Proses PT/CV/Startup anti drama\n01 Brief 15 menit Telegram\n02 DP 50% desain approve staging\n03 Dev 3-7 hari live staging\n04 Go-live deploy .co.id/.web.id + training\n05 Maintenance 3 bulan bug+security",
      "#### Mau company profile yang bikin client bilang 'serius'?\nChat Telegram @ciloktech 'Company Profile [Nama PT/CV] - [Bidang]'. Gue balas <2 jam + roadmap + ref mirip bidang lo.",
    ],
  },
  "jasa-website-murah-jangan-asal-murah": {
    keywords: "jasa website murah, website murah 500rb jebakan, harga website murah vs profesional",
    body: [
      "Lo liat iklan 'Jasa Website Murah Rp 500rb'? 90% client yang dateng ke gue itu korban website murah yang akhirnya bayar 2x.",
      "### Bongkar paket Rp 500rb isinya apa\n- Domain gratisan + hosting 100MB — lemot, suspend\n- Template WP bajakan — backdoor siap hack\n- Gak SSL — Chrome 'Not Secure', customer kabur\n- Gak sitemap/robots/OG — Google gak index\n- Revisi 1x abis itu hilang\n- Source dikunci — pindah hosting dimintain tebusan",
      "### Cost sebenarnya Rp 500rb\nBulan 2 hosting minta upgrade 300rb/bln, bulan 3 kena malware 500rb, SEO nol rugi peluang 2-5jt/bln, akhirnya bikin ulang 2.5jt. Total rugi 3.5jt + waktu 2 bulan.",
      "### Kenapa CilokTech Rp 2.5jt justru lebih murah?\nUI 1.2jt + Frontend Next.js 1.5jt + SEO 800rb + Copy 700rb + Hosting 300rb + Deploy 500rb = value 5jt+, jual 2.5jt all-in. Sekali bayar milik selamanya, source 100% milik lo, hosting Vercel + domain 1th include, 3 bulan maintenance.",
      "### Checklist biar gak ketipu murah\n1. Tech apa? WP+Elementor doang tanpa SEO → skip\n2. Sitemap + robots ada? Gak ada → SEO nol\n3. Source code milik siapa? Sewa → jangan\n4. Speed berapa? Lighthouse <80 → lemot\n5. Portofolio live — buka di HP 4G <1s gak?",
      "#### Rules gue:\nBudget mepet <1jt → Landing Page Rp 900rb (bukan company profile 500rb). Lebih worth 1 produk focus, 2-3 hari live.",
    ],
  },
  "jasa-landing-page-high-conversion-umkm": {
    keywords: "jasa landing page high conversion, jasa landing page umkm, landing page cepat closing, jasa landing page profesional",
    body: [
      "Landing page rame animasi tapi gak ada yang klik WA = gagal. Landing polos tapi sticky CTA + bukti sosial = closing tiap hari.",
      "### Formula landing page high conversion (dipake di ciloktech.web.id)\n1. Hero: headline hasil, bukan fitur. 'Laundry 1 Jam Jadi — Antar Jemput Gratis'\n2. Stats bar: '<1s load • 98 Lighthouse • 50+ client'\n3. Problem → Solution → Proof\n4. Pricing transparan: tulis Rp 900rb mulai, jangan 'Hubungi kami'\n5. Testimoni verified + Maps embed\n6. FAQ objection: 'Berapa lama?', 'Bisa COD?'\n7. Sticky CTA + Floating WA",
      "### Kenapa Rp 900rb bisa closing?\nBukan template — sistem: Next.js 15 111kB, <1s LCP, copywriting to-the-point, SEO local 'jasa [bisnis]', OG 1200x630 WA cakep. Go-live 2-3 hari.",
      "### Contoh yang udah live\n- Laundry Express — 'laundry kiloan' page 1, order WA +40%\n- Bengkel — before/after + rating, booking +25%\n- Batik Tulis — katalog + WA checkout, closing +31%",
      "### Landing 900rb vs Company Profile 2.5jt\nLanding = 1 goal (chat WA). Cocok 1 produk, butuh leads minggu ini.\nCompany profile = trust + SEO + portofolio. Cocok PT/CV long game. Lihat /harga.",
      "#### Mau landing page yang closing?\nChat @ciloktech 'Landing Page [bisnis lo]'. Gue kasih struktur headline + CTA terbukti — konsultasi gratis 15 menit.",
    ],
  },
  "wordpress-vs-nextjs-untuk-umkm-2026": {
    keywords: "wordpress vs nextjs umkm, perbandingan wordpress nextjs, wordpress lemot vs nextjs cepat, ganti wordpress ke nextjs",
    body: [
      "2026 masih debat WordPress vs Next.js? Gue kasih data lapangan 50+ project UMKM.",
      "### Speed benchmark (HP kentang 4G)\nWP Elementor + 15 plugin: LCP 4.2s, TTI 6.8s, 3.2MB, Lighthouse 62\nNext.js CilokTech: LCP 0.8s, TTI 1.1s, 111kB, Lighthouse 98\nWP 40% kabur sebelum load, Next.js conversion +22%.",
      "### Security\nWP: PHP+MySQL+plugin = 22 CVE/tahun. 1 plugin nulled = backdoor.\nNext.js static: gak ada DB frontend, gak ada PHP, API pisah. Hack hampir mustahil.",
      "### SEO\nWP: perlu Yoast + Rank Math + Cache + Smush = 4 plugin buat kejar SEO yang Next.js include default.\nNext.js: OG+Schema+Sitemap+Robots+Canonical+AVIF auto.",
      "### Biaya 1 tahun\nWP murah 500rb: 500rb+600rb hosting+500rb malware+2.5jt bikin ulang = 4.1jt rugi\nNext.js 2.5jt: all-in include Vercel+domain. Tahun 2 cuma hosting $0-20/bln.",
      "### Kapan WP masih oke?\nIbu kos butuh edit tiap hari sendiri gak peduli speed 3 detik. UMKM target closing + SEO page 1 → Next.js.",
      "#### Migrasi WP ke Next.js?\nGue migrate konten WP ke Next.js tanpa hilang SEO (301, keep URL). Gratis audit speed — screenshot Lighthouse kirim @ciloktech.",
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
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://ciloktech.web.id/blog/${slug}` },
    keywords: contents[slug]?.keywords.split(", ") || post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://ciloktech.web.id/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  const content = contents[slug];
  if (!content) return notFound();

  return (
    <>
      <Navbar />
      <main className="pt-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-300 min-h-screen">
        <article className="max-w-3xl mx-auto px-6 py-12 md:py-20">
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

          <div className="mt-10 prose prose-sm dark:prose-invert max-w-none prose-headings:tracking-tight prose-headings:font-extrabold prose-p:leading-[1.8] prose-p:text-[15px] prose-h3:text-[20px] prose-h3:mt-10 prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-strong:text-gray-900 dark:prose-strong:text-white">
            {content.body.map((para, i) => {
              if (para.startsWith("### ")) {
                return <h3 key={i} className="text-[22px] font-extrabold mt-10 mb-4 text-gray-900 dark:text-white">{para.replace("### ", "")}</h3>;
              }
              if (para.startsWith("#### ")) {
                return (
                  <div key={i} className="mt-10 p-5 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-2xl">
                    <p className="font-bold text-[14px] text-amber-900 dark:text-amber-200 leading-relaxed whitespace-pre-wrap">{para.replace("#### ", "")}</p>
                  </div>
                );
              }
              return (
                <p key={i} className="text-[15px] leading-[1.85] text-gray-700 dark:text-gray-300 whitespace-pre-wrap mt-6">
                  {para}
                </p>
              );
            })}
          </div>

          <div className="mt-16 rounded-[20px] bg-gray-900 dark:bg-white text-white dark:text-black p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <div className="font-extrabold text-[18px] leading-tight">Mau website kayak yang di artikel ini?</div>
              <div className="text-[13px] opacity-70 mt-1">Konsultasi 15 menit gratis — gue kasih roadmap, bukan sales pitch.</div>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href={`https://t.me/ciloktech?text=Halo%20CilokTech%2C%20abis%20baca%20${encodeURIComponent(post.title)}%20mau%20konsultasi`} className="px-6 py-3 bg-white dark:bg-black text-gray-900 dark:text-white rounded-full font-bold text-[13px] hover:bg-cyan-300 dark:hover:bg-cyan-300 hover:text-black transition">
                Chat dari artikel ini →
              </a>
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              author: { "@type": "Organization", name: "Cilok Tech", url: "https://ciloktech.web.id" },
              publisher: { "@type": "Organization", name: "Cilok Tech", logo: { "@type": "ImageObject", url: "https://ciloktech.web.id/logo.jpg" } },
              datePublished: post.date,
              dateModified: post.date,
              mainEntityOfPage: `https://ciloktech.web.id/blog/${slug}`,
              image: "https://ciloktech.web.id/logo.jpg",
            }),
          }}
        />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
