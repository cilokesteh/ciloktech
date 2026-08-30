"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log ke console (production akan pickup via Vercel runtime logs)
    // Jangan log token / PII — hanya digest + message
    console.error("[CilokTech] route error", {
      digest: error.digest,
      message: error.message,
      ts: new Date().toISOString(),
    });
  }, [error]);

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center bg-white dark:bg-[#08080b] text-gray-900 dark:text-white px-6 text-center">
      <div className="max-w-md">
        <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-amber-600 dark:text-amber-400 mb-4">
          Terjadi Kesalahan
        </div>
        <h1 className="text-[32px] md:text-[40px] font-extrabold tracking-[-0.03em] leading-[0.95]">
          Halaman ini gagal dimuat.
        </h1>
        <p className="text-[15px] text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
          Tim kami sudah mendapat notifikasi. Coba muat ulang, atau kembali ke beranda.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="uiverse-button px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full text-sm hover:bg-black dark:hover:bg-amber-500 transition"
          >
            Muat Ulang
          </button>
          <Link
            href="/"
            className="uiverse-button px-6 py-3 bg-transparent border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded-full text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
        {error.digest && (
          <div className="mt-8 text-[10.5px] font-mono text-gray-400 dark:text-gray-600">
            ref: {error.digest}
          </div>
        )}
      </div>
    </main>
  );
}
