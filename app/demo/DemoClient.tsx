"use client";

import Link from "next/link";
import DemoSandbox from "@/components/DemoSandbox";
import { useI18n } from "@/lib/i18n/context";

export default function DemoClient() {
  const { locale } = useI18n();
  const isEn = locale === "en";

  return (
    <main id="main-content" className="pt-20 pb-20 bg-white dark:bg-[#0a0a0c] transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Hero Demo */}
        <div className="py-10 md:py-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-amber-900/10 dark:bg-amber-400/10 text-amber-800 dark:text-amber-300 px-3.5 py-1.5 rounded-full mb-4">
            {isEn ? "Live Product Sandbox" : "Sandbox Produk Interaktif"}
          </div>
          <h1 className="text-[32px] md:text-[48px] font-black tracking-tight leading-[1.1] text-gray-900 dark:text-white">
            {isEn
              ? "Experience the Engine Before You Order"
              : "Uji Coba Langsung Sistemnya di Sini"}
          </h1>
          <p className="text-[15px] md:text-[16px] text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            {isEn
              ? "Interact with our core software engines—POS Enterprise and JasaFlow Booking—right in your browser with zero setup or credentials required."
              : "Coba langsung alur kasir, cetak struk, dan sistem antrean booking. Semua berjalan instan di browser Anda tanpa perlu install aplikasi."}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-[12px] text-gray-500 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Zero Account Required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Instant Thermal Preview
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span> Realtime State Sync
            </span>
          </div>
        </div>

        {/* The Sandbox Engine Component */}
        <div className="mt-4">
          <DemoSandbox />
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 p-8 rounded-3xl bg-gray-50 dark:bg-[#121214] border border-gray-200 dark:border-white/10 text-center max-w-3xl mx-auto">
          <h2 className="text-[20px] font-black text-gray-900 dark:text-white">
            {isEn ? "Ready to deploy this system for your outlet?" : "Siap menerapkan sistem ini untuk bisnis Anda?"}
          </h2>
          <p className="text-[13px] text-gray-600 dark:text-gray-400 mt-2">
            {isEn
              ? "Get the full setup deployed to your own Cloudflare/Firebase infrastructure with perpetual ownership."
              : "Dapatkan paket lengkap terpasang di domain & server Anda sendiri tanpa biaya langganan bulanan."}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/harga"
              className="bg-amber-800 hover:bg-amber-900 dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-gray-950 font-bold text-[13px] px-6 py-2.5 rounded-xl transition"
            >
              Lihat Kalkulator Harga & Scope →
            </Link>
            <a
              href="https://wa.me/628870540908?text=Halo%20CilokTech,%20saya%20sudah%20coba%20demo%20POS/JasaFlow%20dan%20mau%20konsultasi%20pemasangan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-gray-300 text-gray-900 dark:text-white font-bold text-[13px] px-6 py-2.5 rounded-xl transition"
            >
              Chat WhatsApp Langsung
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
