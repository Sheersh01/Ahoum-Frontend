export type OrderStatus =
  | "pending"
  | "confirmed"
  | "shipped"
  | "delivered"
  | "cancelled";

export type ProductCategory =
  | "Paan Corner"
  | "Eggs"
  | "Noodles & Pasta"
  | "Chips & Crisps"
  | "Fast Food"
  | "Beverages";

export interface Product {
  id: string;
  name: string;
  meta: string;
  price: string; // formatted like "$4.99"
  image: string;
  categories: string[];
  brand: string;
}

export interface CartItem {
  id: string;
  name: string;
  meta: string;
  price: number;
  image: string;
  qty: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
