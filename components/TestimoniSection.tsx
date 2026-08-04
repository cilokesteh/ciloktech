const testimonials = [
  { name: "Mas Budi", role: "UMKM Batik Solo", text: "Website selesai dalam 3 hari, langsung bisa dipakai. Sekarang orderan lewat WA makin banyak karena pelanggan gampang nemu kami di Google.", rating: 5 },
  { name: "Ibu Rina", role: "Toko Online Fashion", text: "Awalnya cuma mau landing page, eh malah dikasih dashboard juga buat manage stok. Recommended banget!", rating: 5 },
  { name: "Pak Andi", role: "Startup Fintech", text: "Tim Cilok Tech paham banget soal teknis. API integration-nya rapi dan dokumentasinya lengkap. Lanjut collab lagi.", rating: 5 },
];

export default function TestimoniSection() {
  return (
    <section className="py-24 bg-gray-50 px-6" id="testimoni">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Apa Kata yang Udah Pakai</h2>
          <p className="text-gray-500">Real feedback dari klien yang puas.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition">
              <div className="flex mb-4">{[...Array(t.rating)].map((_, j) => <span key={j} className="text-yellow-400 text-lg">★</span>)}</div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-sm">{t.name.charAt(0)}</div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
