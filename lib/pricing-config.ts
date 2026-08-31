export interface BasePlan {
  id: string;
  name: string;
  badge?: string;
  basePriceIdr: number;
  basePriceUsd: number;
  timeline: string;
  description: string;
  idealFor: string;
  included: string[];
}

export interface AddOn {
  id: string;
  name: string;
  description: string;
  priceIdr: number;
  priceUsd: number;
  isBundledFree?: boolean;
  category: "feature" | "infra" | "support";
}

export const BASE_PLANS: BasePlan[] = [
  {
    id: "landing",
    name: "Landing Page",
    badge: "Mulai Cepat",
    basePriceIdr: 900000,
    basePriceUsd: 55,
    timeline: "2-3 Hari Kerja",
    description: "Satu halaman terarah untuk kampanye iklan, launching produk, atau UMKM.",
    idealFor: "Produk tunggal, lead generation, promo musiman.",
    included: [
      "1 Halaman High-Conversion",
      "Mobile-First & Ultra Fast (<1s)",
      "Form Lead + CTA Routing",
      "Setup Domain & Vercel/Cloudflare",
      "SEO Dasar & OpenGraph Card",
    ],
  },
  {
    id: "company",
    name: "Company Profile",
    badge: "Paling Populer",
    basePriceIdr: 1500000,
    basePriceUsd: 90,
    timeline: "4-6 Hari Kerja",
    description: "Website multi-halaman berkelas untuk menaikkan kredibilitas institusi atau brand bisnis.",
    idealFor: "Perusahaan, agensi, kontraktor, klinik, dan B2B.",
    included: [
      "Hingga 5 Halaman Konten (Home, About, Services, Portfolio, Contact)",
      "Editorial Design + Anti-AI Identity",
      "Integrasi Blog/Artikel Ringan",
      "Full SEO Schema + Google Search Console",
      "Garansi 30 Hari Perbaikan Bug",
    ],
  },
  {
    id: "webapp",
    name: "Web Application / MVP",
    badge: "Custom Logic",
    basePriceIdr: 2500000,
    basePriceUsd: 150,
    timeline: "7-12 Hari Kerja",
    description: "Aplikasi web dengan database dinamis, autentikasi user, role RBAC, dan CRUD kompleks.",
    idealFor: "Dashboard admin, portal member, sistem booking, inventori khusus.",
    included: [
      "Arsitektur Next.js 15 + React 19",
      "Dark & Light Theme Parity (Wajib Premium)",
      "Database Cloudflare D1 / Firebase",
      "Autentikasi & Multi-Role Access",
      "6 UI State View (Loading, Error, Empty, etc.)",
      "Export Data (CSV/PDF) & API Webhook",
    ],
  },
  {
    id: "pos-enterprise",
    name: "POS & Operations Bundle",
    badge: "Enterprise Ready",
    basePriceIdr: 3500000,
    basePriceUsd: 195,
    timeline: "7-14 Hari Kerja",
    description: "Solusi operasional lengkap: Sistem Kasir POS + Manajemen Multi-Outlet + Web Profile.",
    idealFor: "Retail, FnB, Barbershop, Grosir yang butuh kasir cepat & pencatatan.",
    included: [
      "Full POS System (Kasir, Stok, Laporan EOD)",
      "PWA App Shell (Bisa install di Android/PC)",
      "Cetak Struk Thermal 58mm/80mm",
      "Offline-first Mode dengan IndexedDB Sync",
      "Rekonsiliasi Kas Laci & Audit Trail Stok",
      "1x Sesi Onboarding & Handover Deployment",
    ],
  },
];

export const AVAILABLE_ADDONS: AddOn[] = [
  {
    id: "addon-telegram-route",
    name: "Telegram Lead & Notification Engine",
    description: "Format pesan konsultasi/order otomatis terstruktur yang langsung terhubung ke Telegram studio.",
    priceIdr: 0,
    priceUsd: 0,
    isBundledFree: true,
    category: "feature",
  },
  {
    id: "addon-pwa",
    name: "PWA App Shell (Installable)",
    description: "Web bisa di-install langsung ke homescreen HP/desktop & cache offline.",
    priceIdr: 0,
    priceUsd: 0,
    isBundledFree: true,
    category: "feature",
  },
  {
    id: "addon-i18n",
    name: "Multi-Language (ID / EN)",
    description: "Sistem multi-bahasa terstruktur dengan toggle instan dan subpath SEO.",
    priceIdr: 150000,
    priceUsd: 10,
    category: "feature",
  },
  {
    id: "addon-sla",
    name: "Extended SLA & Backup 6 Bulan",
    description: "Garansi uptime, pemantauan error, backup berkala, dan minor maintenance.",
    priceIdr: 250000,
    priceUsd: 18,
    category: "support",
  },
  {
    id: "addon-source-handover",
    name: "Source Code & Repo Handover",
    description: "Serah terima full repository Git, arsitektur docs, dan instruksi deploy mandiri.",
    priceIdr: 350000,
    priceUsd: 25,
    category: "infra",
  },
];
