"use client";

import Image from "next/image";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { useFavoriteStore } from "../store/favoriteStore";

const BreedCard = ({
  id,
  breedname,
  origin,
  image = "/dummydog.jpg",
}) => {
  const favorites = useFavoriteStore(
    (state) => state.favorites,
  );
  const addFavorite = useFavoriteStore(
    (state) => state.addFavorite,
  );
  const removeFavorite = useFavoriteStore(
    (state) => state.removeFavorite,
  );

  const isFavorite = favorites.some(
    (favorite) => favorite.id === id,
  );

  function handleFavorite(event) {
    event.preventDefault();
    event.stopPropagation();

    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({
        id,
        name: breedname,
        origin,
        image: { url: image },
      });
    }
  }

  return (
    <article className="breed-card">
      <div className="relative">
        <Image
          src={image}
          width={400}
          height={400}
          alt={breedname}
          className="h-40 w-full rounded-2xl object-cover object-center"
        />

        <button
          type="button"
          onClick={handleFavorite}
          className="pointer-events-auto absolute top-2 right-2 z-20"
          aria-label={
            isFavorite ? "Fjern favorit" : "Tilføj favorit"
          }
        >
          {isFavorite ? (
            <IoStar className="size-9 rounded-full bg-white/30 p-2 text-white" />
          ) : (
            <IoStarOutline className="size-9 rounded-full bg-white/30 p-2 text-white" />
          )}
        </button>
      </div>

      <div className="breed-card-content">
        <h2>{breedname}</h2>
        <p>{origin}</p>
      </div>
    </article>
  );
};

export default BreedCard;
