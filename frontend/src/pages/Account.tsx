import { Link } from "react-router";
import StickyFooter from "../components/StickyFooter";

type MenuItem = {
  label: string;
  description: string;
  to: string;
};

const menuItems: MenuItem[] = [
  {
    label: "My Orders",
    description: "Review order history and tracking status",
    to: "/track-order",
  },
  {
    label: "My Cart",
    description: "Continue to checkout with saved items",
    to: "/cart",
  },
  {
    label: "Favourites",
    description: "Open products you saved for later",
    to: "/favourite",
  },
  {
    label: "Support",
    description: "Get help, delivery updates, and account support",
    to: "/home",
  },
];

const Account = () => {
  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="mx-auto min-h-screen w-full  bg-white pb-[120px]">
        <header className="px-4 pt-4 text-center">
          <h1 className="text-[18px] font-semibold">Account</h1>
          <p className="mt-1 text-[12px] text-[#7c7c7c]">
            Manage your profile, orders, and saved items
          </p>
        </header>

        <div className="mt-5 px-4">
          <div className="rounded-[18px] bg-gradient-to-br from-[#53b175] to-[#46a267] p-5 text-white shadow-[0_12px_30px_rgba(83,177,117,0.18)]">
            <div className="flex items-center gap-4">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white/20 text-[20px] font-semibold">
                AH
              </div>
              <div className="min-w-0">
                <h2 className="truncate text-[16px] font-semibold">
                  Ahoum Customer
                </h2>
                <p className="mt-1 text-[12px] text-white/85">
                  ahoum.customer@email.com
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-[14px] bg-white/15 p-3">
                <div className="text-[11px] text-white/75">Total Orders</div>
                <div className="mt-1 text-[18px] font-semibold">12</div>
              </div>
              <div className="rounded-[14px] bg-white/15 p-3">
                <div className="text-[11px] text-white/75">Saved Items</div>
                <div className="mt-1 text-[18px] font-semibold">8</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4">
          <h3 className="text-[14px] font-semibold text-[#181725]">
            Quick Access
          </h3>
          <div className="mt-3 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="flex items-center justify-between rounded-[14px] border border-[#f0f0f0] bg-white px-4 py-3 transition-colors hover:bg-[#fafafa]"
              >
                <div>
                  <h4 className="text-[14px] font-semibold">{item.label}</h4>
                  <p className="mt-1 text-[12px] text-[#7c7c7c]">
                    {item.description}
                  </p>
                </div>
                <span className="text-[16px] text-[#9b9b9b]">›</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 px-4">
          <h3 className="text-[14px] font-semibold text-[#181725]">Settings</h3>
          <div className="mt-3 space-y-3 rounded-[14px] border border-[#f0f0f0] bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-semibold">Notifications</p>
                <p className="mt-1 text-[12px] text-[#7c7c7c]">
                  Receive updates for orders and offers
                </p>
              </div>
              <div className="h-[22px] w-[38px] rounded-full bg-[#53b175] p-[2px]">
                <div className="h-[18px] w-[18px] rounded-full bg-white shadow-sm" />
              </div>
            </div>

            <div className="h-px bg-[#f0f0f0]" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-semibold">Language</p>
                <p className="mt-1 text-[12px] text-[#7c7c7c]">English (US)</p>
              </div>
              <span className="text-[12px] font-semibold text-[#53b175]">
                Change
              </span>
            </div>

            <div className="h-px bg-[#f0f0f0]" />

            <button
              type="button"
              className="w-full rounded-xl border border-[#f0f0f0] py-3 text-[14px] font-semibold text-[#d74c4c]"
            >
              Log Out
            </button>
          </div>
        </div>
      </section>

      <StickyFooter />
    </main>
  );
};

export default Account;
