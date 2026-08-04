export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "alasan-website-umkm-sepi-pengunjung",
    title: "5 Alasan Website UMKM Sepi Pengunjung Padahal IG Ramai",
    description: "Punya website tapi gak ada yang dateng? Ini 5 penyebab paling sering yang gue temuin di UMKM — dan fix-nya yang langsung ngasilin customer.",
    date: "2026-08-01",
    readingTime: "6 menit",
    tags: ["UMKM", "SEO", "Conversion"],
    featured: true,
  },
  {
    slug: "landing-page-vs-company-profile",
    title: "Landing Page vs Company Profile: Mana yang Bikin Cuan?",
    description: "Jangan salah pilih. Landing page Rp 900rb bukan company profile 2.5jt. Bedanya di tujuan, struktur, dan cara ngasilin cuan. Gue breakdown to-the-point.",
    date: "2026-08-02",
    readingTime: "5 menit",
    tags: ["Landing Page", "Company Profile", "Strategi"],
    featured: true,
  },
  {
    slug: "kenapa-wordpress-lemot-solusi-nextjs",
    title: "Kenapa Website WordPress Lemot & Rawan Hack (dan Solusi Next.js 15)",
    description: "WordPress Elementor rata-rata 4.5 detik LCP dan sering kena malware. Next.js 15 bisa <1s, 98 Lighthouse, aman by default. Ini perbandingan jujur.",
    date: "2026-08-03",
    readingTime: "7 menit",
    tags: ["Next.js", "WordPress", "Speed"],
  },
  {
    slug: "biaya-bikin-website-2026-breakdown-jujur",
    title: "Biaya Bikin Website Profesional 2026: Breakdown Jujur Rp 900rb – 15jt",
    description: "Template 800rb vs CilokTech 2.5jt vs Agency 10jt+ — bedanya apa? Gue pecah per-item: desain, code, SEO, copywriting, hosting. Biar gak ketipu murah.",
    date: "2026-08-03",
    readingTime: "8 menit",
    tags: ["Harga", "Transparan", "Comparison"],
    featured: true,
  },
  {
    slug: "checklist-website-ngasilin-customer",
    title: "Checklist Website yang Ngasilin Customer, Bukan Cuma Bagus",
    description: "Website bagus doang gak cukup. Harus ada 12 elemen conversion ini: sticky CTA, social proof, <1s LCP, Schema, dan form yang gak bikin kabur.",
    date: "2026-08-04",
    readingTime: "6 menit",
    tags: ["Checklist", "Conversion", "CRO"],
  },
  {
    slug: "jasa-pembuatan-website-solo-profesional",
    title: "Jasa Pembuatan Website Solo Profesional — UMKM Sampai PT, 3 Hari Live",
    description: "Cari jasa website Solo yang cepat, SEO ready, dan gak template? CilokTech basis Solo — Next.js 15, <1s LCP, source milik lo. Konsultasi langsung dev.",
    date: "2026-08-05",
    readingTime: "7 menit",
    tags: ["Jasa Website Solo", "Solo", "Local SEO"],
    featured: true,
  },
  {
    slug: "jasa-website-toko-online-umkm-2026",
    title: "Jasa Website Toko Online UMKM 2026: Dari Katalog IG ke Checkout Otomatis",
    description: "Masih jualan via DM IG? Ini cara upgrade ke toko online auto checkout, stok real-time, payment QRIS, dan resi otomatis — mulai Rp 2.5jt.",
    date: "2026-08-05",
    readingTime: "8 menit",
    tags: ["Toko Online", "UMKM", "E-commerce"],
    featured: true,
  },
  {
    slug: "jasa-website-company-profile-cv-pt-startup",
    title: "Jasa Website Company Profile CV/PT & Startup: Bikin Investor & Client Percaya",
    description: "Company profile asal jadi bikin CV/PT keliatan abal. Ini standar 2026 biar dipercaya client + investor: SEO, portofolio, legalitas, dan speed.",
    date: "2026-08-05",
    readingTime: "7 menit",
    tags: ["Company Profile", "CV PT", "B2B"],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAllTags() {
  return Array.from(new Set(posts.flatMap((p) => p.tags)));
}
