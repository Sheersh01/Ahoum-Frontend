import { create } from "zustand";
import { toast } from "react-toastify";

export type FavoriteItem = {
  id: string;
  name: string;
  meta: string;
  price: string;
  image: string;
};

type FavoritesState = {
  items: FavoriteItem[];
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (item: FavoriteItem) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  items: [],
  addFavorite: (item) =>
    set((state) => {
      const exists = state.items.some((favorite) => favorite.id === item.id);

      if (exists) {
        return state;
      }

      toast.success(`Added ${item.name} to favourites`);
      return { items: [...state.items, item] };
    }),
  removeFavorite: (id) =>
    set((state) => {
      const removed = state.items.find((item) => item.id === id);

      if (removed) {
        toast.info(`Removed ${removed.name} from favourites`);
      }

      return { items: state.items.filter((item) => item.id !== id) };
    }),
  toggleFavorite: (item) =>
    set((state) => {
      const exists = state.items.some((favorite) => favorite.id === item.id);

      if (exists) {
        toast.info(`Removed ${item.name} from favourites`);
        return {
          items: state.items.filter((favorite) => favorite.id !== item.id),
        };
      }

      toast.success(`Added ${item.name} to favourites`);
      return { items: [...state.items, item] };
    }),
  isFavorite: (id) => get().items.some((item) => item.id === id),
}));
