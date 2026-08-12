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
    description: "Website sudah jadi tapi sepi pengunjung? Ini 5 penyebab paling sering saya temui di UMKM — beserta solusi praktis yang terbukti mendatangkan pelanggan.",
    date: "2026-08-01",
    readingTime: "6 menit",
    tags: ["UMKM", "SEO", "Conversion"],
    featured: true,
  },
  {
    slug: "landing-page-vs-company-profile",
    title: "Landing Page vs Company Profile: Mana yang Bikin Cuan?",
    description: "Jangan salah pilih. Landing page Rp 900 ribu berbeda dengan company profile Rp 1,5jt. Perbedaannya ada pada tujuan, struktur, dan cara menghasilkan konversi. Saya bedah secara to-the-point.",
    date: "2026-08-02",
    readingTime: "5 menit",
    tags: ["Landing Page", "Company Profile", "Strategi"],
    featured: true,
  },
  {
    slug: "kenapa-wordpress-lemot-solusi-nextjs",
    title: "Kenapa Website WordPress Lemot & Rawan Hack (dan Solusi Next.js 15)",
    description: "Rata-rata website WordPress + Elementor memiliki LCP 4,5 detik dan rentan malware. Next.js 15 mampu di bawah 1 detik, skor Lighthouse 100 (SEO & Aksesibilitas), dan aman secara default. Berikut perbandingan jujur berdasarkan data.",
    date: "2026-08-03",
    readingTime: "7 menit",
    tags: ["Next.js", "WordPress", "Speed"],
  },
  {
    slug: "biaya-bikin-website-2026-breakdown-jujur",
    title: "Biaya Bikin Website Profesional 2026: Breakdown Jujur Rp 900rb – 15jt",
    description: "Template Rp 800 ribu vs CilokTech Rp 1,5jt vs agensi Rp 10 juta ke atas — apa bedanya? Saya rincikan per item: desain, coding, SEO, copywriting, dan hosting agar Anda tidak terkecoh harga murah.",
    date: "2026-08-03",
    readingTime: "8 menit",
    tags: ["Harga", "Transparan", "Comparison"],
    featured: true,
  },
  {
    slug: "checklist-website-ngasilin-customer",
    title: "Checklist Website yang Menghasilkan Pelanggan, Bukan Hanya Sekadar Bagus",
    description: "Tampilan bagus saja tidak cukup. Website Anda memerlukan 12 elemen konversi ini: sticky CTA, social proof, LCP di bawah 1 detik, Schema Markup, dan formulir yang ramah pengguna.",
    date: "2026-08-04",
    readingTime: "6 menit",
    tags: ["Checklist", "Conversion", "CRO"],
  },
  {
    slug: "jasa-pembuatan-website-profesional-umkm",
    title: "Jasa Pembuatan Website Profesional — UMKM Sampai PT, 3 Hari Live",
    description: "Mencari jasa pembuatan website yang cepat, SEO-ready, dan bukan template? CilokTech menggunakan Next.js 15, LCP di bawah 1 detik, dan source code 100% milik Anda. Konsultasi langsung dengan developer, bukan sales.",
    date: "2026-08-05",
    readingTime: "7 menit",
    tags: ["Jasa Website Profesional", "UMKM", "Terpercaya"],
    featured: true,
  },
  {
    slug: "jasa-website-toko-online-umkm-2026",
    title: "Jasa Website Toko Online UMKM 2026: Dari Katalog IG ke Checkout Otomatis",
    description: "Masih berjualan lewat DM Instagram? Saatnya upgrade ke toko online dengan checkout otomatis, stok real-time, pembayaran QRIS, dan cetak resi otomatis — mulai Rp 2,5 juta.",
    date: "2026-08-05",
    readingTime: "8 menit",
    tags: ["Toko Online", "UMKM", "E-commerce"],
    featured: true,
  },
  {
    slug: "jasa-website-company-profile-cv-pt-startup",
    title: "Jasa Website Company Profile CV/PT & Startup: Bikin Investor & Client Percaya",
    description: "Company profile asal jadi membuat CV/PT terlihat tidak meyakinkan. Ini standar website company profile 2026 agar dipercaya klien dan investor: SEO, portofolio, legalitas, dan kecepatan.",
    date: "2026-08-05",
    readingTime: "7 menit",
    tags: ["Company Profile", "CV PT", "B2B"],
  },
  {
    slug: "jasa-website-murah-jangan-asal-murah",
    title: "Jasa Website Murah Rp 500rb: Murah di Awal, Boncos di Akhir — Ini Buktinya",
    description: "Tergiur website murah Rp 500 ribu? Umumnya menggunakan hosting tidak memadai, domain menumpang, SEO tidak dioptimalkan, dan rawan diretas. Saya bongkar biaya sebenarnya dan alasan mengapa Rp 1,5jt justru lebih hemat untuk jangka panjang.",
    date: "2026-08-06",
    readingTime: "7 menit",
    tags: ["Website Murah", "Jebakan", "Edukasi"],
    featured: true,
  },
  {
    slug: "jasa-landing-page-high-conversion-umkm",
    title: "Jasa Landing Page High Conversion — Fokus Closing, Bukan Pajangan",
    description: "Landing page yang efektif bukan yang penuh animasi, melainkan yang mendorong pengunjung menghubungi via WhatsApp. Template CilokTech dirancang dengan LCP di bawah 1 detik, sticky CTA, bukti sosial, dan harga yang transparan.",
    date: "2026-08-06",
    readingTime: "6 menit",
    tags: ["Landing Page", "High Conversion", "UMKM"],
  },
  {
    slug: "wordpress-vs-nextjs-untuk-umkm-2026",
    title: "WordPress vs Next.js untuk UMKM 2026: Jujur, Mana yang Lebih Cuan?",
    description: "WordPress mudah diedit, Next.js unggul dalam kecepatan dan keamanan. Mana yang benar-benar menguntungkan untuk UMKM? Saya bandingkan berdasarkan LCP, keamanan, biaya, dan SEO terbaru 2026.",
    date: "2026-08-06",
    readingTime: "9 menit",
    tags: ["WordPress", "Next.js", "UMKM"],
    featured: true,
  },
  {
    slug: "template-vs-custom-website",
    title: "Template Rp 390rb vs Custom Rp 1,5jt: Ini Bedanya (Jangan Tertipu Harga)",
    description: "Banyak jasa menjual 'website siap pakai' Rp 390rb. Kedengarannya murah — tapi apakah itu website yang benar-benar milik Anda? Saya bongkar bedanya dengan custom build: desain, SEO, source code, dan biaya jangka panjang.",
    date: "2026-08-06",
    readingTime: "8 menit",
    tags: ["Template", "Custom", "Edukasi"],
    featured: true,
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAllTags() {
  return Array.from(new Set(posts.flatMap((p) => p.tags)));
}
