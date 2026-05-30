import { NavLink } from "react-router";
import CartIcon from "../assets/cart.png";
import ExploreIcon from "../assets/explore.png";
import FavouriteIcon from "../assets/favourite.png";
import ProfileIcon from "../assets/profile.png";
import StoreIcon from "../assets/store.png";

const navItems = [
  {
    label: "Shop",
    to: "/home",
    icon: StoreIcon,
  },
  {
    label: "Explore",
    to: "/explore",
    icon: ExploreIcon,
  },
  {
    label: "Cart",
    to: "/cart",
    icon: CartIcon,
  },
  {
    label: "Favourite",
    to: "/favourite",
    icon: FavouriteIcon,
  },
  {
    label: "Account",
    to: "/account",
    icon: ProfileIcon,
  },
];

const StickyFooter = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto block lg:hidden h-[80px] w-full rounded-t-[16px] border border-[#f0f0f0] bg-white shadow-[0_-4px_18px_rgba(0,0,0,0.08)]">
      <div className="flex h-full items-start justify-around px-[26px] pt-[15px]">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `flex min-w-[45px] flex-col items-center gap-[7px] text-[13px] leading-none font-semibold ${
                isActive ? "text-[#53b175]" : "text-[#181725]"
              }`
            }
          >
            <img
              src={item.icon}
              alt=""
              className="h-[23px] w-[23px] object-contain"
            />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default StickyFooter;
