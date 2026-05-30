import { Link, useParams } from "react-router";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import StickyFooter from "../components/StickyFooter";
import FilterPanel from "../components/FilterPanel";
import PlusIcon from "../assets/Plus.png";
import BackIcon from "../assets/back arrow.png";
import FilterIcon from "../assets/filter.png";
import DietCoke from "../assets/beverages/DietCoke.png";
import Sprite from "../assets/beverages/Sprite.png";
import AppleGrape from "../assets/beverages/AppleJuice.png";
import OrangeJuice from "../assets/beverages/OrangeJuice.png";
import CocaCola from "../assets/beverages/CocaCola.png";
import Pepsi from "../assets/beverages/Pepsi.png";

type Product = {
  name: string;
  meta: string;
  price: string;
  image: string;
};

const beveragesProducts: Product[] = [
  { name: "Diet Coke", meta: "355ml, Price", price: "$1.99", image: DietCoke },
  { name: "Sprite Can", meta: "325ml, Price", price: "$1.50", image: Sprite },
  {
    name: "Apple & Grape Juice",
    meta: "2L, Price",
    price: "$15.99",
    image: AppleGrape,
  },
  {
    name: "Orange Juice",
    meta: "2L, Price",
    price: "$15.99",
    image: OrangeJuice,
  },
  {
    name: "Coca Cola Can",
    meta: "325ml, Price",
    price: "$4.99",
    image: CocaCola,
  },
  { name: "Pepsi Can", meta: "330ml, Price", price: "$4.99", image: Pepsi },
];

const productsByCategory: Record<string, Product[]> = {
  beverages: beveragesProducts,
};

const ProductCard = ({ product }: { product: Product }) => (
  <article className="flex h-[170px] w-full flex-col justify-between rounded-[12px] border border-[#f0f0f0] bg-white p-[12px]">
    <div className="flex items-center gap-[12px]">
      <div className="h-[88px] w-[88px] flex-none rounded-[10px] bg-[#fafafa] flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-[72px] w-[72px] object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-[14px] font-semibold text-[#181725]">
          {product.name}
        </h3>
        <p className="mt-[6px] text-[12px] text-[#7c7c7c]">{product.meta}</p>
      </div>
    </div>

    <div className="mt-2 flex items-center justify-between">
      <p className="text-[16px] font-bold text-[#181725]">{product.price}</p>
      <button
        type="button"
        aria-label={`Add ${product.name}`}
        className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#53b175]"
      >
        <img
          src={PlusIcon}
          alt=""
          className="h-[14px] w-[14px] brightness-0 invert"
        />
      </button>
    </div>
  </article>
);

const Products = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Eggs",
  ]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(["Cocola"]);

  const toggleCategory = (c: string) => {
    setSelectedCategories((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );
  };

  const toggleBrand = (b: string) => {
    setSelectedBrands((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b],
    );
  };

  const applyFilters = () => {
    // placeholder: apply filter logic here
    setShowFilter(false);
  };
  const params = useParams();
  const categorySlug = params.category ?? "";
  const items = productsByCategory[categorySlug] ?? beveragesProducts;

  const displayName = categorySlug
    ? categorySlug
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ")
    : "Beverages";

  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="mx-auto w-full max-w-[430px] pb-[28px]">
        <header className="mt-4 flex items-center justify-between px-4">
          <Link
            to="/home"
            className="h-[36px] w-[36px] flex items-center justify-center rounded-full bg-transparent"
          >
            <img src={BackIcon} alt="Back" className="h-[18px] w-[18px]" />
          </Link>
          <h1 className="text-[16px] font-semibold">{displayName}</h1>
          <button
            type="button"
            onClick={() => setShowFilter(true)}
            aria-label="Open filters"
            className="h-[36px] w-[36px] flex items-center justify-center rounded-full bg-transparent"
          >
            <img src={FilterIcon} alt="Filter" className="h-[18px] w-[18px]" />
          </button>
        </header>

        <div className="mt-4 px-4">
          <SearchBar />
        </div>

        <div className="mt-4 px-4 pb-40">
          <div className="grid grid-cols-2 gap-4">
            {items.length > 0 ? (
              items.map((p) => <ProductCard key={p.name} product={p} />)
            ) : (
              <div className="col-span-2 mt-8 text-center text-[#7c7c7c]">
                No products found for this category.
              </div>
            )}
          </div>
        </div>
      </section>

      <FilterPanel
        visible={showFilter}
        onClose={() => setShowFilter(false)}
        selectedCategories={selectedCategories}
        selectedBrands={selectedBrands}
        toggleCategory={toggleCategory}
        toggleBrand={toggleBrand}
        onApply={applyFilters}
      />

      <StickyFooter />
    </main>
  );
};

export default Products;
