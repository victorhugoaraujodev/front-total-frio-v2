import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-black text-blue-800 mb-6">
        Total Frio Refrigeração
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Especialistas em refrigeração, manutenção e instalação de equipamentos.
      </p>

      <Link to="/servicos" className="bg-blue-600 text-white px-8 py-3 rounded font-bold">
        Conheça nossos serviços
      </Link>
    </section>
  );
}