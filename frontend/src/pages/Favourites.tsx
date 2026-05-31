import { Link } from "react-router";
import StickyFooter from "../components/StickyFooter";
import EmptyState from "../components/EmptyState";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useFavoritesStore, type FavoriteItem } from "../store/favoritesStore";
import { useCartStore } from "../store/cartStore";
import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";

const parsePrice = (priceStr: string) => {
  const num = priceStr.replace(/[^0-9.]/g, "");
  return num ? parseFloat(num) : 0;
};

const FavCard = ({ item }: { item: FavoriteItem }) => {
  const remove = useFavoritesStore((s) => s.removeFavorite);
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(
      {
        id: item.id,
        name: item.name,
        meta: item.meta,
        price: parsePrice(item.price),
        image: item.image,
      },
      1,
    );
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(item.id);
  };

  return (
    <div className="group relative block rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
      <Link
        to="/product-detail"
        state={{
          image: item.image,
          name: item.name,
          meta: item.meta,
          price: item.price,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 flex flex-col items-stretch gap-3">
        <button
          onClick={handleRemove}
          aria-label="Remove from favourites"
          className="self-end rounded-full bg-white p-2 text-red-500 shadow-sm"
        >
          <FaHeart aria-hidden="true" className="h-4 w-4" />
        </button>

        <div className="flex grow items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="h-36 w-full object-contain"
          />
        </div>

        <div className="mt-2">
          <h3 className="text-sm font-semibold text-slate-900">{item.name}</h3>
          <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <div className="text-sm font-bold text-slate-900">{item.price}</div>
          <button
            type="button"
            onClick={handleAdd}
            className="rounded-md bg-[#53B175] px-3 py-2 text-xs font-semibold text-white"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Favourites = () => {
  const items = useFavoritesStore((state) => state.items);
  const addItem = useCartStore((s) => s.addItem);
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite);

  const addAllToCart = () => {
    items.forEach((it) => {
      addItem(
        {
          id: it.id,
          name: it.name,
          meta: it.meta,
          price: parsePrice(it.price),
          image: it.image,
        },
        1,
      );
    });
  };

  const clearWishlist = () => {
    items.forEach((it) => removeFavorite(it.id));
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-slate-900">
      <div className="hidden lg:block">
        <HomeNav />
      </div>
      <section className="mx-auto w-full pb-36">
        <header className="pt-6 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-center sm:text-left  pb-3">
              <h1 className="text-2xl font-semibold">Favourite Items</h1>
            
            </div>

            <div className="mt-3 hidden gap-3 sm:flex sm:mt-0">
              <button
                type="button"
                onClick={addAllToCart}
                disabled={items.length === 0}
                className="rounded-lg bg-[#53B175] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              >
                Add All To Cart
              </button>

              <button
                type="button"
                onClick={clearWishlist}
                disabled={items.length === 0}
                className="rounded-lg border border-[#53B175] bg-white px-4 py-2 text-sm font-semibold text-[#53B175] disabled:opacity-50"
              >
                Clear Wishlist
              </button>
            </div>
          </div>
        </header>

        <div className="lg:mt-6 px-4 sm:px-6 lg:px-8">
          {items.length > 0 ? (
            <>
              {/* Mobile list view - preserve original mobile UI */}
              <ul className="divide-y divide-slate-100 sm:hidden">
                {items.map((it) => (
                  <li key={it.id}>
                    <div className="">
                      <div className="flex items-center justify-between gap-4 py-2">
                        <div className="flex items-center gap-4">
                          <img
                            src={it.image}
                            alt={it.name}
                            className="h-14 w-14 shrink-0 object-contain"
                          />
                          <div className="">
                            <h3 className="text-sm font-semibold text-slate-900">
                              {it.name}
                            </h3>
                            <p className="mt-1 text-xs text-slate-500">
                              {it.meta}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-sm font-semibold text-slate-900">
                            {it.price}
                          </div>
                          <Link
                            to="/product-detail"
                            state={{
                              image: it.image,
                              name: it.name,
                              meta: it.meta,
                              price: it.price,
                            }}
                            aria-label={`Open ${it.name}`}
                            className="inline-flex items-center text-slate-400"
                          >
                            <IoIosArrowForward
                              aria-hidden="true"
                              className="h-4 w-4"
                            />
                          </Link>
                        </div>
                      </div>

                      <hr className="mt-4 border-t border-slate-100" />
                    </div>
                  </li>
                ))}
              </ul>

              {/* Mobile CTA: fixed above footer on small screens */}
              <div className="sm:hidden fixed left-4 right-4 bottom-24 z-40">
                <button
                  type="button"
                  onClick={addAllToCart}
                  disabled={items.length === 0}
                  className="w-full rounded-xl bg-[#53B175] py-3 font-semibold text-white disabled:opacity-50 shadow-lg"
                >
                  Add All To Cart
                </button>
              </div>

              {/* Desktop grid */}
              <div className="hidden grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {items.map((it) => (
                  <div key={it.id}>
                    <FavCard item={it} />
                  </div>
                ))}
              </div>

              {/* Desktop-only notice */}
              <div className="mt-8 hidden rounded-lg border border-slate-100 bg-slate-50 p-4 items-center justify-between gap-4 sm:flex">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F6EE]">
                    <FaHeart
                      aria-hidden="true"
                      className="text-[#53B175] h-5 w-5"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Don't see something you saved?
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Some products might be out of stock. We'll move them to
                      your cart when they're available.
                    </p>
                  </div>
                </div>

                <div>
                  <Link
                    to="/products"
                    className="rounded-lg border border-[#53B175] bg-white px-4 py-2 text-sm font-semibold text-[#53B175]"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="mt-12">
              <EmptyState message="Your favourites list is empty. Save products you like and they'll appear here." />
              <div className="mt-6 flex justify-center">
                <Link
                  to="/products"
                  className="rounded-lg bg-[#53B175] px-5 py-3 text-sm font-semibold text-white"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <StickyFooter />
      <Footer />
    </main>
  );
};

export default Favourites;
