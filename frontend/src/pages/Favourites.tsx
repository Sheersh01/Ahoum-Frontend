import { Link } from "react-router";
import { useState } from "react";
import StickyFooter from "../components/StickyFooter";
import Sprite from "../assets/beverages/Sprite.png";
import DietCoke from "../assets/beverages/DietCoke.png";
import AppleGrape from "../assets/beverages/AppleJuice.png";
import CocaCola from "../assets/beverages/CocaCola.png";
import Pepsi from "../assets/beverages/Pepsi.png";
import FrontArrow from "../assets/Front-Arrow.png";

type FavItem = {
  id: string;
  name: string;
  meta: string;
  price: string;
  image: string;
};

const initialFavs: FavItem[] = [
  {
    id: "sprite",
    name: "Sprite Can",
    meta: "325ml, Price",
    price: "$1.50",
    image: Sprite,
  },
  {
    id: "diet",
    name: "Diet Coke",
    meta: "355ml, Price",
    price: "$1.99",
    image: DietCoke,
  },
  {
    id: "apple",
    name: "Apple & Grape Juice",
    meta: "2L, Price",
    price: "$15.50",
    image: AppleGrape,
  },
  {
    id: "coke",
    name: "Coca Cola Can",
    meta: "325ml, Price",
    price: "$4.99",
    image: CocaCola,
  },
  {
    id: "pepsi",
    name: "Pepsi Can",
    meta: "330ml, Price",
    price: "$4.99",
    image: Pepsi,
  },
];

const FavRow = ({ item }: { item: FavItem }) => (
  <Link to="/product-detail" className="block">
    <div className="py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-[56px] w-[56px] object-contain"
          />
          <div>
            <h3 className="text-[14px] font-semibold">{item.name}</h3>
            <p className="mt-1 text-[12px] text-[#7c7c7c]">{item.meta}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-[14px] font-semibold">{item.price}</div>
          <img src={FrontArrow} alt="" className="h-[14px] w-[14px]" />
        </div>
      </div>

      <hr className="mt-4 border-t border-[#f0f0f0]" />
    </div>
  </Link>
);

const Favourites = () => {
  const [items, setItems] = useState<FavItem[]>(initialFavs);

  const addAllToCart = () => {
    // placeholder: add all to cart behavior
    // for now, just log
    console.log("Add all to cart", items);
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="mx-auto w-full max-w-[430px] pb-[140px]">
        <header className="pt-4 text-center">
          <h1 className="text-[18px] font-semibold">Favourite</h1>
        </header>

        <div className="mt-4 px-4">
          {items.map((it) => (
            <FavRow key={it.id} item={it} />
          ))}
        </div>

        <div className="mt-6 px-4">
          <button
            type="button"
            onClick={addAllToCart}
            className="w-full rounded-[12px] bg-[#53b175] py-3 text-white font-semibold"
          >
            Add All To Cart
          </button>
        </div>
      </section>

      <StickyFooter />
    </main>
  );
};

export default Favourites;
