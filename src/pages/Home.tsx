import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-black text-blue-800 mb-6">
        Total Frio Refrigeração
      </h1>

      <p className="text-gray-600 mb-10">
        Especialistas em instalação e manutenção de câmaras frias
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <Link to="/servicos" className="bg-blue-600 text-white px-6 py-3 rounded">
          Serviços
        </Link>
        <Link to="/historia" className="bg-gray-200 px-6 py-3 rounded">
          Nossa História
        </Link>
        <Link to="/contato" className="bg-green-500 text-white px-6 py-3 rounded">
          Contato
        </Link>
      </div>
    </section>
  );
}