"use client";

export default function Footer() {
  const handleHomeClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050507] text-gray-400 py-12 px-6 border-t border-white/[0.06] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="space-y-4 max-w-[340px]">
            <button
              onClick={handleHomeClick}
              className="flex items-center gap-2.5 group cursor-pointer"
              aria-label="Kembali ke atas"
            >
              <img src="/logo.jpg" alt="Cilok Tech" className="h-7 w-7 rounded-full object-cover group-hover:ring-2 group-hover:ring-white/20 transition" />
              <span className="text-white font-extrabold text-[16px] tracking-tight">Cilok Tech</span>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-white text-black px-2 py-0.5 rounded-full">
                WEB.ID
              </span>
            </button>
            <p className="text-[13px] leading-relaxed">
              One-man studio — jasa pembuatan website & web app profesional. Cepat, aman, SEO-ready, fokus konversi. Tanpa kantor, tanpa PM, langsung ke builder. Dari UMKM sampai startup.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> One-man studio • Senior full-stack • Indonesia
            </div>
            <div className="flex gap-2 pt-1">
              <a href="https://t.me/ciloktech" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center text-sm transition">✈</a>
              <a href="https://github.com/cilokesteh" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center text-sm transition">G</a>
              <a href="mailto:hi@ciloktech.my.id" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center text-sm transition">✉</a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <div className="text-white font-bold mb-4 text-[13px] tracking-wide uppercase">Navigasi</div>
              <nav className="space-y-3 text-[13px]">
                <button onClick={handleHomeClick} className="block hover:text-white transition text-left">Beranda</button>
                <a href="#layanan" className="block hover:text-white transition">Layanan</a>
                <a href="#portofolio" className="block hover:text-white transition">Portofolio</a>
                <a href="#harga" className="block hover:text-white transition">Harga</a>
                <a href="#testimoni" className="block hover:text-white transition">Testimoni</a>
              </nav>
            </div>
            <div>
              <div className="text-white font-bold mb-4 text-[13px] tracking-wide uppercase">Kontak</div>
              <div className="space-y-3 text-[13px]">
                <a href="https://t.me/ciloktech" className="block hover:text-white transition">Telegram @ciloktech</a>
                <a href="mailto:hi@ciloktech.my.id" className="block hover:text-white transition">hi@ciloktech.my.id</a>
                <div className="text-gray-600 text-xs mt-4 leading-relaxed">Balas &lt;2 jam<br/>Senin–Minggu<br/>One-man ops</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col gap-2">
          <div className="text-center text-[12.5px] text-gray-500 tracking-wide">
            © 2026 Cilok Tech — ciloktech.web.id • One-man studio
          </div>
          <div className="flex items-center justify-center gap-4 text-[11.5px] text-gray-600">
            <button onClick={handleHomeClick} className="hover:text-white transition flex items-center gap-1">↑ Kembali ke atas</button>
            <span>•</span>
            <span>⚡ &lt;1s LCP</span>
            <span>•</span>
            <span>👨‍💻 One-man • Senior full-stack</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
