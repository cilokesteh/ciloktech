export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="/logo.jpg" alt="Cilok Tech" className="h-6 w-6 rounded-full object-cover" />
          <span className="text-white font-bold text-lg">Cilok Tech</span>
          <span className="text-xs bg-cyan-600 text-white px-2 py-0.5 rounded-full">Web &amp; App</span>
        </div>
        <nav className="flex gap-6 text-sm">
          <a href="#layanan" className="hover:text-white transition">Layanan</a>
          <a href="#portofolio" className="hover:text-white transition">Portofolio</a>
          <a href="#testimoni" className="hover:text-white transition">Testimoni</a>
          <a href="#kontak" className="hover:text-white transition">Kontak</a>
        </nav>
        <div className="text-xs text-gray-600">&copy; 2026 Cilok Tech.</div>
      </div>
    </footer>
  );
}
