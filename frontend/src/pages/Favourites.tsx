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
  const items = useFavoritesStore((state) => state.items);

  const addAllToCart = () => {
    console.log("Add all to cart", items);
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="mx-auto w-full  pb-[140px]">
        <header className="pt-4 text-center">
          <h1 className="text-[18px] font-semibold">Favourite</h1>
        </header>

        <div className="mt-4 px-4">
          {items.length > 0 ? (
            items.map((it) => <FavRow key={it.id} item={it} />)
          ) : (
            <EmptyState message="Your favourites list is empty. Tap the heart icon on any product to save it here." />
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-6 px-4">
            <button
              type="button"
              onClick={addAllToCart}
              className="w-full rounded-xl bg-[#53b175] py-3 text-white font-semibold"
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
