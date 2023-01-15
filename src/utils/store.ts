import { create } from "zustand";

type FilterStore = {
  searchQuery: string;
  search: string;
  popularity: string;
  time: string;
  setSearchQuery: (searchQuery: string) => void;
  setSearch: (search: string) => void;
  setPopularity: (popularity: string) => void;
  setTime: (time: string) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  searchQuery: "",
  search: "",
  popularity: "",
  time: "",

  setSearchQuery: (searchQuery: string) => set({ searchQuery }),
  setSearch: (search: string) => set({ search }),
  setPopularity: (popularity: string) => set({ popularity }),
  setTime: (time: string) => set({ time }),
}));
