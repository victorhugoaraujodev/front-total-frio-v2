
export interface Product {
  id: number;
  name: string;
  oldPrice?: number;
  price: number;
  installments: string;
  image: string;
  tag: string | null;
  description?: string;
  category?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface CartItem extends Product {
  quantity: number;
}
