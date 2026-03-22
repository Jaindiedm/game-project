import { create } from "zustand";
import type { Genre } from "./hooks/useGenres";
import type { Platform } from "./hooks/useGame";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenre: (genre: Genre | null) => void;
  setPlatform: (platform: Platform | null) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText, genre: null, platform: null, sortOrder: "" } })),
  setGenre: (genre) => set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatform: (platform) => set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setSortOrder: (sortOrder) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
