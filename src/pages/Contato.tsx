export default function Contato() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>

      <p className="mb-6 text-gray-600">
        Fale conosco através dos nossos canais:
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          className="bg-green-500 text-white px-6 py-3 rounded"
        >
          WhatsApp
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          className="bg-pink-600 text-white px-6 py-3 rounded"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}