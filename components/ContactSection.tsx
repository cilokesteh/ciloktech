export default function ContactSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-950 text-white px-6 relative overflow-hidden" id="kontak">
      {/* glow */}
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-cyan-500/20 to-transparent blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase bg-white/10 border border-white/10 px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> FAST RESPONSE — BALAS &lt;2 JAM
        </div>

        <h2 className="text-[34px] md:text-[52px] font-extrabold tracking-[-0.03em] leading-[0.9]">
          Ada ide? <br />
          <span className="text-gray-500">Gas kita eksekusi sekarang.</span>
        </h2>
        <p className="text-[15px] text-gray-400 mt-5 max-w-[520px] mx-auto leading-relaxed">
          Konsultasi gratis, gak ada hard-selling. Ceritain bisnis lo, gue kasih roadmap + estimasi real. Kalo cocok lanjut, kalo enggak santai.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-12 text-left max-w-4xl mx-auto">
          <a
            href="https://t.me/ciloktech?text=Halo%20CilokTech%2C%20mau%20konsultasi%20website"
            className="group p-6 rounded-[18px] bg-white/[0.06] backdrop-blur border border-white/10 hover:bg-white hover:text-gray-900 transition-all"
          >
            <div className="text-2xl mb-3">💬</div>
            <div className="font-bold text-[15px]">Telegram</div>
            <div className="text-[13px] mt-1 opacity-60 group-hover:opacity-70">@ciloktech — paling cepat</div>
            <div className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold">
              Chat sekarang <span className="group-hover:translate-x-1 transition">→</span>
            </div>
          </a>

          <a
            href="mailto:hi@ciloktech.my.id?subject=Konsultasi%20Website%20CilokTech"
            className="group p-6 rounded-[18px] bg-white/[0.06] backdrop-blur border border-white/10 hover:bg-white hover:text-gray-900 transition-all"
          >
            <div className="text-2xl mb-3">📧</div>
            <div className="font-bold text-[15px]">Email</div>
            <div className="text-[13px] mt-1 opacity-60 group-hover:opacity-70">hi@ciloktech.my.id</div>
            <div className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold">
              Kirim brief <span className="group-hover:translate-x-1 transition">→</span>
            </div>
          </a>

          <a
            href="https://github.com/cilokesteh"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-[18px] bg-white/[0.06] backdrop-blur border border-white/10 hover:bg-white hover:text-gray-900 transition-all"
          >
            <div className="text-2xl mb-3">💻</div>
            <div className="font-bold text-[15px]">GitHub</div>
            <div className="text-[13px] mt-1 opacity-60 group-hover:opacity-70">@cilokesteh — lihat code style</div>
            <div className="mt-4 inline-flex items-center gap-1 text-[12px] font-bold">
              Cek repo <span className="group-hover:translate-x-1 transition">→</span>
            </div>
          </a>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://t.me/ciloktech?text=Halo%20CilokTech%2C%20mau%20konsultasi%20gratis"
            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-cyan-300 transition text-sm shadow-[0_10px_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
          >
            🚀 Mulai Konsultasi Gratis
          </a>
          <a
            href="#harga"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition text-sm flex items-center justify-center gap-2"
          >
            Lihat harga dulu
          </a>
        </div>

        <div className="mt-8 text-[11.5px] text-gray-500">
          Rata-rata balas &lt;2 jam • No meeting muter-muter • Langsung to the point
        </div>
      </div>
    </section>
  );
}
