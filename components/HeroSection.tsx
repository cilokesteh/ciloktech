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
        <div className="flex flex-col justify-between space-y-8">
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
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8] animate-pulse" />
                <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-cyan-300">
                  SLOT Q4 / OKTOBER 2026 TERBUKA
                </span>
              </div>
              <div className="aero-badge-skew border-white/20 bg-white/5">
                <span className="font-mono text-[11px] font-extrabold uppercase tracking-wider text-gray-200">
                  ⚡ DIRECT SENIOR BUILDER
                </span>
              </div>
            </div>

            {/* Aerodynamic Dynamic Headline */}
            <h1 className="text-[42px] sm:text-[56px] lg:text-[66px] font-extrabold tracking-[-0.04em] leading-[1.05] text-gray-950 dark:text-white">
              Arsitektur Web <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
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
              className="neu-btn neu-btn-primary font-mono text-[12px] py-3.5 px-6 rounded-xl"
            >
              <span>{t.hero.ctaTelegram}</span>
              <span className="text-[15px]">↗</span>
            </a>

            <div className="flex gap-3">
              <a
                href="/demo"
                className="neu-btn font-mono text-[12px] py-3.5 px-5 rounded-xl"
              >
                🎮 Demo Live
              </a>
              <a
                href="#portofolio"
                className="neu-btn font-mono text-[12px] py-3.5 px-5 rounded-xl"
              >
                Karya →
              </a>
            </div>
          </div>
        </div>

        {/* 3D Neumorphic Cockpit Showcase */}
        <div className="relative group w-full perspective-[1200px] lg:pl-4">
          <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-sky-400/20 rounded-[36px] blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 pointer-events-none" />

          {/* Neumorphic Console Chassis */}
          <div className="neu-console border border-[var(--neu-border-bevel)] text-left font-sans transition-transform duration-700 lg:group-hover:rotate-x-2 lg:group-hover:-rotate-y-2 lg:[transform:rotateY(-4deg)_rotateX(2deg)]">
            
            {/* Top Cockpit Header Ribbon */}
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-cyan-500/20">
              <div className="flex items-center gap-2">
                <div className="neu-socket w-5 h-5 rounded-md p-1"><span className="w-2 h-2 rounded-full bg-[#ff5f56]" /></div>
                <div className="neu-socket w-5 h-5 rounded-md p-1"><span className="w-2 h-2 rounded-full bg-[#ffbd2e]" /></div>
                <div className="neu-socket w-5 h-5 rounded-md p-1"><span className="w-2 h-2 rounded-full bg-[#27c93f]" /></div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-black/50 border border-cyan-500/25 text-[10.5px] font-mono text-cyan-300 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>ciloktech.id/neu-cockpit</span>
              </div>
              <div className="font-mono text-[10px] text-cyan-400 font-bold tracking-widest">
                NEU COCKPIT v4
              </div>
            </div>

            {/* Video Showcase Player in Sunken Well */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden neu-well border border-black/50 shadow-inner group/video">
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
                className="absolute top-3 right-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-sm bg-black/80 hover:bg-black backdrop-blur-md border border-cyan-500/40 text-cyan-300 font-mono text-[10.5px] font-bold shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <span>{isMuted ? "🔇" : "🔊"}</span>
                <span className="tracking-wider">{isMuted ? "UNMUTE AUDIO" : "MUTE"}</span>
              </button>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  <span>STUDIO SHOWCASE · LIVE</span>
                </div>
                <div className="px-2 py-1 rounded bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 text-[9.5px] font-mono font-bold text-cyan-300">
                  FROM CONCEPT TO LAUNCH
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Strip */}
            <div className="mt-3.5 pt-3 border-t border-cyan-500/20 grid grid-cols-3 gap-2.5 font-mono text-[10.5px]">
              <div className="bg-black/50 border border-white/10 p-2">
                <div className="text-[8.5px] text-gray-400 uppercase tracking-wider">CORE ENGINE</div>
                <div className="font-extrabold text-cyan-400 mt-0.5">NEXT.JS 15 + R19</div>
              </div>
              <div className="bg-black/50 border border-white/10 p-2">
                <div className="text-[8.5px] text-gray-400 uppercase tracking-wider">LIGHTHOUSE</div>
                <div className="font-extrabold text-emerald-400 mt-0.5">100 / 100 PERF</div>
              </div>
              <div className="bg-black/50 border border-white/10 p-2">
                <div className="text-[8.5px] text-gray-400 uppercase tracking-wider">LATENCY</div>
                <div className="font-extrabold text-white mt-0.5">&lt; 18MS CLOUDFLARE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
