"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { posts } from "@/app/blog/data";

type Item = {
  id: string;
  label: string;
  desc: string;
  href: string;
  icon: string;
  keywords: string;
  group: string;
};

const staticItems: Item[] = [
  { id: "home", label: "Beranda — One-Man Studio", desc: "Website yang ngasilin cuan", href: "/", icon: "🏠", keywords: "home beranda one-man studio ciloktech", group: "Pages" },
  { id: "layanan", label: "Layanan", desc: "Website, Web App, Custom Dev, Maintenance", href: "/#layanan", icon: "⚙️", keywords: "layanan services", group: "Pages" },
  { id: "portofolio", label: "Portofolio", desc: "Hasil kerja yang beneran dipake", href: "/#portofolio", icon: "💼", keywords: "portofolio portfolio", group: "Pages" },
  { id: "harga", label: "Paket Harga", desc: "Rp 900rb — Rp 2.5jt — Custom", href: "/#harga", icon: "💰", keywords: "harga pricing paket", group: "Pages" },
  { id: "breakdown", label: "Breakdown Harga — Anti Nawar", desc: "Kualitas Rp 7jt gue jual Rp 2.5jt", href: "/harga", icon: "📊", keywords: "breakdown harga jujur anti nawar one-man", group: "Pages" },
  { id: "kalkulator", label: "Kalkulator Rugi Website", desc: "Hitung rugi Rp/bulan karena lemot", href: "/kalkulator", icon: "🧮", keywords: "kalkulator rugi website lemot seo cta", group: "Tools" },
  { id: "blog", label: "Blog — 11 Artikel", desc: "Tips real lapangan biar gak ketipu murah", href: "/blog", icon: "📝", keywords: "blog artikel tips umkm seo nextjs", group: "Pages" },
  { id: "changelog", label: "Changelog — Building in Public", desc: "Week by week — one-man studio journey", href: "/changelog", icon: "🛠️", keywords: "changelog build in public week update", group: "Pages" },
  { id: "cta-telegram", label: "Chat Telegram — One-Man Studio", desc: "Balas <2 jam • Senin–Minggu • Available", href: "https://t.me/ciloktech", icon: "💬", keywords: "chat telegram konsultasi", group: "Actions" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const allItems = useMemo<Item[]>(() => {
    const blogItems: Item[] = posts.map((p) => ({
      id: `blog-${p.slug}`,
      label: p.title,
      desc: p.description.slice(0, 80) + "...",
      href: `/blog/${p.slug}`,
      icon: "📄",
      keywords: `${p.title} ${p.tags.join(" ")} ${p.description}`,
      group: "Blog",
    }));
    return [...staticItems, ...blogItems];
  }, []);

  const filtered = useMemo(() => {
    if (!q.trim()) return allItems;
    const lower = q.toLowerCase();
    return allItems
      .filter((it) => `${it.label} ${it.desc} ${it.keywords}`.toLowerCase().includes(lower))
      .slice(0, 12);
  }, [q, allItems]);

  const groups = useMemo(() => {
    const map = new Map<string, Item[]>();
    for (const it of filtered) {
      if (!map.has(it.group)) map.set(it.group, []);
      map.get(it.group)!.push(it);
    }
    return Array.from(map.entries());
  }, [filtered]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        document.getElementById("cmd-input")?.focus();
      }, 50);
    } else {
      setQ("");
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4">
      {/* backdrop */}
      <button
        aria-label="Close command palette"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* panel */}
      <div className="relative w-full max-w-[640px] rounded-[20px] bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 shadow-[0_24px_72px_rgba(0,0,0,0.35)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* input */}
        <div className="flex items-center gap-3 px-5 h-[56px] border-b border-gray-100 dark:border-white/5">
          <span className="text-gray-400 text-[16px]">⌘</span>
          <input
            id="cmd-input"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search pages, blog, kalkulator… (ESC to close)"
            className="flex-1 bg-transparent outline-none text-[15px] text-gray-900 dark:text-white placeholder:text-gray-400"
          />
          <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400 border border-gray-200 dark:border-white/10 px-2 py-1 rounded-full">ESC</span>
        </div>

        {/* results */}
        <div className="max-h-[380px] overflow-y-auto p-2">
          {groups.length === 0 ? (
            <div className="py-12 text-center text-[13px] text-gray-500">Gak ada hasil untuk “{q}” — coba kata lain.</div>
          ) : (
            groups.map(([group, items]) => (
              <div key={group} className="mb-4">
                <div className="px-3 py-2 text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400">{group}</div>
                <div className="space-y-1">
                  {items.map((it) => (
                    <Link
                      key={it.id}
                      href={it.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 border border-transparent hover:border-gray-200 dark:hover:border-white/10 transition group"
                    >
                      <span className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-[14px] shrink-0 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition">
                        {it.icon}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[13.5px] font-bold text-gray-900 dark:text-white truncate">{it.label}</div>
                        <div className="text-[11.5px] text-gray-500 dark:text-gray-400 truncate">{it.desc}</div>
                      </div>
                      <span className="text-[11px] text-gray-300 dark:text-white/20 group-hover:text-gray-600 dark:group-hover:text-white/40">↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* footer */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#fafafa] dark:bg-white/[0.03] border-t border-gray-100 dark:border-white/5 text-[11px] text-gray-500">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded text-[10px]">↑↓</kbd> navigasi</span>
            <span className="inline-flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded text-[10px]">↵</kbd> buka</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> One-man studio • ⌘K anywhere
          </div>
        </div>
      </div>
    </div>
  );
}
