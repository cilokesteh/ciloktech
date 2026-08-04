"use client";
import { useState } from "react";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#portofolio", label: "Portofolio" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Cilok Tech" className="h-8 w-8 rounded-full object-cover" />
          <span className="font-extrabold text-xl text-gray-900">Cilok</span>
          <span className="font-extrabold text-xl text-cyan-600">Tech</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-cyan-600 transition">{l.label}</a>
          ))}
          <a href="https://t.me/ciloktech" className="px-5 py-2 bg-cyan-600 text-white text-sm font-bold rounded-lg hover:bg-cyan-700 transition">Chat Telegram</a>
        </div>
        <button className="md:hidden text-gray-900 text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-sm font-medium text-gray-700 hover:text-cyan-600" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="https://t.me/ciloktech" className="block text-center px-5 py-3 bg-cyan-600 text-white text-sm font-bold rounded-lg">Chat Telegram</a>
        </div>
      )}
    </nav>
  );
}
