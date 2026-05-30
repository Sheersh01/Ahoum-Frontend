import { useState } from "react";
import StickyFooter from "../components/StickyFooter";
import CheckOut from "../components/CheckOut";
import EmptyState from "../components/EmptyState";
import { useNavigate } from "react-router";
import MinusIcon from "../assets/Minus.png";
import PlusIcon from "../assets/Plus.png";
import { useCartStore, type CartItem } from "../store/cartStore";

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
    <div className="py-4">
      <div className="relative flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-[64px] w-[64px] rounded-md object-contain"
        />

        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[14px] font-semibold">{item.name}</h3>
              <p className="mt-1 text-[12px] text-[#7c7c7c]">{item.meta}</p>
            </div>

            <button
              type="button"
              onClick={() => onRemove(item.id)}
              aria-label={`Remove ${item.name}`}
              className="text-[#9b9b9b]"
            >
              ×
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onChangeQty(item.id, Math.max(1, item.qty - 1))}
                className="flex h-[32px] w-[32px] items-center justify-center rounded-md border border-[#e8e8e8] bg-white"
              >
                <img
                  src={MinusIcon}
                  alt="-"
                  className="h-[14px] w-[14px] object-contain"
                />
              </button>

              <div className="min-w-[28px] text-center text-[14px]">
                {item.qty}
              </div>

              <button
                type="button"
                onClick={() => onChangeQty(item.id, item.qty + 1)}
                className="flex h-[32px] w-[32px] items-center justify-center rounded-md border border-[#e8e8e8] bg-white"
              >
                <img
                  src={PlusIcon}
                  alt="+"
                  className="h-[14px] w-[14px] object-contain"
                />
              </button>
            </div>

            <div className="text-[16px] font-bold">
              ${(item.price * item.qty).toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4 border-t border-[#f0f0f0]" />
    </div>
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
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="mx-auto w-full  pb-[140px]">
        <header className="pt-4 text-center">
          <h1 className="text-[18px] font-semibold">My Cart</h1>
        </header>

        <div className="mt-4 px-4">
          {items.length > 0 ? (
            items.map((item) => (
              <CartRow
                key={item.id}
                item={item}
                onRemove={removeItem}
                onChangeQty={changeQty}
              />
            ))
          ) : (
            <EmptyState message="Your cart is empty. Add products from Home or Explore to start shopping." />
          )}
        </div>
      </section>

      {items.length > 0 && (
        <div className="fixed left-0 right-0 bottom-[94px] z-40 mx-auto w-full  px-4">
          <div className="rounded-xl bg-[#53b175] p-4 text-white">
            <div className="flex items-center justify-between">
              <button
                className="text-[16px] font-semibold"
                onClick={() => setShowCheckout(true)}
              >
                Go to Checkout
              </button>
              <div className="rounded-[8px] bg-white/20 px-3 py-1 text-[14px] font-semibold">
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
