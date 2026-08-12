"use client";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export function BlogDetailClientLabels({ title }: { slug: string; title: string }) {
  const { locale } = useI18n();
  const isId = locale === "id";
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 text-[11px] text-gray-500 flex items-center gap-1.5">
        <Link href="/" className="hover:text-gray-900 dark:hover:text-white">Home</Link>
        <span>›</span>
        <Link href="/blog" className="hover:text-gray-900 dark:hover:text-white">Blog</Link>
        <span>›</span>
        <span className="text-gray-900 dark:text-white font-medium truncate max-w-[200px]">{title}</span>
      </nav>
      <Link href="/blog" className="inline-flex items-center gap-2 text-[12px] font-bold text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8">
        ← {isId ? "Kembali ke Blog" : "Back to Blog"}
      </Link>
    </>
  );
}

export function BlogDetailCTA({ title }: { title: string }) {
  const { locale } = useI18n();
  const isId = locale === "id";
  return (
    <div className="mt-16 rounded-[20px] bg-gray-900 dark:bg-white text-white dark:text-black p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
      <div>
        <div className="font-extrabold text-[18px] leading-tight">{isId ? "Mau website kayak yang di artikel ini?" : "Want a website like this article?"}</div>
        <div className="text-[13px] opacity-70 mt-1">{isId ? "One-man studio — konsultasi 15 menit gratis, langsung builder bukan sales." : "One-man studio — 15-min free consult, direct to builder not sales."}</div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 shrink-0">
        <a href={`https://t.me/ciloktechcsbot?text=Halo%20CilokTech%20One-Man%20Studio%2C%20abis%20baca%20${encodeURIComponent(title)}%20mau%20konsultasi`} className="px-5 py-3 bg-white dark:bg-black text-gray-900 dark:text-white rounded-full font-bold text-[13px] hover:bg-cyan-300 text-center transition">
          {isId ? "Chat dari artikel ini →" : "Chat from this article →"}
        </a>
      </div>
    </div>
  );
}
