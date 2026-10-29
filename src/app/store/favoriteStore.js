import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteStore = create(
  persist(
    (set) => ({
      favorites: [],

      addFavorite: (breed) =>
        set((state) => ({
          favorites: state.favorites.some(
            (favorite) => favorite.id === breed.id,
          )
            ? state.favorites
            : [...state.favorites, breed],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (favorite) => favorite.id !== id,
          ),
        })),
    }),
    {
      name: "family-friends-favorites",
    },
  ),
);
