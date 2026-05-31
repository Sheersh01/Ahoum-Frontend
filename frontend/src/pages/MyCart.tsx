import { useState } from "react";
import {
  IoFlashOutline,
  IoInformationCircleOutline,
  IoRefreshOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import StickyFooter from "../components/StickyFooter";
import CheckOut from "../components/CheckOut";
import EmptyState from "../components/EmptyState";
import { useNavigate } from "react-router";
import MinusIcon from "../assets/Minus.png";
import PlusIcon from "../assets/Plus.png";
import { useCartStore } from "../store/cartStore";
import type { CartItem } from "../types";
import HomeNav from "../components/HomeNav";
import Footer from "../components/Footer";

const formatCurrency = (value: number) => `₹${value.toFixed(2)}`;

const CartRow = ({
  item,
  onRemove,
  onChangeQty,
}: {
  item: CartItem;
  onRemove: (id: string) => void;
  onChangeQty: (id: string, qty: number) => void;
}) => {
  const lineTotal = item.price * item.qty;

  return (
    <article className="rounded-2xl bg-white p-4">
      <div className="relative flex items-start gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-16 w-16 shrink-0 rounded-lg object-contain lg:h-20 lg:w-20"
        />

        <div className="min-w-0 flex-1">
          <header className="mb-3 min-w-0">
            <div className="flex items-center justify-between gap-4">
              <h3 className="truncate text-sm font-semibold text-slate-900 lg:text-base">
                {item.name}
              </h3>
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                aria-label={`Remove ${item.name}`}
                className="text-xl leading-none text-slate-400 transition-colors hover:text-slate-600"
              >
                ×
              </button>
            </div>

            <p className="mt-1 text-xs text-slate-500 lg:text-sm">
              {item.meta}
            </p>
          </header>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onChangeQty(item.id, Math.max(1, item.qty - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white"
                aria-label={`Decrease ${item.name} quantity`}
              >
                <img
                  src={MinusIcon}
                  alt=""
                  className="h-3.5 w-3.5 object-contain"
                />
              </button>

              <div className="min-w-8 text-center text-sm font-semibold text-slate-900">
                {item.qty}
              </div>

              <button
                type="button"
                onClick={() => onChangeQty(item.id, item.qty + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white"
                aria-label={`Increase ${item.name} quantity`}
              >
                <img
                  src={PlusIcon}
                  alt=""
                  className="h-3.5 w-3.5 object-contain"
                />
              </button>
            </div>

            <div className="flex items-center gap-4 lg:gap-5">
              <p className="text-sm font-bold text-slate-900 lg:min-w-20 lg:text-right lg:text-base">
                {formatCurrency(lineTotal)}
              </p>

           
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const MyCart = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const changeQty = useCartStore((state) => state.changeQty);
  const clearCart = useCartStore((state) => state.clearCart);

  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = items.length > 0 ? Math.min(subtotal * 0.05, 23) : 0;
  const deliveryFee = items.length === 0 ? 0 : subtotal >= 500 ? 0 : 15;
  const total = Math.max(0, subtotal - discount + deliveryFee);

  const freeDeliveryThreshold = 500;
  const amountToFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);
  const freeDeliveryProgress = Math.min(
    100,
    (subtotal / freeDeliveryThreshold) * 100,
  );

  const [showCheckout, setShowCheckout] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/order-accepted");
  };

  return (
    <main className="min-h-screen w-full  font-sans text-slate-900">
      <div className="border-b border-slate-100 bg-white hidden lg:block">
        <HomeNav />
      </div>

      <section className="mx-auto w-full max-w-[1440px] px-4 pb-36 pt-4 sm:px-6 lg:px-8 lg:pb-10 lg:pt-4">
        <header className="mb-4 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-center sm:text-left  pb-3">
              <h1 className="text-2xl font-semibold">My Cart</h1>
            </div>
          </div>
        </header>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <div className="lg:rounded-2xl lg:border border-slate-200 bg-white p-1 lg:shadow-sm lg:p-5">
                <div className="mb-4 hidden lg:border-b border-slate-100 pb-2 text-sm font-semibold text-slate-500 lg:grid lg:grid-cols-[1fr_auto_auto_auto] lg:gap-4">
                  <span>Product</span>
                  <span>Quantity</span>
                  <span>Price</span>
                  <span />
                </div>

                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.id} className=" border-b border-slate-200">
                      <CartRow
                        item={item}
                        onRemove={removeItem}
                        onChangeQty={changeQty}
                      />
                    </li>
                  ))}
                </ul>

                <div className="mt-5 lg:flex items-center justify-start hidden">
                  <button
                    type="button"
                    onClick={clearCart}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 hidden lg:block">
              <div className="space-y-4 lg:sticky lg:top-24">
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Order Summary
                  </h2>
                  <div className="mt-5 space-y-3 text-sm">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>Subtotal ({itemCount} items)</span>
                      <span className="font-semibold text-slate-900">
                        {formatCurrency(subtotal)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <span>Discount</span>
                      <span className="font-semibold text-[#53B175]">
                        -{formatCurrency(discount)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600">
                      <div className="inline-flex items-center gap-1">
                        <span>Delivery Fee</span>
                        <IoInformationCircleOutline
                          className="h-4 w-4 text-slate-400"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-semibold text-slate-900">
                        {deliveryFee === 0
                          ? "FREE"
                          : formatCurrency(deliveryFee)}
                      </span>
                    </div>
                  </div>
                  <div className="my-4 h-px bg-slate-200" />
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Total</p>
                      <p className="text-xs text-slate-400">
                        Including VAT & taxes
                      </p>
                    </div>
                    <p className="text-3xl font-bold text-slate-900">
                      {formatCurrency(total)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowCheckout(true)}
                    className="mt-5 w-full rounded-xl bg-[#53B175] px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-[#489f66]"
                  >
                    Go to Checkout
                  </button>
                  <section className="rounded-2xl my-4 bg-[#f3f8f5] p-4">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#2f7a49]">
                      <IoFlashOutline className="h-4 w-4" aria-hidden="true" />
                      <span>
                        {amountToFreeDelivery > 0
                          ? `You're ${formatCurrency(amountToFreeDelivery)} away from free delivery!`
                          : "You unlocked free delivery!"}
                      </span>
                    </div>

                    <div className="h-2 w-full rounded-full bg-[#dbe8df]">
                      <div
                        className="h-2 rounded-full bg-[#53B175] transition-all"
                        style={{ width: `${freeDeliveryProgress}%` }}
                      />
                    </div>

                    <p className="mt-2 text-xs text-slate-600">
                      Add more items to save on delivery.
                    </p>
                  </section>
                  <section className="rounded-2xl mt-4 bg-white p-4">
                    <ul className="space-y-3 text-sm text-slate-600">
                      <li className="flex items-center gap-2">
                        <IoShieldCheckmarkOutline
                          className="h-4 w-4 text-slate-500"
                          aria-hidden="true"
                        />
                        <span>100% Secure Payments</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoRefreshOutline
                          className="h-4 w-4 text-slate-500"
                          aria-hidden="true"
                        />
                        <span>Easy Returns & Refunds</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoFlashOutline
                          className="h-4 w-4 text-slate-500"
                          aria-hidden="true"
                        />
                        <span>Fast Delivery</span>
                      </li>
                    </ul>
                  </section>{" "}
                </section>
              </div>
            </aside>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <EmptyState message="Your cart is empty. Add products from Home or Explore to start shopping." />
          </div>
        )}
      </section>

      {items.length > 0 && (
        <div className="fixed inset-x-0 bottom-24 z-[60] mx-auto w-full px-4 sm:px-6 lg:hidden">
          <div className="rounded-xl bg-[#53B175] p-4 text-white shadow-lg">
            <div className="flex items-center justify-between gap-4">
              <button
                className="text-base font-semibold"
                onClick={() => setShowCheckout(true)}
              >
                Go to Checkout
              </button>
              <div className="rounded-lg bg-white/20 px-3 py-1 text-sm font-semibold">
                {formatCurrency(total)}
              </div>
            </div>
          </div>
        </div>
      )}

      <CheckOut
        visible={showCheckout}
        onClose={() => setShowCheckout(false)}
        totalCost={formatCurrency(total)}
        onPlaceOrder={handlePlaceOrder}
      />

      <StickyFooter />
      <Footer />
    </main>
  );
};

export default MyCart;
