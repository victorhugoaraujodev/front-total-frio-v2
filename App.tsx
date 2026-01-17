
import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  CreditCard, 
  ShieldCheck,
  ChevronRight,
  Filter
} from 'lucide-react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { apiService } from './services/api';
import { Product, Category, CartItem } from './types';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch data
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [fetchedCats, fetchedProducts] = await Promise.all([
          apiService.getCategories(),
          apiService.getProducts(searchQuery)
        ]);
        setCategories(fetchedCats);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to load store data", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [searchQuery]);

  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products;

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Automatically show cart when item is added
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateCartQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        categories={categories} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        cartCount={cartTotalItems}
        onSearch={setSearchQuery}
        onSelectCategory={setSelectedCategory}
        onOpenCart={() => setIsCartOpen(true)}
        activeCategory={selectedCategory}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateCartQuantity}
      />

      <main className="flex-grow">
        {/* Banner only on home view */}
        {!searchQuery && !selectedCategory && (
          <section className="container mx-auto px-4 py-6 grid md:grid-cols-4 gap-4">
            <div className="md:col-span-3 bg-blue-100 rounded-xl h-64 md:h-96 relative overflow-hidden flex items-center justify-center group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" 
                alt="Banner Principal" 
                className="absolute inset-0 object-cover w-full h-full opacity-30 group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-80"></div>
              <div className="relative z-10 text-left w-full h-full flex flex-col justify-center p-8 md:p-12 text-white">
                <span className="bg-red-600 text-[10px] font-bold px-2 py-1 rounded w-fit mb-4 shadow-sm animate-pulse">OFERTAS DE VERÃO</span>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight uppercase tracking-tighter">
                  PEÇAS ORIGINAIS <br/> COM O MELHOR PREÇO
                </h2>
                <p className="text-lg md:text-xl mb-8 font-light max-w-md text-blue-100">Tudo para refrigeração comercial e doméstica em um só lugar. Qualidade que você confia.</p>
                <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg font-bold hover:bg-yellow-300 transition shadow-xl w-fit uppercase text-sm tracking-widest active:scale-95">
                  Aproveite Agora
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-4 h-96">
              <div className="flex-1 bg-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition group">
                <img src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 object-cover opacity-50 w-full h-full group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
                <span className="relative z-10 text-white font-bold text-xl text-center px-4 leading-tight">
                  FERRAMENTAS <br/> <span className="text-yellow-400 text-sm">EM 6X SEM JUROS</span>
                </span>
              </div>
              <div className="flex-1 bg-blue-800 rounded-xl flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition group">
                 <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 object-cover opacity-40 w-full h-full group-hover:scale-110 transition duration-500" />
                 <span className="relative z-10 text-white font-bold text-xl text-center px-4 leading-tight">
                   ENTREGA RÁPIDA <br/> <span className="text-blue-200 text-sm">PARA TODO O BRASIL</span>
                 </span>
              </div>
            </div>
          </section>
        )}

        {/* Info Ruler */}
        <section className="bg-white border-y border-gray-100 py-8 shadow-sm">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-5 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 px-4 group">
              <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-600 transition duration-300 group-hover:rotate-12">
                <CreditCard size={32} className="text-blue-600 group-hover:text-white transition" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-base">Pagamento Facilitado</h4>
                <p className="text-sm text-gray-500">Parcele em até 6x sem juros</p>
              </div>
            </div>
            <div className="flex items-center gap-5 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 px-4 group">
              <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-600 transition duration-300 group-hover:-translate-y-1">
                <Truck size={32} className="text-blue-600 group-hover:text-white transition" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-base">Entrega Expressa</h4>
                <p className="text-sm text-gray-500">Goiânia e Região Metropolitana</p>
              </div>
            </div>
            <div className="flex items-center gap-5 px-4 group">
              <div className="bg-blue-50 p-4 rounded-full group-hover:bg-blue-600 transition duration-300 group-hover:scale-110">
                <ShieldCheck size={32} className="text-blue-600 group-hover:text-white transition" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-base">Compra Garantida</h4>
                <p className="text-sm text-gray-500">Site criptografado e 100% seguro</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gray-200 pb-3 gap-4">
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 border-b-4 border-blue-600 inline-block pb-3 -mb-[15px] uppercase tracking-tighter">
                {searchQuery ? `Pesquisa: "${searchQuery}"` : selectedCategory ? `${categories.find(c => c.slug === selectedCategory)?.name}` : "Novidades e Destaques"}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm text-gray-500 font-medium px-4 py-2 border rounded hover:bg-gray-50 transition">
                <Filter size={16} /> Filtrar
              </button>
              <a href="#" className="flex items-center gap-1 text-sm text-blue-600 font-bold hover:text-blue-800 transition uppercase tracking-tighter">
                Ver Catálogo <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(n => (
                <div key={n} className="bg-white p-4 rounded-lg border animate-pulse h-80 shadow-sm">
                  <div className="bg-gray-200 h-40 w-full rounded mb-4"></div>
                  <div className="bg-gray-200 h-4 w-3/4 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 w-1/2 rounded mb-6"></div>
                  <div className="bg-gray-200 h-10 w-full rounded mt-auto"></div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-gray-100 rounded-xl border border-dashed border-gray-300">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-gray-500 text-lg font-medium">Ops! Nenhum produto encontrado nesta categoria ou busca.</p>
              <p className="text-gray-400 text-sm mt-1">Tente pesquisar por outros termos ou explore os menus.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory(null); }} 
                className="mt-6 bg-blue-600 text-white px-8 py-2 rounded-full font-bold shadow-md hover:bg-blue-700 transition active:scale-95"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </section>

        {/* Newsletter */}
        <section className="bg-blue-900 text-white py-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6 text-center lg:text-left">
              <div className="bg-white/10 p-5 rounded-2xl hidden md:block backdrop-blur-sm">
                <span className="text-4xl">📩</span>
              </div>
              <div>
                <h4 className="font-extrabold text-2xl mb-1 uppercase tracking-tight">Ofertas no seu e-mail</h4>
                <p className="text-blue-200 text-sm">Receba cupons de desconto e novidades em primeira mão.</p>
              </div>
            </div>
            <div className="flex w-full lg:w-auto gap-3 flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail aqui..." 
                className="px-6 py-4 rounded-lg text-gray-800 w-full lg:w-96 focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-inner border-none"
              />
              <button className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-lg font-bold hover:bg-yellow-300 transition shadow-xl w-full sm:w-auto uppercase text-xs tracking-widest active:scale-95">
                Cadastrar
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
