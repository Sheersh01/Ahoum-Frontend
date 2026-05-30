import { Link } from "react-router";
import SearchBar from "../components/SearchBar";
import AppleImage from "../assets/apple.png";
import BannerImage from "../assets/Banner.png";
import CarrotLogo from "../assets/carrotColored.png";
import LocationIcon from "../assets/locationIcon.png";
import PlusIcon from "../assets/Plus.png";
import StickyFooter from "../components/StickyFooter";
import VegetablesImage from "../assets/categories/vegetables.png";
import BakeryImage from "../assets/categories/bakery.png";
import EggsImage from "../assets/categories/eggs.png";
import MeatImage from "../assets/categories/meat.png";
import OilImage from "../assets/categories/oil.png";
import { useCartStore } from "../store/cartStore";

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
    <article className="flex h-[200px] w-[140px] shrink-0 flex-col rounded-[13px] border border-[#e2e2e2] bg-white px-[11px] pb-[11px] pt-[14px]">
      <Link
        to="/product-detail"
        state={{
          image: product.image,
          name: product.name,
          meta: product.meta,
          price: `$${product.price.toFixed(2)}`,
        }}
        className="flex h-[82px] items-center justify-center"
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`h-auto object-contain ${product.imageClassName ?? "w-[96px]"}`}
        />
      </Link>

      <h3 className="mt-[16px] text-[13px] leading-[16px] font-semibold text-[#181725]">
        {product.name}
      </h3>
      <p className="mt-[3px] text-[11px] leading-[13px] font-medium text-[#7c7c7c]">
        {product.meta}
      </p>

      <div className="mt-auto flex items-end justify-between">
        <p className="pb-[8px] text-[14px] leading-none font-bold text-[#181725]">
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
          className="flex h-[37px] w-[37px] items-center justify-center rounded-[13px] bg-[#53b175]"
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
};

const ProductSection = ({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) => {
  return (
    <section className="mt-[22px]">
      <div className="flex items-center justify-between px-[27px]">
        <h2 className="text-[20px] leading-[24px] font-semibold text-[#181725]">
          {title}
        </h2>
        <button
          type="button"
          className="text-[12px] leading-none font-semibold text-[#53b175]"
        >
          See all
        </button>
      </div>

      <div className="mt-[17px] flex gap-[13px] overflow-x-auto px-[27px] pb-[2px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
};

const GroceriesSection = () => {
  return (
    <section className="mt-[22px]">
      <div className="flex items-center justify-between px-[27px]">
        <h2 className="text-[20px] leading-[24px] font-semibold text-[#181725]">
          Groceries
        </h2>
        <button
          type="button"
          className="text-[12px] leading-none font-semibold text-[#53b175]"
        >
          See all
        </button>
      </div>

      <div className="mt-[18px] flex gap-[14px] overflow-x-auto px-[27px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {groceries.map((grocery) => (
          <button
            key={grocery.name}
            type="button"
            className={`flex h-[83px] w-[199px] shrink-0 items-center gap-[15px] rounded-[13px] px-[15px] ${grocery.className}`}
          >
            <img
              src={grocery.image}
              alt=""
              className="h-[58px] w-[58px] object-contain"
            />
            <span className="text-[16px] leading-none font-semibold text-[#3e423f]">
              {grocery.name}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-[16px] flex gap-[13px] overflow-x-auto px-[27px] pb-[2px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {groceryProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
};

const HomeScreen = () => {
  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="mx-auto min-h-screen w-full  overflow-hidden bg-white pb-[100px] pt-4">
        <div className="md:flex w-full items-center">
          <header className="pt-[20px] text-center md:w-[20%]">
            <img
              src={CarrotLogo}
              alt="Nectar"
              className="mx-auto h-[26px] w-[26px]"
            />
            <div className="mt-[7px] flex items-center justify-center gap-[6px]">
              <img src={LocationIcon} alt="" className="h-[16px] w-[12px]" />
              <p className="text-[14px] md:text-[12px] leading-none font-semibold text-[#4c4f4d]">
                Dhaka, Banassre
              </p>
            </div>
          </header>

          <div className="mt-[20px] px-[27px] md:w-[80%]">
            <SearchBar />
          </div>
        </div>

        <div className="mt-[17px] px-[27px]">
          <img
            src={BannerImage}
            alt="Fresh vegetables, get up to 40% off"
            className="h-auto w-full rounded-[8px]"
          />
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
