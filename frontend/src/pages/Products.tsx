import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import StickyFooter from "../components/StickyFooter";
import FilterPanel from "../components/FilterPanel";
import BackIcon from "../assets/back arrow.png";
import FilterIcon from "../assets/filter.png";
import ProductCard from "../components/ProductCard";
import SkeletonProductCard from "../components/SkeletonProductCard";
import { fetchProducts } from "../api/mockApi";
import type { Product } from "../types";
import { useProductsStore } from "../store/productsStore";

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
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const categorySlug = params.category ?? "";

  const displayName = categorySlug
    ? categorySlug
        .split("-")
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(" ")
    : "Beverages";

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery.trim().toLowerCase());
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [searchQuery]);

  const loadItems = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchProducts();
      setItems(data);
    } catch (err) {
      setError((err as Error).message ?? "Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let active = true;

    void (async () => {
      setError(null);
      setLoading(true);

      try {
        const data = await fetchProducts();
        if (active) {
          setItems(data);
        }
      } catch (err) {
        if (active) {
          setError((err as Error).message ?? "Failed to load products");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    })();

    return () => {
      active = false;
    };
  }, [categorySlug]);

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

  const applyFilters = () => {
    closeFilters();
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-slate-900">
      <section className="mx-auto w-full pb-7">
        <header className="mt-4 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/home"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent"
          >
            <img src={BackIcon} alt="Back" className="w-2.5" />
          </Link>

          <h1 className="text-base font-semibold">{displayName}</h1>

          <button
            type="button"
            onClick={openFilters}
            aria-label="Open filters"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent"
          >
            <img src={FilterIcon} alt="Filter" className="h-4.5 w-4.5" />
          </button>
        </header>

        <div className="mt-4 px-4 sm:px-6 lg:px-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="mt-4 px-4 pb-52 sm:px-6 lg:px-8">
          {loading ? (
            <div
              aria-live="polite"
              role="status"
              className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <SkeletonProductCard key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="mt-8 text-center text-slate-500">
              <p role="alert" className="mb-4">
                {error}
              </p>

              <button
                type="button"
                onClick={() => loadItems()}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm"
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {filteredItems.length > 0 ? (
                filteredItems.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-2 mt-8 text-center text-slate-500 md:col-span-3 lg:col-span-4">
                  No products match your search or filters.
                </div>
              )}
            </div>
          )}
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
