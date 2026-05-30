import { create } from "zustand";

type ProductsState = {
  searchQuery: string;
  selectedCategories: string[];
  selectedBrands: string[];
  isFilterOpen: boolean;
  setSearchQuery: (query: string) => void;
  toggleCategory: (category: string) => void;
  toggleBrand: (brand: string) => void;
  openFilters: () => void;
  closeFilters: () => void;
  clearFilters: () => void;
};

const toggleValue = (values: string[], value: string) =>
  values.includes(value)
    ? values.filter((current) => current !== value)
    : [...values, value];

export const useProductsStore = create<ProductsState>((set) => ({
  searchQuery: "",
  selectedCategories: [],
  selectedBrands: [],
  isFilterOpen: false,
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleCategory: (category) =>
    set((state) => ({
      selectedCategories: toggleValue(state.selectedCategories, category),
    })),
  toggleBrand: (brand) =>
    set((state) => ({
      selectedBrands: toggleValue(state.selectedBrands, brand),
    })),
  openFilters: () => set({ isFilterOpen: true }),
  closeFilters: () => set({ isFilterOpen: false }),
  clearFilters: () => set({ selectedCategories: [], selectedBrands: [] }),
}));
