"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import SearchBar from "../../components/SearchBar";
import BreedCard from "../../components/BreedCard";
import { useFavoriteStore } from "../../store/favoriteStore";

export default function FavoritesSearch() {
  const [search, setSearch] = useState("");
  const [hydrated, setHydrated] = useState(false);

  const favorites = useFavoriteStore(
    (state) => state.favorites,
  );

  useEffect(() => {
    setHydrated(true);
  }, []);

  const filteredFavorites = favorites.filter((breed) =>
    breed.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Header />

      <h1 className="mt-2 mb-4 px-4 text-2xl font-semibold">
        My Favorites
      </h1>

      <div className="sticky top-0 z-40 bg-white py-4">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 px-5 pb-24">
        {hydrated &&
          filteredFavorites.map((breed) => (
            <div key={breed.id} className="relative">
              <Link
                href={`/detailview/${breed.id}`}
                className="absolute inset-0 z-0 rounded-2xl"
                aria-label={`Se ${breed.name}`}
              />

              <div className="pointer-events-none relative z-10">
                <BreedCard
                  id={breed.id}
                  breedname={breed.name}
                  origin={breed.origin}
                  image={
                    breed.image?.url || "/dummydog.jpg"
                  }
                />
              </div>
            </div>
          ))}
      </div>

      <BottomNav active="favorites" />
    </>
  );
}
