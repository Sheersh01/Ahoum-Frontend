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

type Product = {
  name: string;
  meta: string;
  price: string;
  image: string;
  imageClassName?: string;
};

const exclusiveOffers: Product[] = [
  {
    name: "Organic Bananas",
    meta: "7pcs, Priceg",
    price: "$4.99",
    image: VegetablesImage,
    imageClassName: "w-[92px]",
  },
  {
    name: "Red Apple",
    meta: "1kg, Priceg",
    price: "$4.99",
    image: AppleImage,
    imageClassName: "w-[98px]",
  },
];

const bestSelling: Product[] = [
  {
    name: "Fresh Vegetables",
    meta: "1kg, Priceg",
    price: "$3.99",
    image: VegetablesImage,
    imageClassName: "w-[100px]",
  },
  {
    name: "Bakery Snacks",
    meta: "325gm, Priceg",
    price: "$2.99",
    image: BakeryImage,
    imageClassName: "w-[94px]",
  },
  {
    name: "White Eggs",
    meta: "12pcs, Priceg",
    price: "$1.99",
    image: EggsImage,
    imageClassName: "w-[96px]",
  },
];

const groceryProducts: Product[] = [
  {
    name: "Beef Bone",
    meta: "1kg, Priceg",
    price: "$4.99",
    image: MeatImage,
    imageClassName: "w-[96px]",
  },
  {
    name: "Broiler Chicken",
    meta: "1kg, Priceg",
    price: "$4.99",
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
  return (
    <article className="flex h-[200px] w-[140px] shrink-0 flex-col rounded-[13px] border border-[#e2e2e2] bg-white px-[11px] pb-[11px] pt-[14px]">
      <Link
        to="/product-detail"
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
          {product.price}
        </p>
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
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
      <section className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-white pb-[28px]">
        <header className="pt-[20px] text-center">
          <img
            src={CarrotLogo}
            alt="Nectar"
            className="mx-auto h-[26px] w-[26px]"
          />
          <div className="mt-[7px] flex items-center justify-center gap-[6px]">
            <img src={LocationIcon} alt="" className="h-[16px] w-[12px]" />
            <p className="text-[14px] leading-none font-semibold text-[#4c4f4d]">
              Dhaka, Banassre
            </p>
          </div>
        </header>

        <div className="mt-[20px] px-[27px]">
          <SearchBar />
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
