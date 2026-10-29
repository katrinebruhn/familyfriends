"use client";

import { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import BreedCard from "./BreedCard";

export default function BreedSearch({ breeds }) {
  const [search, setSearch] = useState("");

  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="sticky top-0 z-40 bg-white py-4">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 px-5 pb-24">
        {filteredBreeds.map((breed) => (
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
                image={breed.image?.url || "/dummydog.jpg"}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
