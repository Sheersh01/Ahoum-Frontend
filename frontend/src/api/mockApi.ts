import type { Product } from "../types";
import DietCoke from "../assets/beverages/DietCoke.png";
import Sprite from "../assets/beverages/Sprite.png";
import AppleGrape from "../assets/beverages/AppleJuice.png";
import OrangeJuice from "../assets/beverages/OrangeJuice.png";
import CocaCola from "../assets/beverages/CocaCola.png";
import Pepsi from "../assets/beverages/Pepsi.png";
import Paan1 from "../assets/products/paan-1.avif";
import Paan2 from "../assets/products/paan-2.avif";
import Paan3 from "../assets/products/paan-3.avif";
import Paan4 from "../assets/products/paan-4.avif";
import Paan5 from "../assets/products/paan-5.avif";
import Paan6 from "../assets/products/paan-6.avif";
import Paan7 from "../assets/products/paan-7.avif";
import Paan8 from "../assets/products/paan-8.avif";
import Paan9 from "../assets/products/paan-9.avif";
import Paan10 from "../assets/products/paan-10.avif";
import Paan11 from "../assets/products/paan-11.avif";
import Paan12 from "../assets/products/paan-12.avif";

const products: Product[] = [
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
  {
    id: "perfect-rolled-cones-natural-bongchie",
    name: "Perfect Rolled Cones (Natural) - Bongchie",
    meta: "3 pcs",
    price: "₹45",
    image: Paan1,
    categories: ["Paan Corner"],
    brand: "Bongchie",
  },
  {
    id: "perforated-wide-tips-roach-raw",
    name: "Perforated Wide Tips Roach - Raw",
    meta: "50 pcs",
    price: "₹50",
    image: Paan2,
    categories: ["Paan Corner"],
    brand: "RAW",
  },
  {
    id: "ultimate-rolling-paper-with-filter-tips",
    name: "Ultimate Rolling Paper with Filter Tips & Booklet",
    meta: "32 pcs",
    price: "₹90",
    image: Paan3,
    categories: ["Paan Corner"],
    brand: "Mozo",
  },
  {
    id: "perfect-rolling-paper-pink-bongchie",
    name: "Perfect Rolling Paper (Pink) - Bongchie",
    meta: "3 packs",
    price: "₹45",
    image: Paan4,
    categories: ["Paan Corner"],
    brand: "Bongchie",
  },
  {
    id: "brown-classic-slim-rolling-paper",
    name: "Brown Classic Slim Rolling Paper (King Size)",
    meta: "32 pcs",
    price: "₹80",
    image: Paan5,
    categories: ["Paan Corner"],
    brand: "RAW",
  },
  {
    id: "cigarette-smoking-filter-nicofree",
    name: "Cigarette Smoking Filter - Nicofree",
    meta: "21 pcs",
    price: "₹239",
    image: Paan6,
    categories: ["Paan Corner"],
    brand: "Nicofree",
  },
  {
    id: "thins-pre-rolled-cones-lit",
    name: "Thins Pre Rolled Cones - LIT",
    meta: "3 x 2 pcs",
    price: "₹60",
    image: Paan7,
    categories: ["Paan Corner"],
    brand: "LIT",
  },
  {
    id: "thins-pre-rolled-rolling-paper-lit",
    name: "Thins Pre-Rolled Rolling Paper - LIT",
    meta: "1 pack",
    price: "₹25",
    image: Paan8,
    categories: ["Paan Corner"],
    brand: "LIT",
  },
  {
    id: "black-organic-hemp-slim-rolling-paper",
    name: "Black Organic Hemp Slim Rolling Paper",
    meta: "32 pcs",
    price: "₹120",
    image: Paan9,
    categories: ["Paan Corner"],
    brand: "RAW",
  },
  {
    id: "brown-rolling-paper-cones-stash-pro",
    name: "Brown Rolling Paper Cones - Stash Pro",
    meta: "6 pcs",
    price: "₹90",
    image: Paan10,
    categories: ["Paan Corner"],
    brand: "Stash Pro",
  },
  {
    id: "emergency-white-rolling-paper-with-tips",
    name: "Emergency White Rolling Paper with Tips",
    meta: "10 pcs",
    price: "₹99",
    image: Paan11,
    categories: ["Paan Corner"],
    brand: "Generic",
  },
  {
    id: "glass-filter-tip-reusable-smoking-mouthpiece",
    name: "Glass Filter Tip Reusable Smoking Mouthpiece",
    meta: "1 pc",
    price: "₹55",
    image: Paan12,
    categories: ["Paan Corner"],
    brand: "Bongchie",
  },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const fetchProducts = (opts?: {
  simulateError?: boolean;
  delay?: number;
  categorySlug?: string;
}) =>
  new Promise<Product[]>((resolve, reject) => {
    const delay = opts?.delay ?? 600;
    setTimeout(() => {
      if (opts?.simulateError) {
        reject(new Error("Failed to fetch products"));
        return;
      }

      const filteredProducts = opts?.categorySlug
        ? products.filter((product) =>
            product.categories.some(
              (category) => slugify(category) === opts.categorySlug,
            ),
          )
        : products;

      resolve(filteredProducts);
    }, delay);
  });

export const fetchCategories = (delay = 300) =>
  new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(["Paan Corner", "Beverages"]);
    }, delay);
  });
