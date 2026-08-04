export default function HeroSection() {
  return (
    <section className="relative bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-semibold">Solusi Web &amp; App Profesional</div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Transformasi Digital Bisnis Anda dengan <span className="text-cyan-600">Performa Tinggi</span>
          </h1>
          <p className="text-lg text-gray-600">Kami membangun sistem yang tidak hanya terlihat bagus, tapi fokus pada konversi, keamanan, dan skalabilitas. Solusi tepat untuk UMKM hingga Startup.</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://t.me/ciloktech" className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition text-center shadow-lg shadow-cyan-200">Konsultasi Gratis via Telegram</a>
            <a href="#portofolio" className="px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-lg hover:bg-gray-200 transition text-center">Lihat Portofolio</a>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 pt-6">
            <span className="font-medium text-gray-900">Trusted by:</span>
            <span>50+ UMKM &amp; Startup</span>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <div className="aspect-video bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center">
              <img src="/logo.jpg" alt="Cilok Tech" className="w-32 h-32 rounded-2xl object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
