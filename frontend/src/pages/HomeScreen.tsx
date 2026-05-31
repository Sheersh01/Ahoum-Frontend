import { Link } from "react-router";
import AppleImage from "../assets/apple.png";
import BannerImage from "../assets/Banner.png";
import PlusIcon from "../assets/Plus.png";
import StickyFooter from "../components/StickyFooter";
import VegetablesImage from "../assets/categories/fruits-vegetables.png";
import BakeryImage from "../assets/categories/bakery-biscuits.png";
import EggsImage from "../assets/categories/dairy-bread-eggs.png";
import MeatImage from "../assets/categories/chicken-meat-fish.png";
import OilImage from "../assets/categories/masala-oil-more.png";
import { useCartStore } from "../store/cartStore";
import HomeNav from "../components/HomeNav";
import CategoryTabs from "../components/CategoryTabs";

type Product = {
  id: string;
  name: string;
  meta: string;
  price: number;
  image: string;
  imageClassName?: string;
};

const exclusiveOffers: Product[] = [
  {
    id: "organic-bananas-home",
    name: "Organic Bananas",
    meta: "7pcs, Price",
    price: 4.99,
    image: VegetablesImage,
    imageClassName: "w-[92px]",
  },
  {
    id: "red-apple-home",
    name: "Red Apple",
    meta: "1kg, Price",
    price: 4.99,
    image: AppleImage,
    imageClassName: "w-[98px]",
  },
];

const bestSelling: Product[] = [
  {
    id: "fresh-vegetables-home",
    name: "Fresh Vegetables",
    meta: "1kg, Price",
    price: 3.99,
    image: VegetablesImage,
    imageClassName: "w-[100px]",
  },
  {
    id: "bakery-snacks-home",
    name: "Bakery Snacks",
    meta: "325gm, Price",
    price: 2.99,
    image: BakeryImage,
    imageClassName: "w-[94px]",
  },
  {
    id: "white-eggs-home",
    name: "White Eggs",
    meta: "12pcs, Price",
    price: 1.99,
    image: EggsImage,
    imageClassName: "w-[96px]",
  },
];

const groceryProducts: Product[] = [
  {
    id: "beef-bone-home",
    name: "Beef Bone",
    meta: "1kg, Price",
    price: 4.99,
    image: MeatImage,
    imageClassName: "w-[96px]",
  },
  {
    id: "broiler-chicken-home",
    name: "Broiler Chicken",
    meta: "1kg, Price",
    price: 4.99,
    image: EggsImage,
    imageClassName: "w-[98px]",
  },
];

const groceries = [
  {
    name: "Pulses",
    image: OilImage,
    className: "bg-[#fef1e4]",
  },
  {
    name: "Rice",
    image: BakeryImage,
    className: "bg-[#e5f3ea]",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <article className="flex h-50 w-35 shrink-0 flex-col rounded-xl border border-slate-200 bg-white px-3 pb-3 pt-3.5">
      <Link
        to="/product-detail"
        state={{
          image: product.image,
          name: product.name,
          meta: product.meta,
          price: `$${product.price.toFixed(2)}`,
        }}
        className="flex h-20 items-center justify-center"
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`h-auto object-contain ${product.imageClassName ?? "w-24"}`}
        />
      </Link>

      <h3 className="mt-4 text-[0.8125rem] leading-4 font-semibold text-slate-900">
        {product.name}
      </h3>
      <p className="mt-0.5 text-[0.6875rem] leading-3.5 font-medium text-slate-500">
        {product.meta}
      </p>

      <div className="mt-auto flex items-end justify-between">
        <p className="pb-2 text-sm leading-none font-bold text-slate-900">
          ${product.price.toFixed(2)}
        </p>
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
          onClick={() =>
            addItem({
              id: product.id,
              name: product.name,
              meta: product.meta,
              price: product.price,
              image: product.image,
            })
          }
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#53B175]"
        >
          <img
            src={PlusIcon}
            alt=""
            className="h-3.5 w-3.5 brightness-0 invert"
          />
        </button>
      </div>
    </article>
  );
};

const ProductSection = ({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) => {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold leading-6 text-slate-900">
          {title}
        </h2>
        <button
          type="button"
          className="text-xs font-semibold leading-none text-brand"
        >
          See all
        </button>
      </div>

      <ul className="scrollbar-none mt-4 flex gap-3 overflow-x-auto px-4 pb-0.5 sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <li key={product.name}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const GroceriesSection = () => {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold leading-6 text-slate-900">
          Groceries
        </h2>
        <button
          type="button"
          className="text-xs font-semibold leading-none text-brand"
        >
          See all
        </button>
      </div>

      <div className="scrollbar-none mt-4 flex gap-3 overflow-x-auto px-4 sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden">
        {groceries.map((grocery) => (
          <button
            key={grocery.name}
            type="button"
            className={`flex h-20 w-48 shrink-0 items-center gap-4 rounded-xl px-4 ${grocery.className}`}
          >
            <img
              src={grocery.image}
              alt=""
              className="h-14 w-14 object-contain"
            />
            <span className="text-base font-semibold leading-none text-slate-700">
              {grocery.name}
            </span>
          </button>
        ))}
      </div>

      <ul className="scrollbar-none mt-4 flex gap-3 overflow-x-auto px-4 pb-0.5 sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden">
        {groceryProducts.map((product) => (
          <li key={product.name}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const HomeScreen = () => {
  return (
    <main className="min-h-screen w-full bg-white font-sans text-slate-900">
      <section className="mx-auto min-h-screen w-full overflow-hidden bg-white pb-24">
        <HomeNav />

        <div className="mt-4 px-4 sm:px-6 lg:px-8">
          <img
            src={BannerImage}
            alt="Fresh vegetables, get up to 40% off"
            className="h-auto w-full rounded-lg"
          />
        </div>
        <div className="hidden lg:block">
          <h1 className="my-6 px-4 text-2xl font-semibold leading-6 text-slate-900 lg:px-8">
            Explore
            <div className="mt-4">
              <CategoryTabs />
            </div>
          </h1>
        </div>
        <ProductSection title="Exclusive Offer" products={exclusiveOffers} />
        <ProductSection title="Best Selling" products={bestSelling} />
        <GroceriesSection />
      </section>
      <StickyFooter />
    </main>
  );
};

export default HomeScreen;
