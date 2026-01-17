
import React from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook,
  X
} from 'lucide-react';
import { Category } from '../types';

interface HeaderProps {
  categories: Category[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (val: boolean) => void;
  cartCount: number;
  onSearch: (query: string) => void;
  onSelectCategory: (category: string | null) => void;
  onOpenCart: () => void;
  activeCategory: string | null;
}

const Header: React.FC<HeaderProps> = ({ 
  categories, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  cartCount,
  onSearch,
  onSelectCategory,
  onOpenCart,
  activeCategory
}) => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <>
      <div className="bg-gray-100 text-gray-600 text-xs py-2 border-b border-gray-200 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition">
              <Phone size={14} /> (62) 3591-1005
            </span>
            <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer transition">
              <MapPin size={14} /> Loja Física: Goiânia - GO
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600 transition">Fale Conosco</a>
            <a href="#" className="hover:text-blue-600 transition">Acompanhe seu Pedido</a>
            <div className="flex gap-2 border-l pl-4 border-gray-300">
              <Instagram size={14} className="cursor-pointer hover:text-pink-600 transition" />
              <Facebook size={14} className="cursor-pointer hover:text-blue-800 transition" />
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white py-4 sticky top-0 z-40 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-gray-600 hover:text-blue-600 transition"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
            <div 
              className="flex flex-col leading-none cursor-pointer" 
              onClick={() => onSelectCategory(null)}
            >
              <span className="text-3xl font-black text-blue-800 tracking-tighter italic font-sans">
                TOTAL FRIO
              </span>
              <span className="text-xs font-bold text-red-600 tracking-widest text-right uppercase">
                Refrigeração
              </span>
            </div>
          </div>

          <div className="flex-grow max-w-2xl order-3 md:order-2 w-full md:w-auto">
            <form onSubmit={handleSearchSubmit} className="relative flex group">
              <input 
                type="text" 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="O que você procura? (Ex: compressor, placa, gás...)"
                className="w-full border-2 border-blue-600 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm transition-all"
              />
              <button type="submit" className="bg-blue-600 text-white px-6 rounded-r-md hover:bg-blue-700 transition flex items-center justify-center">
                <Search size={20} />
              </button>
            </form>
          </div>

          <div className="flex items-center gap-6 order-2 md:order-3 ml-auto md:ml-0">
            <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-blue-600 group transition">
              <User size={28} className="text-gray-400 group-hover:text-blue-600 transition" />
              <div className="flex flex-col text-xs leading-tight">
                <span>Olá, Visitante</span>
                <span className="font-bold">Minha Conta</span>
              </div>
            </div>
            
            <button 
              onClick={onOpenCart}
              className="relative cursor-pointer hover:text-blue-600 group flex items-center gap-2 transition"
            >
              <div className="relative">
                <ShoppingCart size={28} className="text-gray-400 group-hover:text-blue-600 transition" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden md:flex flex-col text-xs leading-tight text-left">
                <span>Meu</span>
                <span className="font-bold">Carrinho</span>
              </div>
            </button>
          </div>
        </div>
      </header>

      <nav className="bg-blue-700 text-white hidden md:block shadow-md">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-6 text-sm font-bold py-1">
            <li 
              onClick={() => onSelectCategory(null)}
              className={`flex items-center gap-2 cursor-pointer px-4 py-4 rounded-t transition ${!activeCategory ? 'bg-blue-800 text-yellow-400' : 'hover:bg-blue-800'}`}
            >
              <Menu size={18} /> TODOS OS DEPARTAMENTOS
            </li>
            {categories.map((cat) => (
              <li 
                key={cat.id} 
                onClick={() => onSelectCategory(cat.slug)}
                className={`cursor-pointer px-3 py-4 transition border-b-2 border-transparent hover:text-yellow-200 ${activeCategory === cat.slug ? 'border-yellow-400 text-yellow-400' : 'hover:border-white'}`}
              >
                {cat.name.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-black bg-opacity-50 w-full absolute inset-0" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="bg-white w-4/5 max-w-sm h-full shadow-2xl relative z-10 flex flex-col transform transition-transform duration-300">
            <div className="bg-blue-700 p-4 flex justify-between items-center text-white">
              <span className="font-bold">Menu Principal</span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex-grow overflow-y-auto">
              <button 
                onClick={() => { onSelectCategory(null); setIsMobileMenuOpen(false); }}
                className={`w-full text-left block p-4 border-b font-medium uppercase text-sm ${!activeCategory ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}`}
              >
                Início / Todos
              </button>
              {categories.map((cat) => (
                <button 
                  key={cat.id} 
                  onClick={() => { onSelectCategory(cat.slug); setIsMobileMenuOpen(false); }}
                  className={`w-full text-left block p-4 border-b font-medium uppercase text-sm ${activeCategory === cat.slug ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}`}
                >
                  {cat.name}
                </button>
              ))}
              <div className="mt-auto p-4 bg-gray-50 border-t">
                <a href="#" className="flex items-center gap-2 text-blue-600 font-bold py-2">
                  <User size={20} /> Minha Conta
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
