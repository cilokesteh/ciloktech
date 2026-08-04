"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#harga", label: "Harga" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          : "bg-white/60 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src="/logo.jpg"
            alt="Cilok Tech"
            className="h-8 w-8 rounded-full object-cover ring-1 ring-gray-200 group-hover:ring-cyan-300 transition"
          />
          <span className="font-extrabold text-[19px] tracking-tight">
            <span className="text-gray-900">Cilok</span>
            <span className="text-cyan-600">Tech</span>
          </span>
          <span className="hidden sm:inline-flex ml-1 text-[10px] font-bold tracking-widest uppercase bg-gray-900 text-white px-2 py-0.5 rounded-full">
            WEB.ID
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] font-medium text-gray-600 hover:text-gray-900 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-600 after:transition-all hover:after:w-full transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://t.me/ciloktech"
            className="ml-1 px-5 py-2.5 bg-gray-900 text-white text-[13.5px] font-bold rounded-full hover:bg-black hover:shadow-lg hover:shadow-gray-900/20 transition-all active:scale-[0.98]"
          >
            Konsultasi Gratis
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 active:scale-95 transition"
          onClick={() => setOpen(!open)}
        >
          <span className="text-[18px] leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3 text-[15px] font-medium text-gray-700 hover:text-cyan-600 border-b border-gray-50 last:border-0"
            >
              {l.label}
              <span className="text-gray-300">›</span>
            </a>
          ))}
          <a
            href="https://t.me/ciloktech"
            className="block mt-4 text-center px-5 py-3.5 bg-gray-900 text-white text-sm font-bold rounded-xl"
          >
            💬 Chat di Telegram
          </a>
        </div>
      )}
    </nav>
  );
}
