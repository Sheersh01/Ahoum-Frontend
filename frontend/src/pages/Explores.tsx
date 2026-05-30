import SearchBar from "../components/SearchBar";
import StickyFooter from "../components/StickyFooter";
import { Link } from "react-router";
import VegetablesImage from "../assets/categories/vegetables.png";
import OilImage from "../assets/categories/oil.png";
import MeatImage from "../assets/categories/meat.png";
import BakeryImage from "../assets/categories/bakery.png";
import DairyImage from "../assets/categories/eggs.png";
import BeveragesImage from "../assets/categories/beverages.png";

const categories = [
  {
    name: "Frash Fruits & Vegetable",
    image: VegetablesImage,
    bg: "bg-[#eaf9ef]",
    border: "border-[#dff3e6]",
  },
  {
    name: "Cooking Oil & Ghee",
    image: OilImage,
    bg: "bg-[#fff6ea]",
    border: "border-[#fff0d9]",
  },
  {
    name: "Meat & Fish",
    image: MeatImage,
    bg: "bg-[#fef0f0]",
    border: "border-[#ffe9e9]",
  },
  {
    name: "Bakery & Snacks",
    image: BakeryImage,
    bg: "bg-[#f6f0ff]",
    border: "border-[#efe6ff]",
  },
  {
    name: "Dairy & Eggs",
    image: DairyImage,
    bg: "bg-[#fffdf0]",
    border: "border-[#fff8df]",
  },
  {
    name: "Beverages",
    image: BeveragesImage,
    bg: "bg-[#eef8ff]",
    border: "border-[#e6f3ff]",
  },
];

const Explores = () => {
  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="mx-auto w-full pb-24">
        <header className="pt-5 text-center">
          <h1 className="text-xl leading-6 font-semibold">Find Products</h1>
        </header>

        <div className="mt-5 px-5 md:px-8">
          <SearchBar />
        </div>

        <div className="mt-5 px-4 md:px-8 pb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const slug = cat.name
                .toLowerCase()
                .replace(/&/g, "and")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
              return (
                <Link
                  key={cat.name}
                  to={`/products/${slug}`}
                  className={`flex h-36 flex-col items-center justify-center gap-2 rounded-xl border px-3 py-4 ${cat.bg} ${cat.border}`}
                  aria-label={cat.name}
                >
                  <div className="flex h-16 w-16 items-center justify-center">
                    <img
                      src={cat.image}
                      alt=""
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <span className="mt-1 text-sm font-semibold text-center">
                    {cat.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <StickyFooter />
    </main>
  );
};

export default Explores;
