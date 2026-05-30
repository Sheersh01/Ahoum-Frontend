import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import StickyFooter from "../components/StickyFooter";
import FilterPanel from "../components/FilterPanel";
import BackIcon from "../assets/back arrow.png";
import FilterIcon from "../assets/filter.png";
import ProductCard from "../components/ProductCard";
import { useProductsStore } from "../store/productsStore";
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
  categories: string[];
  brand: string;
};

const beveragesProducts: Product[] = [
  {
    name: "Diet Coke",
    meta: "355ml, Price",
    price: "$1.99",
    image: DietCoke,
    categories: ["Fast Food"],
    brand: "Cocola",
  },
  {
    name: "Sprite Can",
    meta: "325ml, Price",
    price: "$1.50",
    image: Sprite,
    categories: ["Chips & Crisps"],
    brand: "Cocola",
  },
  {
    name: "Apple & Grape Juice",
    meta: "2L, Price",
    price: "$15.99",
    image: AppleGrape,
    categories: ["Noodles & Pasta"],
    brand: "Ifad",
  },
  {
    name: "Orange Juice",
    meta: "2L, Price",
    price: "$15.99",
    image: OrangeJuice,
    categories: ["Eggs"],
    brand: "Kazi Farmas",
  },
  {
    name: "Coca Cola Can",
    meta: "325ml, Price",
    price: "$4.99",
    image: CocaCola,
    categories: ["Fast Food"],
    brand: "Cocola",
  },
  {
    name: "Pepsi Can",
    meta: "330ml, Price",
    price: "$4.99",
    image: Pepsi,
    categories: ["Fast Food"],
    brand: "Individual Collection",
  },
];

const productsByCategory: Record<string, Product[]> = {
  beverages: beveragesProducts,
};

const Products = () => {
  const searchQuery = useProductsStore((state) => state.searchQuery);
  const selectedCategories = useProductsStore(
    (state) => state.selectedCategories,
  );
  const selectedBrands = useProductsStore((state) => state.selectedBrands);
  const isFilterOpen = useProductsStore((state) => state.isFilterOpen);
  const setSearchQuery = useProductsStore((state) => state.setSearchQuery);
  const toggleCategory = useProductsStore((state) => state.toggleCategory);
  const toggleBrand = useProductsStore((state) => state.toggleBrand);
  const openFilters = useProductsStore((state) => state.openFilters);
  const closeFilters = useProductsStore((state) => state.closeFilters);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery.trim().toLowerCase());
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [searchQuery]);

  const applyFilters = () => {
    closeFilters();
  };
  const params = useParams();
  const categorySlug = params.category ?? "";
  const items = productsByCategory[categorySlug] ?? beveragesProducts;

  const filteredItems = items.filter((item) => {
    const normalizedQuery = debouncedSearchQuery;
    const matchesSearch =
      normalizedQuery.length === 0 ||
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.meta.toLowerCase().includes(normalizedQuery) ||
      item.brand.toLowerCase().includes(normalizedQuery) ||
      item.categories.some((category) =>
        category.toLowerCase().includes(normalizedQuery),
      );

    const matchesCategory =
      selectedCategories.length === 0 ||
      item.categories.some((category) => selectedCategories.includes(category));

    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(item.brand);

    return matchesSearch && matchesCategory && matchesBrand;
  });

  const displayName = categorySlug
    ? categorySlug
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ")
    : "Beverages";

  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="mx-auto w-full  pb-[28px]">
        <header className="mt-4 flex items-center justify-between px-4">
          <Link
            to="/home"
            className="h-[36px] w-[36px] flex items-center justify-center rounded-full bg-transparent"
          >
            <img src={BackIcon} alt="Back" className="w-[10px]" />
          </Link>
          <h1 className="text-[16px] font-semibold">{displayName}</h1>
          <button
            type="button"
            onClick={openFilters}
            aria-label="Open filters"
            className="h-[36px] w-[36px] flex items-center justify-center rounded-full bg-transparent"
          >
            <img src={FilterIcon} alt="Filter" className="h-[18px] w-[18px]" />
          </button>
        </header>

        <div className="mt-4 px-4">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="mt-4 px-4 pb-40">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((p) => <ProductCard key={p.name} product={p} />)
            ) : (
              <div className="col-span-2 md:col-span-3 lg:col-span-4 mt-8 text-center text-[#7c7c7c]">
                No products match your search or filters.
              </div>
            )}
          </div>
        </div>
      </section>

      <FilterPanel
        visible={isFilterOpen}
        onClose={closeFilters}
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
