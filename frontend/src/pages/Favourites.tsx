import { Link } from "react-router";
import StickyFooter from "../components/StickyFooter";
import EmptyState from "../components/EmptyState";
import FrontArrow from "../assets/Front-Arrow.png";
import { useFavoritesStore, type FavoriteItem } from "../store/favoritesStore";

const FavRow = ({ item }: { item: FavoriteItem }) => (
  <Link
    to="/product-detail"
    state={{
      image: item.image,
      name: item.name,
      meta: item.meta,
      price: item.price,
    }}
    className="block"
  >
    <article className="py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="h-14 w-14 shrink-0 object-contain"
          />
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              {item.name}
            </h3>
            <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm font-semibold text-slate-900">
            {item.price}
          </div>
          <img src={FrontArrow} alt="" className="h-3.5 w-3.5" />
        </div>
      </div>

      <hr className="mt-4 border-t border-slate-100" />
    </article>
  </Link>
);

const Favourites = () => {
  const items = useFavoritesStore((state) => state.items);

  const addAllToCart = () => {
    console.log("Add all to cart", items);
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-slate-900">
      <section className="mx-auto w-full pb-36">
        <header className="pt-4 text-center">
          <h1 className="text-lg font-semibold">Favourite</h1>
        </header>

        <div className="mt-4 px-4 sm:px-6 lg:px-8">
          {items.length > 0 ? (
            <ul className="divide-y divide-slate-100">
              {items.map((it) => (
                <li key={it.id}>
                  <FavRow item={it} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState message="Your favourites list is empty. Tap the heart icon on any product to save it here." />
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-6 px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={addAllToCart}
              className="w-full rounded-xl bg-[#53B175] py-3 font-semibold text-white"
            >
              Add All To Cart
            </button>
          </div>
        )}
      </section>

      <StickyFooter />
    </main>
  );
};

export default Favourites;
