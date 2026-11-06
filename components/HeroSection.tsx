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
    <section className="relative bg-[var(--background)] pt-28 md:pt-40 pb-14 md:pb-20 px-5 md:px-7 overflow-hidden transition-colors duration-200">
      {/* Soft pop glow */}
      <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full bg-[var(--accent)]/15 blur-[110px] pointer-events-none" />
      <div aria-hidden className="absolute top-40 -left-24 w-[300px] h-[300px] rounded-full bg-[var(--pop-pink)]/15 blur-[90px] pointer-events-none" />
      <div aria-hidden className="absolute top-64 -right-24 w-[300px] h-[300px] rounded-full bg-[var(--pop-violet)]/15 blur-[90px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          {/* Sticker row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="pop-sticker">
              <span className="w-2 h-2 rounded-full bg-[var(--pop-ink)] animate-pulse" />
              {t.hero.slotBadge}
            </span>
            <span className="pop-sticker pop-sticker-yellow">
              ⚡ DIRECT SENIOR BUILDER
            </span>
          </div>

          {/* Mega headline — stacked, mixed treatments */}
          <h1 className="mt-8 font-extrabold tracking-[-0.04em] leading-[0.92] text-[54px] sm:text-[84px] lg:text-[118px] text-gray-950 dark:text-white">
            {t.hero.headline1}
            <br />
            <span className="text-outline">{t.hero.headline2}</span>
            <br />
            <span className="text-[var(--accent-text)]">{t.hero.headline3}</span>
          </h1>

          <p className="mt-7 text-[16px] sm:text-[18px] leading-relaxed text-gray-700 dark:text-gray-300 font-medium max-w-[620px]">
            {t.hero.desc}
          </p>

          {/* Pill CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://t.me/ciloktechcsbot"
              target="_blank"
              rel="noopener noreferrer"
              className="pop-btn pop-btn-primary"
            >
              <span>{t.hero.ctaTelegram}</span>
              <span>↗</span>
            </a>
            <a href="/demo" className="pop-btn">
              🎮 {t.hero.ctaDemo}
            </a>
            <a href="#portofolio" className="pop-btn">
              {t.hero.ctaWork}
            </a>
          </div>
        </motion.div>

        {/* Showcase — wide pop card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 md:mt-16 max-w-[1080px] mx-auto"
        >
          {/* Spinning badge */}
          <div aria-hidden className="absolute -top-9 -right-3 sm:-right-8 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[var(--card)] border-2 border-[var(--border-strong)] shadow-[4px_4px_0_var(--border-strong)]">
            <div className="pop-spin w-full h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path id="pop-circle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                </defs>
                <text fill="var(--foreground)" style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "2.2px", fontFamily: "monospace" }}>
                  <textPath href="#pop-circle">★ CILOKTECH • ONE-MAN STUDIO •</textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
          </div>

          <div className="pop-card overflow-hidden text-left">
            {/* Header strip */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3.5 border-b-2 border-[var(--border-strong)]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black/20" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black/20" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-black/20" />
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-[var(--accent-text)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span>ciloktech.id/showcase</span>
              </div>
              <span className="pop-sticker">SHOWCASE LIVE</span>
            </div>

            {/* Video */}
            <div className="relative w-full aspect-video overflow-hidden group/video">
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
                aria-label={isMuted ? t.hero.audioUnmute : t.hero.audioMute}
                className="absolute top-3 right-3 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 hover:bg-black backdrop-blur-md border-2 border-white/30 text-white font-mono text-[10.5px] font-bold shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <span>{isMuted ? "🔇" : "🔊"}</span>
                <span className="tracking-wider">{isMuted ? "UNMUTE AUDIO" : "MUTE"}</span>
              </button>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  <span>STUDIO SHOWCASE · LIVE</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-[var(--accent)] border-2 border-[var(--pop-ink)] text-[9.5px] font-mono font-bold text-[var(--pop-ink)]">
                  FROM CONCEPT TO LAUNCH
                </div>
              </div>
            </div>

            {/* Telemetry chips */}
            <div className="grid grid-cols-3 gap-3 p-4 md:p-5 border-t-2 border-[var(--border-strong)] font-mono text-[10.5px]">
              <div className="rounded-2xl border-2 border-[var(--border-strong)] bg-[var(--subtle)] p-3 min-w-0">
                <div className="text-[8.5px] text-gray-400 uppercase tracking-wider">CORE ENGINE</div>
                <div className="font-extrabold text-[var(--accent-text)] mt-0.5 break-words">NEXT.JS 15 + R19</div>
              </div>
              <div className="rounded-2xl border-2 border-[var(--border-strong)] bg-[var(--subtle)] p-3 min-w-0">
                <div className="text-[8.5px] text-gray-400 uppercase tracking-wider">LIGHTHOUSE</div>
                <div className="font-extrabold text-emerald-400 mt-0.5 break-words">100 / 100 PERF</div>
              </div>
              <div className="rounded-2xl border-2 border-[var(--border-strong)] bg-[var(--subtle)] p-3 min-w-0">
                <div className="text-[8.5px] text-gray-400 uppercase tracking-wider">LATENCY</div>
                <div className="font-extrabold text-[var(--foreground)] mt-0.5 break-words">&lt; 18MS CLOUDFLARE</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
