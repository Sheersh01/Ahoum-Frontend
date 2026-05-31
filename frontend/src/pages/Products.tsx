import { Link, useParams } from "react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import StickyFooter from "../components/StickyFooter";
import FilterPanel from "../components/FilterPanel";
import FilterIcon from "../assets/filter.png";
import ProductCard from "../components/ProductCard";
import SkeletonProductCard from "../components/SkeletonProductCard";
import { fetchProducts } from "../api/mockApi";
import type { Product } from "../types";
import { useProductsStore } from "../store/productsStore";
import HomeNav from "../components/HomeNav";
import { IoIosArrowBack } from "react-icons/io";

const FALLBACK_CATEGORIES = [
  "Rolling Papers",
  "Filters",
  "Cones",
  "Smoking Accessories",
  "Paan Corner",
  "Beverages",
];

const FALLBACK_BRANDS = ["RAW", "Bongchie", "LIT", "Stash Pro"];

type SortOption = "popularity" | "price-low-high" | "price-high-low" | "newest";

const parsePrice = (price: string) => Number(price.replace(/[^0-9.]/g, ""));

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
  const clearFilters = useProductsStore((state) => state.clearFilters);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<SortOption>("popularity");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 250 });
  const [inStockOnly, setInStockOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const productsPaneRef = useRef<HTMLDivElement | null>(null);

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
      const data = await fetchProducts({ categorySlug });
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
        const data = await fetchProducts({ categorySlug });
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

  const categoryOptions = useMemo(() => {
    const categoriesFromItems = Array.from(
      new Set(items.flatMap((item) => item.categories)),
    );

    return categoriesFromItems.length > 0
      ? categoriesFromItems
      : FALLBACK_CATEGORIES;
  }, [items]);

  const brandOptions = useMemo(() => {
    const brandsFromItems = Array.from(
      new Set(items.map((item) => item.brand)),
    );

    return brandsFromItems.length > 0 ? brandsFromItems : FALLBACK_BRANDS;
  }, [items]);

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        const normalizedQuery = debouncedSearchQuery;
        const itemPrice = parsePrice(item.price);

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
          item.categories.some((category) =>
            selectedCategories.includes(category),
          );

        const matchesBrand =
          selectedBrands.length === 0 || selectedBrands.includes(item.brand);

        const matchesPrice =
          itemPrice >= priceRange.min && itemPrice <= priceRange.max;

        const matchesAvailability = inStockOnly ? true : true;

        return (
          matchesSearch &&
          matchesCategory &&
          matchesBrand &&
          matchesPrice &&
          matchesAvailability
        );
      }),
    [
      debouncedSearchQuery,
      inStockOnly,
      items,
      priceRange.max,
      priceRange.min,
      selectedBrands,
      selectedCategories,
    ],
  );

  const sortedItems = useMemo(() => {
    const data = [...filteredItems];

    if (sortOption === "price-low-high") {
      data.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      return data;
    }

    if (sortOption === "price-high-low") {
      data.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      return data;
    }

    if (sortOption === "newest") {
      data.reverse();
      return data;
    }

    return data;
  }, [filteredItems, sortOption]);

  useEffect(() => {
    setVisibleCount(12);
  }, [
    categorySlug,
    debouncedSearchQuery,
    inStockOnly,
    priceRange.max,
    priceRange.min,
    selectedBrands,
    selectedCategories,
    sortOption,
  ]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || loading || error || visibleCount >= sortedItems.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          return;
        }

        setVisibleCount((count) => Math.min(count + 10, sortedItems.length));
      },
      { root: productsPaneRef.current, rootMargin: "180px 0px" },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [error, loading, sortedItems.length, visibleCount]);

  const visibleItems = sortedItems.slice(0, visibleCount);
  const hasMore = visibleCount < sortedItems.length;

  const applyFilters = () => {
    closeFilters();
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-slate-900 lg:flex lg:h-screen lg:flex-col lg:overflow-hidden">
      <div className="hidden border-b border-slate-100 lg:block lg:shrink-0">
        <HomeNav />
      </div>

      <section className="mx-auto w-full max-w-[1440px] pb-7 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:pb-0">
        <header className="mt-4 flex items-center justify-between px-4 sm:px-6 lg:hidden">
          <Link
            to="/home"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent"
          >
            <IoIosArrowBack aria-hidden="true" className="h-5 w-5" />
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

        <div className="mt-4 px-4 sm:px-6 lg:hidden">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <div className="hidden px-4 sm:px-6 lg:block lg:shrink-0 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex items-center gap-2 text-sm text-slate-500"
          >
            <Link to="/home" className="hover:text-slate-700">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-slate-800">{displayName}</span>
          </nav>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-6 px-4 pb-52 sm:px-6 lg:min-h-0 lg:flex-1 lg:grid-cols-12 lg:px-8 lg:pb-8">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-base font-semibold">Filters</h2>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-700"
                >
                  Clear all
                </button>
              </div>

              <div className="space-y-6">
                <section>
                  <h3 className="text-sm font-semibold">Categories</h3>
                  <div className="mt-3 space-y-3">
                    {categoryOptions.map((category) => (
                      <label key={category} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="h-4 w-4"
                        />
                        <span className="text-sm text-slate-700">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-semibold">Brands</h3>
                  <div className="mt-3 space-y-3">
                    {brandOptions.map((brand) => (
                      <label key={brand} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="h-4 w-4"
                        />
                        <span className="text-sm text-slate-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-sm font-semibold">Price Range</h3>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      min={0}
                      max={priceRange.max}
                      value={priceRange.min}
                      onChange={(event) =>
                        setPriceRange((current) => ({
                          ...current,
                          min: Number(event.target.value),
                        }))
                      }
                      className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-sm"
                    />
                    <input
                      type="number"
                      min={priceRange.min}
                      max={9999}
                      value={priceRange.max}
                      onChange={(event) =>
                        setPriceRange((current) => ({
                          ...current,
                          max: Number(event.target.value),
                        }))
                      }
                      className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-sm"
                    />
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    ₹{priceRange.min} - ₹{priceRange.max}
                  </p>
                </section>

                <section>
                  <h3 className="text-sm font-semibold">Availability</h3>
                  <label className="mt-3 flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={() => setInStockOnly((value) => !value)}
                      className="h-4 w-4"
                    />
                    <span className="text-sm text-slate-700">In Stock</span>
                  </label>
                </section>
              </div>
            </div>
          </aside>

          <div
            ref={productsPaneRef}
            className="lg:col-span-9 lg:min-h-0 lg:overflow-y-auto lg:pr-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="mb-4 hidden items-center justify-between lg:flex lg:sticky lg:top-0 lg:z-10 lg:bg-white lg:pb-3">
              <div>
                <h1 className="text-2xl font-semibold text-slate-900">
                  {displayName}
                </h1>
                <p className="text-sm text-slate-500">
                  {sortedItems.length} Products
                </p>
              </div>

              <label className="flex items-center gap-2 text-sm text-slate-600">
                <span>Sort By</span>
                <select
                  value={sortOption}
                  onChange={(event) =>
                    setSortOption(event.target.value as SortOption)
                  }
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-800"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </label>
            </div>

            {loading ? (
              <div
                aria-live="polite"
                role="status"
                className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
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
              <>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {visibleItems.length > 0 ? (
                    visibleItems.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  ) : (
                    <div className="col-span-2 mt-8 text-center text-slate-500 md:col-span-3 lg:col-span-4 xl:col-span-5">
                      No products match your search or filters.
                    </div>
                  )}
                </div>

                {hasMore ? (
                  <div className="mt-8 flex items-center justify-center">
                    <div
                      ref={sentinelRef}
                      className="h-10 w-full"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Loading more products</span>
                  </div>
                ) : null}
              </>
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

      <div className="lg:hidden">
        <StickyFooter />
      </div>
    </main>
  );
};

export default Products;
