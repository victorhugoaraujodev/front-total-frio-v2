export default function Clientes() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6">Alguns de nossos clientes</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-200 h-32 rounded flex items-center justify-center">
          Cliente 1
        </div>
        <div className="bg-gray-200 h-32 rounded flex items-center justify-center">
          Cliente 2
        </div>
        <div className="bg-gray-200 h-32 rounded flex items-center justify-center">
          Cliente 3
        </div>
      </div>
    </section>
  );
}