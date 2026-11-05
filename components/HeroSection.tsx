"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

export default function HeroSection() {
  const { t } = useI18n();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleAudio = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };
  return (
    <section className="relative bg-[var(--background)] pt-24 pb-16 md:pt-36 md:pb-28 px-5 md:px-7 overflow-hidden transition-colors duration-200">
      {/* Aerodynamic Ambient Horizon Glow */}
      <div className="aero-horizon-glow" />

      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-14 items-center relative z-10">
        <div className="flex flex-col justify-between space-y-8 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Skewed Aero Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="aero-badge-skew">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_rgba(183,242,28,0.6)] animate-pulse" />
                <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-[var(--accent-text)]">
                  SLOT NOVEMBER 2026 TERBUKA
                </span>
              </div>
              <div className="aero-badge-skew border-gray-300 bg-white/60 dark:border-white/20 dark:bg-white/5">
                <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-gray-700 dark:text-gray-200">
                  ⚡ DIRECT SENIOR BUILDER
                </span>
              </div>
            </div>

            {/* Aerodynamic Dynamic Headline */}
            <h1 className="text-[44px] sm:text-[60px] lg:text-[76px] font-extrabold tracking-[-0.05em] leading-[0.98] text-gray-950 dark:text-white">
              Arsitektur Web <br />
              <span className="text-accent">
                Aerodinamis &amp; Presisi.
              </span>
            </h1>

            <p className="text-[16px] sm:text-[17.5px] leading-relaxed text-gray-700 dark:text-gray-300 font-medium max-w-[580px]">
              Bukan template kaku. Dirancang dengan sudut aerodinamis, kecepatan akses instan, dan stack modern Next.js 15 + React 19 untuk melipatgandakan konversi dan reputasi bisnis Anda.
            </p>
          </motion.div>

          {/* Neumorphic Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="https://t.me/ciloktechcsbot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blade-primary"
            >
              <span>{t.hero.ctaTelegram}</span>
              <span className="text-[15px]">↗</span>
            </a>

            <div className="flex gap-3">
              <a
                href="/demo"
                className="btn-blade-ghost"
              >
                🎮 Demo Live
              </a>
              <a
                href="#portofolio"
                className="btn-blade-ghost"
              >
                Karya →
              </a>
            </div>
          </div>
        </div>

        {/* Signal Board Showcase */}
        <div className="relative group w-full min-w-0 lg:pl-4">
          {/* Signal Board Chassis */}
          <div className="neu-console signal-panel border border-[var(--border)] text-left font-sans">
            
            {/* Top Signal Board Header Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-3.5 border-b border-[var(--border)]">
              <div className="flex items-center gap-2">
                <div className="neu-socket w-5 h-5 p-1"><span className="w-2 h-2 rounded-full bg-[#ff5f56]" /></div>
                <div className="neu-socket w-5 h-5 p-1"><span className="w-2 h-2 rounded-full bg-[#ffbd2e]" /></div>
                <div className="neu-socket w-5 h-5 p-1"><span className="w-2 h-2 rounded-full bg-[#27c93f]" /></div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-[var(--subtle)] border border-[var(--border)] text-[10.5px] font-mono text-[var(--accent-text)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span>ciloktech.id/signal-board</span>
              </div>
              <div className="font-mono text-[10px] text-[var(--accent-text)] font-bold tracking-widest">
                SIGNAL BOARD v5
              </div>
            </div>

            {/* Video Showcase Player in Sunken Well */}
            <div className="relative w-full aspect-video overflow-hidden neu-well border border-[var(--border)] group/video">
              <video
                ref={videoRef}
                src="/hero-showcase.mp4"
                poster="/hero-showcase.jpg"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              
              {/* Audio Toggle Button */}
              <button
                type="button"
                onClick={toggleAudio}
                aria-label={isMuted ? "Aktifkan audio video showcase" : "Matikan audio video showcase"}
                className="absolute top-3 right-3 z-20 flex items-center gap-2 px-3 py-1.5 bg-black/80 hover:bg-black backdrop-blur-md border border-[#b7f21c]/40 text-[#b7f21c] font-mono text-[10.5px] font-bold shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <span>{isMuted ? "🔇" : "🔊"}</span>
                <span className="tracking-wider">{isMuted ? "UNMUTE AUDIO" : "MUTE"}</span>
              </button>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  <span>STUDIO SHOWCASE · LIVE</span>
                </div>
                <div className="px-2 py-1 bg-[#b7f21c]/15 backdrop-blur-md border border-[#b7f21c]/40 text-[9.5px] font-mono font-bold text-[#b7f21c]">
                  FROM CONCEPT TO LAUNCH
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Strip */}
            <div className="mt-3.5 pt-3 border-t border-[var(--border)] grid grid-cols-3 gap-2.5 font-mono text-[10.5px]">
              <div className="bg-[var(--subtle)] border border-[var(--border)] p-2 min-w-0">
                <div className="text-[8.5px] text-gray-400 uppercase tracking-wider">CORE ENGINE</div>
                <div className="font-extrabold text-[var(--accent-text)] mt-0.5 break-words">NEXT.JS 15 + R19</div>
              </div>
              <div className="bg-[var(--subtle)] border border-[var(--border)] p-2 min-w-0">
                <div className="text-[8.5px] text-gray-400 uppercase tracking-wider">LIGHTHOUSE</div>
                <div className="font-extrabold text-emerald-400 mt-0.5 break-words">100 / 100 PERF</div>
              </div>
              <div className="bg-[var(--subtle)] border border-[var(--border)] p-2 min-w-0">
                <div className="text-[8.5px] text-gray-400 uppercase tracking-wider">LATENCY</div>
                <div className="font-extrabold text-white mt-0.5 break-words">&lt; 18MS CLOUDFLARE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
