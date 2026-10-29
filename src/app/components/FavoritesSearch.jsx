"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import BreedCard from "./BreedCard";

export default function FavoritesSearch({ favorites }) {
  const [search, setSearch] = useState("");

  const filteredFavorites = favorites.filter((favorite) =>
    favorite.image?.breeds?.[0]?.name
      ?.toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="sticky top-0 z-40 bg-white py-4">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 px-5 pb-24">
        {filteredFavorites.map((favorite) => {
          const breed = favorite.image?.breeds?.[0];

          return (
            <div key={favorite.id} className="relative">
              {breed?.id && (
                <Link
                  href={`/detailview/${breed.id}`}
                  aria-label={`Se ${breed.name}`}
                  className="absolute inset-0 z-0 rounded-2xl"
                />
              )}

              <div className="pointer-events-none relative z-10">
                <BreedCard
                  breedname={breed.name}
                  origin={breed.origin || ""}
                  image={favorite.image.url}
                  imageId={favorite.image_id}
                  isFavorite={true}
                  favoriteId={favorite.id}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
