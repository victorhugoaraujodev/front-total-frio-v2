import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  Phone, 
  MapPin, 
  ChevronDown, 
  Facebook, 
  Instagram,
  Truck,
  CreditCard,
  ShieldCheck,
  X
} from 'lucide-react';

const TotalFrioEcommerce = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Categorias baseadas na estrutura do site
  const categories = [
    "Ar Condicionado",
    "Refrigeração",
    "Lavadoras",
    "Ferramentas",
    "Eletroportáteis",
    "Promoções"
  ];

  // Produtos simulados para a vitrine
  const [products, setProducts] = useState<any[]>([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/api/services/')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const products = products.length ? products : [

    {
      id: 1,
      name: "Compressor Embraco 1/5 HP R134a 110V EM2U 60HLP",
      oldPrice: 450.00,
      price: 389.90,
      installments: "3x de R$ 129,96 sem juros",
      image: "bg-gray-200", // Placeholder
      tag: "OFERTA"
    },
    {
      id: 2,
      name: "Placa Eletrônica Lavadora Brastemp Ative 11kg BWL11",
      oldPrice: 180.00,
      price: 149.90,
      installments: "2x de R$ 74,95 sem juros",
      image: "bg-gray-200",
      tag: null
    },
    {
      id: 3,
      name: "Gás Refrigerante R410a Lata 650g Dugold",
      oldPrice: 89.90,
      price: 65.00,
      installments: "1x de R$ 65,00",
      image: "bg-gray-200",
      tag: "MAIS VENDIDO"
    },
    {
      id: 4,
      name: "Kit Serra Copo para Ar Condicionado 6 Peças",
      oldPrice: 220.00,
      price: 189.90,
      installments: "3x de R$ 63,30 sem juros",
      image: "bg-gray-200",
      tag: null
    }
  ];

  return (
    <div className="font-sans text-gray-700 bg-gray-50 flex flex-col min-h-screen">
      
      {/* --- TOPO INSTITUCIONAL (Barra fina) --- */}
      <div className="bg-gray-100 text-gray-600 text-xs py-2 border-b border-gray-200 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
              <Phone size={14} /> (62) 3591-1005
            </span>
            <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
              <MapPin size={14} /> Loja Física: Goiânia - GO
            </span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600">Fale Conosco</a>
            <a href="#" className="hover:text-blue-600">Acompanhe seu Pedido</a>
            <div className="flex gap-2 border-l pl-4 border-gray-300">
              <Instagram size={14} className="cursor-pointer hover:text-pink-600" />
              <Facebook size={14} className="cursor-pointer hover:text-blue-800" />
            </div>
          </div>
        </div>
      </div>

      {/* --- CABEÇALHO PRINCIPAL (Busca e Logo) --- */}
      <header className="bg-white py-4 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-4">
          
          {/* Logo / Menu Mobile */}
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
            
            {/* Simulação do Logo Visual */}
            <div className="flex flex-col leading-none cursor-pointer">
              <span className="text-3xl font-black text-blue-800 tracking-tighter italic" style={{fontFamily: 'Arial, sans-serif'}}>
                TOTAL FRIO
              </span>
              <span className="text-xs font-bold text-red-600 tracking-widest text-right">
                REFRIGERAÇÃO
              </span>
            </div>
          </div>

          {/* Barra de Busca (Elemento Central de E-commerce) */}
          <div className="flex-grow max-w-2xl order-3 md:order-2 w-full md:w-auto">
            <div className="relative flex">
              <input 
                type="text" 
                placeholder="O que você procura? (Ex: compressor, placa, gás...)"
                className="w-full border-2 border-blue-600 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
              />
              <button className="bg-blue-600 text-white px-6 rounded-r-md hover:bg-blue-700 transition flex items-center justify-center">
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Ícones de Ação (Conta e Carrinho) */}
          <div className="flex items-center gap-6 order-2 md:order-3 ml-auto md:ml-0">
            <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-blue-600 group">
              <User size={28} className="text-gray-400 group-hover:text-blue-600" />
              <div className="flex flex-col text-xs leading-tight">
                <span>Olá, Visitante</span>
                <span className="font-bold">Minha Conta</span>
              </div>
            </div>
            
            <div className="relative cursor-pointer hover:text-blue-600 group flex items-center gap-2">
              <div className="relative">
                <ShoppingCart size={28} className="text-gray-400 group-hover:text-blue-600" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  0
                </span>
              </div>
              <div className="hidden md:flex flex-col text-xs leading-tight">
                <span>Meu</span>
                <span className="font-bold">Carrinho</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- MENU DE NAVEGAÇÃO (Categorias) --- */}
      <nav className="bg-blue-700 text-white hidden md:block shadow-md">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-8 text-sm font-bold py-3">
            <li className="flex items-center gap-2 cursor-pointer bg-blue-800 px-4 py-2 rounded -ml-4">
              <Menu size={18} /> TODOS OS DEPARTAMENTOS
            </li>
            {categories.map((cat, idx) => (
              <li key={idx} className="cursor-pointer hover:text-blue-200 transition border-b-2 border-transparent hover:border-white pb-0.5">
                {cat.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* --- MENU MOBILE (Drawer) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-black bg-opacity-50 w-full absolute inset-0" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="bg-white w-4/5 max-w-sm h-full shadow-2xl relative z-10 flex flex-col">
            <div className="bg-blue-700 p-4 flex justify-between items-center text-white">
              <span className="font-bold">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex-grow overflow-y-auto">
              {categories.map((cat, idx) => (
                <a key={idx} href="#" className="block p-4 border-b text-gray-700 font-medium hover:bg-gray-50">
                  {cat}
                </a>
              ))}
              <a href="#" className="block p-4 border-b text-blue-600 font-bold bg-blue-50">
                Minha Conta
              </a>
            </div>
          </div>
        </div>
      )}

      {/* --- BANNERS --- */}
      <section className="container mx-auto px-4 py-6 grid md:grid-cols-4 gap-4">
        {/* Banner Principal (Slide) */}
        <div className="md:col-span-3 bg-blue-100 rounded-lg h-64 md:h-96 relative overflow-hidden flex items-center justify-center group cursor-pointer">
           {/* Placeholder Visual do Banner */}
           <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-500 opacity-90"></div>
           <div className="relative z-10 text-center text-white p-6">
             <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">PEÇAS ORIGINAIS</h2>
             <p className="text-lg md:text-2xl mb-6 font-light">Para Refrigeração e Máquinas de Lavar</p>
             <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded font-bold hover:bg-yellow-300 transition shadow-lg">
               CONFIRA AS OFERTAS
             </button>
           </div>
        </div>

        {/* Banners Laterais Menores */}
        <div className="hidden md:flex flex-col gap-4 h-96">
          <div className="flex-1 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition">
            <div className="absolute inset-0 bg-gray-800 opacity-40"></div>
            <span className="relative z-10 text-white font-bold text-xl text-center px-4">FERRAMENTAS <br/> EM 6X SEM JUROS</span>
          </div>
          <div className="flex-1 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition">
             <div className="absolute inset-0 bg-blue-800 opacity-60"></div>
             <span className="relative z-10 text-white font-bold text-xl text-center px-4">ENTREGA RÁPIDA <br/> EM GOIÂNIA</span>
          </div>
        </div>
      </section>

      {/* --- RÉGUA DE VANTAGENS --- */}
      <section className="bg-white border-y border-gray-100 py-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <CreditCard size={32} className="text-blue-600" />
            <div>
              <h4 className="font-bold text-gray-800 text-sm">Parcele suas compras</h4>
              <p className="text-xs text-gray-500">Em até 6x sem juros no cartão</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <Truck size={32} className="text-blue-600" />
            <div>
              <h4 className="font-bold text-gray-800 text-sm">Entrega em todo Brasil</h4>
              <p className="text-xs text-gray-500">Consulte condições de frete</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <ShieldCheck size={32} className="text-blue-600" />
            <div>
              <h4 className="font-bold text-gray-800 text-sm">Site 100% Seguro</h4>
              <p className="text-xs text-gray-500">Compre com segurança total</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VITRINE DE PRODUTOS --- */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-2">
          <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2 -mb-3">
            Destaques da Loja
          </h2>
          <a href="#" className="text-sm text-blue-600 font-semibold hover:underline">Ver todos</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-xl transition duration-300 group flex flex-col relative">
              
              {/* Tag de Oferta */}
              {product.tag && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded">
                  {product.tag}
                </span>
              )}

              {/* Imagem Placeholder */}
              <div className={`${product.image} h-40 w-full rounded-md mb-4 flex items-center justify-center group-hover:opacity-90 transition`}>
                <span className="text-gray-400 text-xs">Imagem do Produto</span>
              </div>

              {/* Informações */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-sm text-gray-700 font-medium mb-2 line-clamp-2 h-10 hover:text-blue-600 cursor-pointer">
                  {product.title}
                </h3>
                
                <div className="mt-auto">
                  {null && (
                    <p className="text-xs text-gray-400 line-through">
                      R$ {null.toFixed(2).replace('.', ',')}
                    </p>
                  )}
                  <p className="text-xl font-bold text-blue-800">
                    R$ {Number(product.price).toFixed(2).replace('.', ',')}
                  </p>
                  <p className="text-[10px] text-gray-500 mb-3">
                    {`À vista`}
                  </p>
                  
                  <button className="w-full bg-green-500 text-white font-bold py-2 rounded hover:bg-green-600 transition flex items-center justify-center gap-2 text-sm uppercase">
                    <ShoppingCart size={16} /> Comprar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-gray-700 p-3 rounded-full">
              <span className="text-2xl">📩</span>
            </div>
            <div>
              <h4 className="font-bold text-lg">Receba nossas ofertas</h4>
              <p className="text-gray-400 text-sm">Cadastre-se e ganhe descontos exclusivos</p>
            </div>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              className="px-4 py-2 rounded text-gray-800 w-full md:w-64 focus:outline-none"
            />
            <button className="bg-blue-600 px-6 py-2 rounded font-bold hover:bg-blue-500 transition">
              OK
            </button>
          </div>
        </div>
      </section>

      {/* --- RODAPÉ --- */}
      <footer className="bg-gray-100 border-t pt-10 pb-6 text-gray-600 text-sm">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="font-bold text-gray-800 mb-4 uppercase">Institucional</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Quem Somos</a></li>
              <li><a href="#" className="hover:text-blue-600">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-blue-600">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-600">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-gray-800 mb-4 uppercase">Ajuda e Suporte</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-blue-600">Prazos de Entrega</a></li>
              <li><a href="#" className="hover:text-blue-600">Como Comprar</a></li>
              <li><a href="#" className="hover:text-blue-600">Fale Conosco</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-gray-800 mb-4 uppercase">Atendimento</h5>
            <ul className="space-y-2">
              <li className="font-bold text-lg text-blue-800">(62) 3591-1005</li>
              <li>Seg a Sex: 8:00 às 18:00</li>
              <li>Sáb: 8:00 às 12:00</li>
              <li className="mt-2 text-xs">
                Av. Perimetral, St. Campinas<br/>
                Goiânia - GO, CEP 74500-000
              </li>
            </ul>
          </div>
          
          <div>
             <h5 className="font-bold text-gray-800 mb-4 uppercase">Pagamento</h5>
             <div className="flex gap-2 flex-wrap">
               {/* Simulação de ícones de cartão */}
               <div className="bg-white border w-10 h-6 rounded"></div>
               <div className="bg-white border w-10 h-6 rounded"></div>
               <div className="bg-white border w-10 h-6 rounded"></div>
               <div className="bg-white border w-10 h-6 rounded"></div>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Total Frio Refrigeração e Peças Ltda. Todos os direitos reservados.</p>
          <p className="mt-1 text-gray-400">Preços e condições de pagamento exclusivos para compras via internet.</p>
        </div>
      </footer>
    </div>
  );
};

export default TotalFrioEcommerce;