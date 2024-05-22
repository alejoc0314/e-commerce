export interface Product {
  quantity: number;
  id: number;
  title: string;
  price: number;
  description: string;
  image?: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
