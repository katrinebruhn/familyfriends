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

      <div className="grid grid-cols-2 gap-4 px-5 mt-8 pb-24">
        {filteredBreeds.map((breed) => (
          <Link
            key={breed.id}
            href={`/detailview/${breed.id}`}
            className="block rounded-2xl focus-visible:outline-2"
          >
            <BreedCard
              breedname={breed.name}
              origin={breed.origin}
              image={breed.image?.url || "/dummydog.jpg"}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
