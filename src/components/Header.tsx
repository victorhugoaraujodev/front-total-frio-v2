import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-800 text-white p-4">
      <nav className="container mx-auto flex gap-6 font-bold">
        <Link to="/">Início</Link>
        <Link to="/historia">História</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}