import { useState } from "react";
import StickyFooter from "../components/StickyFooter";
import CheckOut from "../components/CheckOut";
import EmptyState from "../components/EmptyState";
import { useNavigate } from "react-router";
import MinusIcon from "../assets/Minus.png";
import PlusIcon from "../assets/Plus.png";
import { useCartStore } from "../store/cartStore";
import type { CartItem } from "../types";

const CartRow = ({
  item,
  onRemove,
  onChangeQty,
}: {
  item: CartItem;
  onRemove: (id: string) => void;
  onChangeQty: (id: string, qty: number) => void;
}) => {
  return (
    <article className="py-4">
      <div className="relative flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-16 w-16 shrink-0 rounded-lg object-contain"
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between">
            <header className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-slate-900">
                {item.name}
              </h3>
              <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
            </header>

            <button
              type="button"
              onClick={() => onRemove(item.id)}
              aria-label={`Remove ${item.name}`}
              className="text-slate-400"
            >
              ×
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onChangeQty(item.id, Math.max(1, item.qty - 1))}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white"
              >
                <img
                  src={MinusIcon}
                  alt="-"
                  className="h-3.5 w-3.5 object-contain"
                />
              </button>

              <div className="min-w-7 text-center text-sm font-medium text-slate-900">
                {item.qty}
              </div>

              <button
                type="button"
                onClick={() => onChangeQty(item.id, item.qty + 1)}
                className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white"
              >
                <img
                  src={PlusIcon}
                  alt="+"
                  className="h-3.5 w-3.5 object-contain"
                />
              </button>
            </div>

            <div className="text-base font-bold text-slate-900">
              ${(item.price * item.qty).toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4 border-t border-slate-100" />
    </article>
  );
};

const MyCart = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const changeQty = useCartStore((state) => state.changeQty);

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);

  const [showCheckout, setShowCheckout] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // navigate to order accepted page after placing order
    navigate("/order-accepted");
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-slate-900">
      <section className="mx-auto w-full pb-36">
        <header className="pt-4 text-center">
          <h1 className="text-lg font-semibold">My Cart</h1>
        </header>

        <div className="mt-4 px-4 sm:px-6 lg:px-8">
          {items.length > 0 ? (
            <ul className="divide-y divide-slate-100">
              {items.map((item) => (
                <li key={item.id}>
                  <CartRow
                    item={item}
                    onRemove={removeItem}
                    onChangeQty={changeQty}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState message="Your cart is empty. Add products from Home or Explore to start shopping." />
          )}
        </div>
      </section>

      {items.length > 0 && (
        <div className="fixed inset-x-0 bottom-24 z-[60] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-[#53B175] p-4 text-white shadow-lg">
            <div className="flex items-center justify-between gap-4">
              <button
                className="text-base font-semibold"
                onClick={() => setShowCheckout(true)}
              >
                Go to Checkout
              </button>
              <div className="rounded-lg bg-white/20 px-3 py-1 text-sm font-semibold">
                ${subtotal.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )}

      <CheckOut
        visible={showCheckout}
        onClose={() => setShowCheckout(false)}
        totalCost={`$${subtotal.toFixed(2)}`}
        onPlaceOrder={handlePlaceOrder}
      />

      <StickyFooter />
    </main>
  );
};

export default MyCart;
