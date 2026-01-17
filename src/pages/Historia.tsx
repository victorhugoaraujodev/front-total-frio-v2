export default function Historia() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6">Nossa História</h2>

      <p className="mb-6 text-gray-600">
        Há <strong>10 anos</strong> atuando no mercado de refrigeração,
        construindo confiança e qualidade.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gray-200 h-40 rounded flex items-center justify-center">
          Foto antiga 1
        </div>
        <div className="bg-gray-200 h-40 rounded flex items-center justify-center">
          Foto antiga 2
        </div>
        <div className="bg-gray-200 h-40 rounded flex items-center justify-center">
          Foto antiga 3
        </div>
      </div>
    </section>
  );
}