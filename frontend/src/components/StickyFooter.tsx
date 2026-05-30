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
    <footer className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <nav
        aria-label="Primary"
        className="mx-auto w-full rounded-t-2xl border border-slate-100 bg-white/95 shadow-[0_-0.25rem_1.125rem_rgba(0,0,0,0.08)] backdrop-blur"
      >
        <ul className="flex h-20 items-start justify-around px-6 pt-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex min-w-11 flex-col items-center gap-2 text-xs font-semibold leading-none ${
                    isActive ? "text-brand" : "text-slate-900"
                  }`
                }
              >
                <img
                  src={item.icon}
                  alt=""
                  className="h-6 w-6 object-contain"
                />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default StickyFooter;
