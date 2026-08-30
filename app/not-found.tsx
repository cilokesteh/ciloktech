import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan — Cilok Tech",
  description:
    "Halaman yang Anda cari tidak ada atau sudah dipindahkan. Kembali ke beranda atau lihat paket harga CilokTech.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#08080b] text-gray-900 dark:text-white px-6 text-center">
      <div className="max-w-md">
        <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-gray-400 mb-4">
          404 · Halaman Tidak Ditemukan
        </div>
        <h1 className="text-[36px] md:text-[48px] font-extrabold tracking-[-0.03em] leading-[0.95]">
          Halaman ini tidak ada.
        </h1>
        <p className="text-[15px] text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
          Mungkin sudah dipindahkan, atau tautannya keliru. Kami bantu arahkan kembali.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="uiverse-button px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full text-sm hover:bg-black dark:hover:bg-cyan-300 transition"
          >
            ← Kembali ke Beranda
          </Link>
          <Link
            href="/blog"
            className="uiverse-button px-6 py-3 bg-transparent border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded-full text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition"
          >
            Baca Blog
          </Link>
        </div>
        <div className="mt-10 text-[12.5px] text-gray-500 dark:text-gray-500">
          Butuh bantuan cepat?{" "}
          <a
            href="https://t.me/ciloktechcsbot"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-900 dark:text-white underline underline-offset-4"
          >
            Chat via Telegram →
          </a>
        </div>
      </div>
    </main>
  );
}
