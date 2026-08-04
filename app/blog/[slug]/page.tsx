import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { posts, getPost } from "../data";

type Props = { params: Promise<{ slug: string }> };

// Full content per slug — SEO keyword stuffed natural
const contents: Record<string, { body: string[]; keywords: string }> = {
  "alasan-website-umkm-sepi-pengunjung": {
    keywords: "website umkm sepi, cara naikin traffic umkm, seo umkm, website umkm tidak muncul di google",
    body: [
      "Lo udah punya IG 5k followers, tapi website sepi kayak kuburan? Ini normal — IG dan Google itu beda game.",
      "### 1. Website lo gak SEO ready — cuma jadi brosur online\nGak ada OG tag, sitemap, schema LocalBusiness. Google gak ngerti bisnis lo apa. Hasilnya gak ke-index. Fix: Next.js 15 auto generate sitemap + OG + JSON-LD. Di CilokTech ini default.",
      "### 2. Load >3 detik — pengunjung kabur sebelum liat produk\nRata-rata WordPress Elementor 4.5s LCP. Orang Indonesia sabarnya 2 detik. Fix: gue build 107kB First Load, <1s LCP. Speed = conversion.",
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
      "### Data beneran:\n- Elementor + 15 plugin = 4.5s LCP average\n- 1 plugin gak update = pintu masuk malware\n- Hosting shared Rp 30rb/bln = tetangga abuse IP, SEO mati\n- Build size: 2-5MB vs Next.js gue 107kB",
      "### Kenapa Next.js 15 jauh lebih ngebut?\nNext.js generate HTML static pas build, bukan PHP render tiap request. Hasilnya: <1s LCP, 98 Lighthouse, image AVIF auto, routing prefetch. Hosting di Vercel Edge — server di SG/JP, bukan US jauh.",
      "### Aman?\nWordPress = PHP + MySQL + 20 plugin = 20 celah. Next.js = static, gak ada DB di frontend, API pisah. Kena hack itu hampir mustahil kalo static export.",
      "### Kapan WordPress masih oke?\nKalo lo butuh edit tulisan tiap hari sendiri non-teknis dan budget mepet. Tapi kalo mau speed + SEO + anti-hack → Next.js.",
      "#### Di CilokTech:\nSemua project Next.js 15. Bukan karena trend, tapi karena client gue butuh website yang buka <1s di HP kentang, bukan loading muter 5 detik.",
    ],
  },
  "biaya-bikin-website-2026-breakdown-jujur": {
    keywords: "biaya bikin website 2026, harga jasa pembuatan website, perbandingan harga website, harga website umkm",
    body: [
      "Lo search 'jasa pembuatan website' — keluar harga Rp 500rb sampai Rp 15jt. Kok bisa beda sejauh itu? Gue pecah biar lo gak ketipu murah.",
      "### Rp 800rb - 1.8jt: Freelance Pemula / Template\nTemplate beli Rp 150rb + ganti logo. Teknologi: WordPress + Elementor. SEO gak ada, speed 3-6 detik, source dikunci. Result: gak muncul di Google, revisi hilang. Cocok kalo cuma buat tugas sekolah.",
      "### Rp 2.5jt: CilokTech — Value Asli Rp 7jt\nIni yang gue pakai buat ciloktech.web.id: Design Figma custom → code, Next.js 15 107kB, SEO OG+Schema+Sitemap+Robots lengkap, dark/light toggle pro anti-FOUC, <1s LCP, source code repo private milik lo 100%, balas <2 jam, live 3-7 hari. Kenapa bisa 2.5jt? Karena solo senior — potong meeting, potong kantor, potong PM. Lihat breakdown lengkap di /harga.",
      "### Rp 8jt - 15jt: Agency Jakarta\nSama kayak CilokTech secara teknologi, tapi bayar meeting 60% budget. Ada PM, sales, kantor. Go-live 2-4 minggu. Cocok kalo lo butuh brand guideline + invoice PT + meeting offline.",
      "### Mana yang worth?\nKalo lo UMKM yang mau validasi pasar cepat tapi tetap SEO ready + scalable → 2.5jt itu sweet spot. Murah yang 800rb ujungnya bayar 2x karena bikin ulang. Mahal yang 10jt overkill kalo belum butuh meeting mingguan.",
      "#### Transparan gue:\nGue kasih harga di depan, breakdown di /harga, source code milik lo. Gak ada hidden fee. Domain + hosting tahun pertama include. Kalo gak cocok budget gue bikinin custom — chat aja.",
    ],
  },
  "checklist-website-ngasilin-customer": {
    keywords: "checklist website conversion, website ngasilin customer, cara bikin website yang menghasilkan uang",
    body: [
      "Website bagus doang gak bikin cuan. Gue audit 50+ website UMKM — yang konversi tinggi selalu punya 12 elemen ini.",
      "### 1-3: Speed & Trust\n1. <1s LCP — kalo 3 detik 40% pengunjung kabur\n2. HTTPS + SSL valid — kalo gak ijo gembok, trust nol\n3. Favicon + logo rapi — detail kecil tapi ngaruh",
      "### 4-7: SEO & Structure\n4. Title + meta description unik tiap halaman\n5. OG image 1200x630 biar share WA cakep\n6. Sitemap.xml + robots.txt — biar Google tau semua URL lo ada\n7. JSON-LD LocalBusiness — biar muncul di Maps + rich result",
      "### 8-12: Conversion\n8. Headline jelas dalam 3 detik: siapa lo, buat siapa, hasil apa. Contoh gue: 'Website yang nggak cuma bagus, tapi ngasilin cuan'\n9. Social proof di atas fold: 'Dipercaya 50+ bisnis'\n10. Sticky CTA + floating chat — jangan suruh scroll jauh buat kontak\n11. Pricing transparan — orang Indonesia males tanya harga yang disembunyiin\n12. FAQ yang jawab objection — 'Kenapa mahal?', 'Berapa lama?', 'Ada garansi?'",
      "#### Checklist CilokTech:\nSemua yang di atas udah ada di ciloktech.web.id — cek aja view-source. 107kB, 98 Lighthouse, dark mode, back-to-top, blog + harga anti-nawar. Mau yang sama? Ambil paket Company Profile 2.5jt di /harga.",
    ],
  },
  "jasa-pembuatan-website-solo-profesional": {
    keywords: "jasa pembuatan website solo, jasa website solo, jasa bikin website solo profesional, web developer solo, jasa website umkm solo",
    body: [
      "Lo search 'jasa pembuatan website Solo' — keluar 100+ hasil. Tapi 90% itu reseller template WordPress yang servernya di Jakarta, supportnya slow, hasilnya lemot. Gue basis Solo — ngerti pasar Solo.",
      "### Kenapa harus yang di Solo?\n1. Ketemu offline bisa — gue di Solo, bisa ngopi 15 menit bahas brief. Gak perlu Zoom muter.\n2. Ngerti UMKM Solo: batik, kuliner, konveksi, bengkel, laundry. Tone copywriting gue nyesuaiin pasar Solo — bukan bahasa agency Jakarta yang kaku.\n3. Support <2 jam — via Telegram @ciloktech, bukan ticketing yang dibales 3 hari.",
      "### Spek yang lo dapet (sama kayak ciloktech.web.id)\n- Next.js 15 + Tailwind v4 — 107kB First Load, 98 Lighthouse\n- SEO lengkap: OG 1200x630, Schema LocalBusiness Solo, sitemap.xml, robots.txt, canonical ciloktech.web.id\n- Dark/light toggle pro + anti-FOUC\n- <1s LCP — buka di HP kentang 4G Solo tetap ngebut\n- Source code repo private GitHub milik lo 100% — bukan sewa\n- Hosting Vercel Edge (server SG paling deket Solo) + domain .web.id 1 tahun include",
      "### Harga jasa website Solo di CilokTech\n- Landing Page Sales: Rp 900rb — buat 1 produk, 2-3 hari live\n- Company Profile Pro: Rp 2.5jt (TERLARIS) — 5 halaman + blog + CMS, value asli Rp 7jt agency Solo\n- Web App Custom: mulai Rp 5jt — POS, inventory, CRM, dashboard",
      "### Portfolio Solo\n- UMKM Batik Solo — landing page + katalog + WA checkout, closing +31%\n- POS System Laundry Solo — Firebase + PWA + nota + stok\n- Company Profile Bengkel — <1s LCP, Maps embed, rating",
      "#### Cara order — Solo area\nChat Telegram @ciloktech bilang 'Mau website Solo' → brief 15 menit → DP 50% → gue kasih staging link tiap hari → live 3-7 hari → pelunasan. Konsultasi gratis, kalo gak cocok gak usah lanjut. Gak usah sungkan — gue juga dari Solo kok.",
    ],
  },
  "jasa-website-toko-online-umkm-2026": {
    keywords: "jasa website toko online umkm, jasa bikin toko online, toko online qris, website toko online murah profesional",
    body: [
      "Masih jualan via DM IG? Capek balas 'Harga kak?', 'Link Shopee kak?' padahal calon customer maunya langsung checkout? Waktunya upgrade ke toko online beneran.",
      "### Masalah jualan via DM\n- 60% calon customer males nanya harga — langsung skip ke kompetitor yang ada harga jelas + tombol beli\n- Catat stok manual — sering oversell, customer marah\n- Rekap order manual di buku/Excel — 2 jam tiap malam\n- Data customer hilang — gak bisa retargeting",
      "### Solusi: Toko Online UMKM (mulai Rp 2.5jt di CilokTech)\nStack kayak ciloktech.web.id tapi buat jualan:\n- Katalog produk + varian + stok real-time\n- Keranjang + checkout otomatis\n- Payment QRIS / Transfer / COD\n- Ongkir otomatis (RajaOngkir) + resi auto\n- Dashboard admin: order masuk + stok + export Excel\n- SEO per produk: biar produk lo muncul di Google 'beli batik solo'",
      "### Perbandingan: Marketplace vs Toko Online Sendiri\nMarketplace (Shopee/Tokped): potongan 5-10%, perang harga, data customer milik marketplace, toko bisa ditutup sepihak.\nToko Online Sendiri (ciloktech.web.id model): tanpa potongan, harga lo kontrol, data customer milik lo, branding kuat, bisa ad-hoc promo.",
      "### Tech yang gue pakai\nNext.js 15 + Tailwind + Prisma + PostgreSQL + Midtrans QRIS. Speed <1s LCP — pembeli gak kabur. PWA — bisa install di HP kayak aplikasi. 107kB First Load — hemat kuota customer.",
      "#### Mulai dari mana?\nKalo produk <20 SKU → paket Company Profile 2.5jt + Katalog + WA Checkout (paling laris UMKM). Kalo produk >50 SKU + butuh payment auto → Web App Custom mulai 5jt. Chat @ciloktech dengan 'Mau toko online UMKM' — gue kasih demo akun sandbox yang udah live.",
    ],
  },
  "jasa-website-company-profile-cv-pt-startup": {
    keywords: "jasa website company profile, jasa website cv pt, jasa website startup, website company profile profesional",
    body: [
      "CV/PT atau startup lo punya IG bagus, tapi pas client cek website — gak ada atau ala kadarnya? Di B2B, website itu first impression. Company profile jelek = dianggap abal-abal.",
      "### Kenapa CV/PT butuh company profile yang pro (bukan 800rb-an template)?\n1. Client B2B cek website sebelum PO — kalo lemot / 404 / WordPress default, trust langsung 0\n2. Investor cek SEO + speed + legalitas di footer — kalo gak ada, dianggap gak serius\n3. Tender / vendor list sering syarat 'wajib ada website company profile'\n4. Recruitment — calon karyawan bagus cek website dulu sebelum apply",
      "### Standar company profile 2026 (yang ada di ciloktech.web.id)\n- Homepage high-conversion: Hero + Stats + Layanan + Portofolio + Harga + Testi + FAQ + Kontak\n- Halaman Layanan + Portofolio + /harga breakdown + /blog keyword\n- Legalitas: NIB, alamat, email domain @perusahaan (bukan gmail), link Maps\n- Technical: Next.js 15 107kB, 98 Lighthouse, OG image 1200x630, Schema Organization + LocalBusiness, sitemap.xml, robots.txt\n- Speed: <1s LCP — client kantor buka pake WiFi lemot tetap ngebut\n- Source code repo private milik perusahaan 100%",
      "### Harga di CilokTech\nCompany Profile Pro Rp 2.5jt (TERLARIS) — ini persis kayak ciloktech.web.id: 5 halaman + blog + CMS, copywriting B2B, SEO lengkap, dark/light mode, back-to-top + floating CTA.\nValue aslinya Rp 7jt kalo di agency Jakarta — gue jual 2.5jt karena solo senior, potong meeting & kantor. Breakdown ada di /harga.",
      "### Proses buat PT/CV/Startup (anti drama)\n01 Briefing 15 menit via Telegram — ceritain bisnis, target client, kompetitor\n02 DP 50% — gue desain, lo approve via staging link\n03 Dev 3-7 hari — progress tiap hari, live staging\n04 Go-live — deploy ke domain .co.id / .web.id + training tim + docs\n05 Maintenance 3 bulan — bug + security include",
      "#### Mau company profile yang bikin client bilang 'wah ini serius'?\nChat Telegram @ciloktech dengan format: 'Company Profile [Nama PT/CV] - [Bidang]'. Contoh: 'Company Profile CV Maju Jaya - Konstruksi'. Gue balas <2 jam dengan roadmap + contoh ref yang mirip bidang lo. Konsultasi gratis 15 menit.",
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
        {/* HEADER */}
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

          <div className="mt-10 prose prose-sm dark:prose-invert max-w-none prose-headings:tracking-tight prose-headings:font-extrabold prose-p:leading-[1.8] prose-p:text-[15px] prose-h3:text-[20px] prose-h3:mt-10 prose-h4:text-[16px] prose-a:text-cyan-600 dark:prose-a:text-cyan-400 prose-strong:text-gray-900 dark:prose-strong:text-white">
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

          {/* CTA IN-ARTICLE */}
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

          {/* RELATED */}
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

        {/* JSON-LD Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              author: { "@type": "Organization", name: "Cilok Tech", url: "https://ciloktech.web.id" },
              publisher: {
                "@type": "Organization",
                name: "Cilok Tech",
                logo: { "@type": "ImageObject", url: "https://ciloktech.web.id/logo.jpg" },
              },
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
