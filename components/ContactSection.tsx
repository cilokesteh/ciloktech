export default function ContactSection() {
  return (
    <section className="py-24 bg-gray-900 text-white px-6" id="kontak">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Hubungi Cilok Tech</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">Punya project? Mau tanya-tanya dulu? Gas langsung, gratis kok konsultasinya.</p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a href="https://t.me/ciloktech" className="p-8 rounded-2xl bg-gray-800 hover:bg-cyan-600 transition border border-gray-700 hover:border-cyan-500 group">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-white">Telegram</h3>
            <p className="text-sm text-gray-400 group-hover:text-cyan-100">@ciloktech</p>
          </a>
          <a href="mailto:hi@ciloktech.my.id" className="p-8 rounded-2xl bg-gray-800 hover:bg-cyan-600 transition border border-gray-700 hover:border-cyan-500 group">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-white">Email</h3>
            <p className="text-sm text-gray-400 group-hover:text-cyan-100">hi@ciloktech.my.id</p>
          </a>
          <a href="https://github.com/cilokesteh" target="_blank" rel="noopener noreferrer" className="p-8 rounded-2xl bg-gray-800 hover:bg-cyan-600 transition border border-gray-700 hover:border-cyan-500 group">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-white">GitHub</h3>
            <p className="text-sm text-gray-400 group-hover:text-cyan-100">@cilokesteh</p>
          </a>
        </div>
        <a href="https://t.me/ciloktech" className="inline-block px-12 py-5 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-500 transition shadow-lg shadow-cyan-900 text-lg">🚀 Mulai Sekarang</a>
      </div>
    </section>
  );
}
