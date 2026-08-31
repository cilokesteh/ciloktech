"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";

interface BasePlan {
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

interface AddOn {
  id: string;
  name: string;
  description: string;
  priceIdr: number;
  priceUsd: number;
  category: "feature" | "infra" | "support";
}

const BASE_PLANS: BasePlan[] = [
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
      "Form Lead + WA Click Routing",
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

const AVAILABLE_ADDONS: AddOn[] = [
  {
    id: "addon-pwa",
    name: "PWA Offline App Shell",
    description: "Pengunjung bisa install web ke homescreen HP/laptop dan buka tanpa kuota.",
    priceIdr: 300000,
    priceUsd: 20,
    category: "feature",
  },
  {
    id: "addon-i18n",
    name: "Multi-Language (ID / EN)",
    description: "Sistem multi-bahasa terstruktur dengan toggle instan dan subpath SEO.",
    priceIdr: 350000,
    priceUsd: 25,
    category: "feature",
  },
  {
    id: "addon-wa-bot",
    name: "WhatsApp Notification Engine",
    description: "Deep link template order / form terstruktur yang langsung membuka WA admin.",
    priceIdr: 250000,
    priceUsd: 15,
    category: "feature",
  },
  {
    id: "addon-sla",
    name: "Extended SLA & Backup 6 Bulan",
    description: "Garansi uptime, pemantauan error harian, backup database mingguan, dan minor patch.",
    priceIdr: 600000,
    priceUsd: 40,
    category: "support",
  },
  {
    id: "addon-source-handover",
    name: "Source Code & Repository Handover",
    description: "Serah terima full source code, arsitektur docs, dan deploy scripts untuk tim internal.",
    priceIdr: 1000000,
    priceUsd: 70,
    category: "infra",
  },
];

export default function PricingCalculator() {
  const { locale } = useI18n();
  const isEn = locale === "en";

  const [selectedPlanId, setSelectedPlanId] = useState<string>("company");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["addon-pwa"]);

  const activePlan = BASE_PLANS.find((p) => p.id === selectedPlanId) || BASE_PLANS[1];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let idr = activePlan.basePriceIdr;
    let usd = activePlan.basePriceUsd;

    for (const addonId of selectedAddons) {
      const addon = AVAILABLE_ADDONS.find((a) => a.id === addonId);
      if (addon) {
        idr += addon.priceIdr;
        usd += addon.priceUsd;
      }
    }

    return { idr, usd };
  };

  const total = calculateTotal();

  const formatPrice = (val: number, currency: "IDR" | "USD") => {
    if (currency === "IDR") {
      return `Rp ${val.toLocaleString("id-ID")}`;
    }
    return `$${val}`;
  };

  // WhatsApp Message Generator
  const generateWhatsAppHref = () => {
    const chosenAddons = selectedAddons
      .map((id) => AVAILABLE_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean);

    const priceText = isEn
      ? `$${total.usd} (USD)`
      : `Rp ${total.idr.toLocaleString("id-ID")}`;

    const text = isEn
      ? `Hello CilokTech, I want to consult my project:\n\n- *Selected Package:* ${activePlan.name} ($${activePlan.basePriceUsd})\n- *Add-ons:* ${chosenAddons.length > 0 ? chosenAddons.join(", ") : "None"}\n- *Estimated Total:* ${priceText}\n- *Timeline Target:* ${activePlan.timeline}\n\nCould we discuss the requirements further?`
      : `Halo CilokTech, saya ingin konsultasi estimasi project:\n\n- *Pilihan Paket:* ${activePlan.name} (Rp ${activePlan.basePriceIdr.toLocaleString("id-ID")})\n- *Fitur Tambahan:* ${chosenAddons.length > 0 ? chosenAddons.join(", ") : "Tidak ada"}\n- *Total Estimasi:* ${priceText}\n- *Target Waktu:* ${activePlan.timeline}\n\nBisa dibantu untuk rincian scope teknisnya?`;

    return `https://wa.me/628870540908?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full bg-[#fbfbfb] dark:bg-[#121214] border border-gray-200/80 dark:border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 dark:border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-amber-900/10 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-full mb-3">
            {isEn ? "Interactive Estimator" : "Kalkulator Estimasi Proyek"}
          </div>
          <h3 className="text-[26px] md:text-[34px] font-black tracking-tight text-gray-900 dark:text-white">
            {isEn ? "Build Your Custom Scope" : "Sesuaikan Kebutuhan & Fitur"}
          </h3>
          <p className="text-[14px] text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
            {isEn
              ? "Select your base project type and toggle required add-on capabilities for transparent, instant pricing."
              : "Pilih pondasi paket utama dan centang fitur tambahan sesuai kebutuhan bisnis Anda secara transparan."}
          </p>
        </div>

        <div className="text-right">
          <div className="text-[12px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {isEn ? "Estimated Investment" : "Mulai dari"}
          </div>
          <div className="text-[32px] md:text-[40px] font-extrabold tracking-tight text-gray-900 dark:text-white">
            {isEn ? formatPrice(total.usd, "USD") : formatPrice(total.idr, "IDR")}
          </div>
          <div className="text-[12px] text-amber-700 dark:text-amber-400 font-semibold mt-0.5">
            {isEn ? `Est. Delivery: ${activePlan.timeline}` : `Estimasi Pengerjaan: ${activePlan.timeline}`}
          </div>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-12 gap-8">
        {/* LEFT: Plan Selector & Addon Checkboxes */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
              1. {isEn ? "Choose Base Architecture" : "Pilih Arsitektur & Paket Dasar"}
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {BASE_PLANS.map((plan) => {
                const isSelected = plan.id === selectedPlanId;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`text-left p-4 rounded-2xl border transition-all duration-200 relative ${
                      isSelected
                        ? "bg-amber-500/10 dark:bg-amber-400/10 border-amber-600 dark:border-amber-400 shadow-sm ring-1 ring-amber-500/50"
                        : "bg-white dark:bg-[#18181b] border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20"
                    }`}
                  >
                    {plan.badge && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                        {plan.badge}
                      </span>
                    )}
                    <div className="font-bold text-[15px] text-gray-900 dark:text-white">{plan.name}</div>
                    <div className="text-[13px] font-extrabold text-amber-800 dark:text-amber-300 mt-1">
                      {isEn ? formatPrice(plan.basePriceUsd, "USD") : formatPrice(plan.basePriceIdr, "IDR")}
                    </div>
                    <div className="text-[12px] text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">
                      {plan.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
              2. {isEn ? "Select Add-on Modules" : "Pilih Modul & Add-on Tambahan"}
            </label>
            <div className="space-y-2.5">
              {AVAILABLE_ADDONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`flex items-start justify-between gap-4 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                      isChecked
                        ? "bg-amber-500/5 dark:bg-amber-400/5 border-amber-600/50 dark:border-amber-400/40"
                        : "bg-white dark:bg-[#18181b] border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/15"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-amber-700 focus:ring-amber-500 accent-amber-700 dark:accent-amber-400 cursor-pointer"
                      />
                      <div>
                        <div className="text-[13.5px] font-bold text-gray-900 dark:text-white flex items-center gap-2">
                          {addon.name}
                        </div>
                        <div className="text-[12px] text-gray-500 dark:text-gray-400 mt-0.5">
                          {addon.description}
                        </div>
                      </div>
                    </div>
                    <div className="text-[13px] font-bold text-gray-800 dark:text-gray-200 whitespace-nowrap pt-0.5">
                      +{isEn ? formatPrice(addon.priceUsd, "USD") : formatPrice(addon.priceIdr, "IDR")}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT: Scope Summary & Direct Actions */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/10 rounded-2xl p-6">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              {isEn ? "Package Breakdown" : "Rincian Deliverables"}
            </div>
            <h4 className="text-[18px] font-black text-gray-900 dark:text-white">
              {activePlan.name}
            </h4>
            <p className="text-[12px] text-gray-600 dark:text-gray-400 mt-1">
              {activePlan.idealFor}
            </p>

            <div className="mt-5 space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                {isEn ? "Included in Base Package:" : "Fitur Bawaan Paket:"}
              </div>
              {activePlan.included.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[12.5px] text-gray-700 dark:text-gray-300">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {selectedAddons.length > 0 && (
              <div className="mt-6 pt-5 border-t border-gray-100 dark:border-white/5 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  {isEn ? "Selected Add-ons:" : "Add-on Terpilih:"}
                </div>
                {selectedAddons.map((id) => {
                  const addon = AVAILABLE_ADDONS.find((a) => a.id === id);
                  if (!addon) return null;
                  return (
                    <div key={id} className="flex items-center justify-between text-[12.5px]">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">+{addon.name}</span>
                      <span className="text-gray-500 font-mono text-[11px]">
                        {isEn ? formatPrice(addon.priceUsd, "USD") : formatPrice(addon.priceIdr, "IDR")}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[13px] font-bold text-gray-600 dark:text-gray-400">
                {isEn ? "Total Estimation" : "Total Estimasi"}
              </span>
              <span className="text-[22px] font-black text-gray-900 dark:text-white">
                {isEn ? formatPrice(total.usd, "USD") : formatPrice(total.idr, "IDR")}
              </span>
            </div>

            <a
              href={generateWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-gray-950 font-bold text-[14px] py-3.5 px-6 rounded-xl transition-colors shadow-sm"
            >
              <span>{isEn ? "Consult this Scope via WhatsApp" : "Konsultasikan Scope Ini via WA"}</span>
              <span>→</span>
            </a>
            <p className="text-[11px] text-center text-gray-500 dark:text-gray-400 mt-2.5">
              {isEn
                ? "Zero commitment briefing · Direct talk with lead builder"
                : "Konsultasi santai · Langsung terhubung dengan builder teknis"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
