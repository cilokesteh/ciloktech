"use client";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://t.me/ciloktech?text=Halo%20CilokTech%2C%20mau%20tanya%20jasa%20website"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-[60] group flex items-center gap-2 bg-gray-900 text-white rounded-full shadow-[0_12px_32px_rgba(0,0,0,0.22)] hover:bg-black transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      title="Chat Telegram"
    >
      <span className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center text-[20px]">💬</span>
      <span className="pr-5 text-[13px] font-bold hidden sm:inline">Chat kami</span>
    </a>
  );
}
