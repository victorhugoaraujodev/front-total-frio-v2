
import { Product, Category } from '../types';

// Replace with your actual Django API endpoint
const BASE_URL = 'http://localhost:8000/api';

const MOCK_CATEGORIES: Category[] = [
  { id: 1, name: "Ar Condicionado", slug: "ar-condicionado" },
  { id: 2, name: "Refrigeração", slug: "refrigeracao" },
  { id: 3, name: "Lavadoras", slug: "lavadoras" },
  { id: 4, name: "Ferramentas", slug: "ferramentas" },
  { id: 5, name: "Eletroportáteis", slug: "eletroportateis" },
  { id: 6, name: "Promoções", slug: "promocoes" },
];

const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Compressor Embraco 1/5 HP R134a 110V EM2U 60HLP",
    oldPrice: 450.00,
    price: 389.90,
    installments: "3x de R$ 129,96 sem juros",
    image: "https://picsum.photos/400/400?random=1",
    tag: "OFERTA",
    category: "refrigeracao"
  },
  {
    id: 2,
    name: "Placa Eletrônica Lavadora Brastemp Ative 11kg BWL11",
    oldPrice: 180.00,
    price: 149.90,
    installments: "2x de R$ 74,95 sem juros",
    image: "https://picsum.photos/400/400?random=2",
    tag: null,
    category: "lavadoras"
  },
  {
    id: 3,
    name: "Gás Refrigerante R410a Lata 650g Dugold",
    oldPrice: 89.90,
    price: 65.00,
    installments: "1x de R$ 65,00",
    image: "https://picsum.photos/400/400?random=3",
    tag: "MAIS VENDIDO",
    category: "refrigeracao"
  },
  {
    id: 4,
    name: "Kit Serra Copo para Ar Condicionado 6 Peças",
    oldPrice: 220.00,
    price: 189.90,
    installments: "3x de R$ 63,30 sem juros",
    image: "https://picsum.photos/400/400?random=4",
    tag: null,
    category: "ferramentas"
  }
];

export const apiService = {
  async getCategories(): Promise<Category[]> {
    try {
      const response = await fetch(`${BASE_URL}/categories/`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.warn('Django API not found, using fallback categories.', error);
      return MOCK_CATEGORIES;
    }
  },

  async getProducts(search?: string): Promise<Product[]> {
    try {
      const url = search ? `${BASE_URL}/products/?search=${search}` : `${BASE_URL}/products/`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.warn('Django API not found, using fallback products.', error);
      if (search) {
        return MOCK_PRODUCTS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
      }
      return MOCK_PRODUCTS;
    }
  }
};
