import type { Product } from "../types";
import DietCoke from "../assets/beverages/DietCoke.png";
import Sprite from "../assets/beverages/Sprite.png";
import AppleGrape from "../assets/beverages/AppleJuice.png";
import OrangeJuice from "../assets/beverages/OrangeJuice.png";
import CocaCola from "../assets/beverages/CocaCola.png";
import Pepsi from "../assets/beverages/Pepsi.png";

const beveragesProducts: Product[] = [
  {
    id: "diet-coke",
    name: "Diet Coke",
    meta: "355ml, Price",
    price: "$1.99",
    image: DietCoke,
    categories: ["Fast Food"],
    brand: "Cocola",
  },
  {
    id: "sprite-can",
    name: "Sprite Can",
    meta: "325ml, Price",
    price: "$1.50",
    image: Sprite,
    categories: ["Chips & Crisps"],
    brand: "Cocola",
  },
  {
    id: "apple-grape-juice",
    name: "Apple & Grape Juice",
    meta: "2L, Price",
    price: "$15.99",
    image: AppleGrape,
    categories: ["Noodles & Pasta"],
    brand: "Ifad",
  },
  {
    id: "orange-juice",
    name: "Orange Juice",
    meta: "2L, Price",
    price: "$15.99",
    image: OrangeJuice,
    categories: ["Eggs"],
    brand: "Kazi Farmas",
  },
  {
    id: "coca-cola-can",
    name: "Coca Cola Can",
    meta: "325ml, Price",
    price: "$4.99",
    image: CocaCola,
    categories: ["Fast Food"],
    brand: "Cocola",
  },
  {
    id: "pepsi-can",
    name: "Pepsi Can",
    meta: "330ml, Price",
    price: "$4.99",
    image: Pepsi,
    categories: ["Fast Food"],
    brand: "Individual Collection",
  },
];

export const fetchProducts = (opts?: {
  simulateError?: boolean;
  delay?: number;
}) =>
  new Promise<Product[]>((resolve, reject) => {
    const delay = opts?.delay ?? 600;
    setTimeout(() => {
      if (opts?.simulateError) {
        reject(new Error("Failed to fetch products"));
        return;
      }

      resolve(beveragesProducts);
    }, delay);
  });

export const fetchCategories = (delay = 300) =>
  new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve([
        "Eggs",
        "Noodles & Pasta",
        "Chips & Crisps",
        "Fast Food",
        "Beverages",
      ]);
    }, delay);
  });
