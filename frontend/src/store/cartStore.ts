import { create } from "zustand";
import { toast } from "react-toastify";

export type CartItem = {
  id: string;
  name: string;
  meta: string;
  price: number;
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (id: string) => void;
  changeQty: (id: string, qty: number) => void;
  clearCart: () => void;
};

const mergeItem = (
  items: CartItem[],
  nextItem: Omit<CartItem, "qty">,
  qty: number,
) => {
  const existing = items.find((item) => item.id === nextItem.id);

  if (!existing) {
    return [...items, { ...nextItem, qty }];
  }

  return items.map((item) =>
    item.id === nextItem.id ? { ...item, qty: item.qty + qty } : item,
  );
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item, qty = 1) =>
    set((state) => {
      const existing = state.items.find((cartItem) => cartItem.id === item.id);
      const nextItems = mergeItem(state.items, item, qty);

      toast.success(
        existing
          ? `Updated ${item.name} in cart`
          : `Added ${item.name} to cart`,
      );

      return { items: nextItems };
    }),
  removeItem: (id) =>
    set((state) => {
      const removedItem = state.items.find((item) => item.id === id);

      if (removedItem) {
        toast.info(`Removed ${removedItem.name} from cart`);
      }

      return { items: state.items.filter((item) => item.id !== id) };
    }),
  changeQty: (id, qty) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, qty } : item,
      ),
    })),
  clearCart: () => {
    toast.info("Cart cleared");
    set({ items: [] });
  },
}));
