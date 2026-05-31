import { NavLink } from "react-router";
import ProfileIcon from "../assets/profile.png";
import { RiMenuSearchLine } from "react-icons/ri";
import { CiShop } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCartStore } from "../store/cartStore";

const navItems = [
  {
    label: "Shop",
    to: "/home",
    icon: "shop",
  },
  {
    label: "Explore",
    to: "/explore",
    icon: "explore",
  },
  {
    label: "Cart",
    to: "/cart",
    icon: "cart",
  },
  {
    label: "Favourite",
    to: "/favourite",
    icon: "heart",
  },
  {
    label: "Account",
    to: "/account",
    icon: ProfileIcon,
  },
];

const StickyFooter = () => {
  const cartCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.qty, 0),
  );

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
                  `flex min-w-11 flex-col items-center gap-2 text-xs font-semibold leading-none ${isActive ? "text-[#53B175]" : "text-slate-900"}`
                }
              >
                {item.icon === "heart" ? (
                  <FaRegHeart className="h-6 w-6" aria-hidden="true" />
                ) : item.icon === "cart" ? (
                  <span className="relative inline-flex">
                    <IoCartOutline aria-hidden="true" className="h-6 w-6" />
                    {cartCount > 0 ? (
                      <span className="absolute -bottom-1 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#53B175] px-1 text-[10px] font-semibold leading-none text-white">
                        {cartCount > 99 ? "99+" : cartCount}
                      </span>
                    ) : null}
                  </span>
                ) : item.icon === "shop" ? (
                  <CiShop className="h-6 w-6" aria-hidden="true" />
                ) : item.icon === "explore" ? (
                  <RiMenuSearchLine className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <img
                    src={item.icon}
                    alt=""
                    className="h-6 w-6 object-contain"
                  />
                )}
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
