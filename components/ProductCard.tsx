
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-xl transition duration-300 group flex flex-col relative">
      {/* Discount Tag */}
      {product.tag && (
        <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
          {product.tag}
        </span>
      )}

      {/* Product Image */}
      <div className="relative h-48 w-full rounded-md mb-4 flex items-center justify-center overflow-hidden bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-sm text-gray-700 font-medium mb-2 line-clamp-2 h-10 hover:text-blue-600 cursor-pointer">
          {product.name}
        </h3>
        
        <div className="mt-auto">
          {product.oldPrice && (
            <p className="text-xs text-gray-400 line-through">
              R$ {product.oldPrice.toFixed(2).replace('.', ',')}
            </p>
          )}
          <p className="text-xl font-bold text-blue-800">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
          <p className="text-[10px] text-gray-500 mb-4">
            {product.installments}
          </p>
          
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full bg-green-500 text-white font-bold py-2.5 rounded hover:bg-green-600 transition flex items-center justify-center gap-2 text-sm uppercase shadow-sm active:transform active:scale-95"
          >
            <ShoppingCart size={16} /> Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
