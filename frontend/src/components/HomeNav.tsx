import SearchBar from "./SearchBar";
import CarrotLogo from "../assets/carrotColored.png";
import profileIcon from "../assets/profile.png";
import { IoCartOutline, IoLocationSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useCartStore } from "../store/cartStore";
import { Link } from "react-router";

const HomeNav = () => {
  const cartCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.qty, 0),
  );

  return (
    <div className="w-full md:flex md:items-center my-4">
      <header className="pt-5 text-center md:w-1/5 md:pt-0">
        <Link
          to="/home"
          aria-label="Go to home"
          className="inline-flex items-center justify-center"
        >
          <img src={CarrotLogo} alt="Nectar" className="mx-auto h-6.5 w-6.5" />
        </Link>
        <div className="mt-2 flex items-center justify-center gap-1.5">
          <IoLocationSharp
            aria-hidden="true"
            className="h-4 w-3 text-slate-600"
          />
          <p className="text-sm font-semibold leading-none text-slate-600 md:text-xs">
            Dhaka, Banassre
          </p>
        </div>
      </header>

      <div className="mt-5 px-4 sm:px-6 md:mt-0 md:w-3/5 md:px-8">
        <SearchBar />
      </div>
      <div className="mt-5 lg:flex items-center justify-end gap-4 px-4 sm:px-6 md:mt-0 md:w-1/5 md:px-8 hidden">
        <Link
          to="/favourite"
          aria-label="Go to favourites"
          className="inline-flex items-center justify-center"
        >
          <FaRegHeart aria-hidden="true" className="h-5 w-5" />
        </Link>

        <Link
          to="/account"
          aria-label="Go to account"
          className="inline-flex items-center justify-center"
        >
          <img src={profileIcon} alt="Profile" className="h-5 w-5" />
        </Link>

        <Link
          to="/cart"
          aria-label="Go to cart"
          className="relative inline-flex items-center justify-center"
        >
          <IoCartOutline aria-hidden="true" className="h-5 w-5" />
          {cartCount > 0 ? (
            <span className="absolute -bottom-1 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#53B175] px-1 text-[10px] font-semibold leading-none text-white">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          ) : null}
        </Link>
      </div>
    </div>
  );
};

export default HomeNav;
