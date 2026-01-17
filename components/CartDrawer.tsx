
import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
      <div className={`absolute inset-y-0 right-0 max-w-full flex transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col">
          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div className="flex items-start justify-between border-b pb-4">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBag className="text-blue-600" /> Seu Carrinho
              </h2>
              <button onClick={onClose} className="p-2 -m-2 text-gray-400 hover:text-gray-500">
                <X size={24} />
              </button>
            </div>

            <div className="mt-8">
              {items.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500 italic">O seu carrinho está vazio.</p>
                  <button onClick={onClose} className="mt-4 text-blue-600 font-bold hover:underline uppercase text-xs">
                    Continuar Comprando
                  </button>
                </div>
              ) : (
                <ul className="-my-6 divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.id} className="py-6 flex">
                      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden bg-gray-50">
                        <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-sm font-medium text-gray-900">
                            <h3 className="line-clamp-2">{item.name}</h3>
                            <p className="ml-4">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                          </div>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 px-2 hover:bg-gray-100 disabled:opacity-50"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 px-2 hover:bg-gray-100"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <div className="flex">
                            <button 
                              onClick={() => onRemove(item.id)}
                              type="button" 
                              className="font-medium text-red-600 hover:text-red-500 flex items-center gap-1"
                            >
                              <Trash2 size={16} /> <span className="hidden sm:inline">Remover</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {items.length > 0 && (
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p className="text-xl font-bold text-blue-800">R$ {total.toFixed(2).replace('.', ',')}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Frete calculado no próximo passo.</p>
              <div className="mt-6">
                <a href="#" className="flex justify-center items-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-green-600 hover:bg-green-700 uppercase tracking-widest">
                  Finalizar Compra
                </a>
              </div>
              <div className="mt-4 flex justify-center text-sm text-center text-gray-500">
                <p>
                  ou{' '}
                  <button type="button" className="text-blue-600 font-medium hover:text-blue-500" onClick={onClose}>
                    Continuar Comprando <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
