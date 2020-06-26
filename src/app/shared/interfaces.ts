export interface Product {
  key: string;
  category: string;
  image: string;
  price: number;
  quantitative: boolean;
  sold: boolean;
  title: string;
}

export interface CartItem {
  key: string;
  quantitative: boolean;
  quantity: number;
  title: string;
  unitPrice: number;
}

export interface Order {
  key: string;
  items: CartItem[];
}
