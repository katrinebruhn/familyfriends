"use client";

import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { useFavoriteStore } from "../store/favoriteStore";

const BreedDetailHero = ({
  id,
  image,
  breedname,
  origin,
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

  function handleFavorite() {
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
    <div className="relative px-5">
      <Image
        src={image}
        alt={breedname}
        width={400}
        height={400}
        className="h-[370px] w-full rounded-[30px] object-cover"
      />

      <Link
        href="/"
        aria-label="Tilbage til forsiden"
        className="absolute top-6 left-10 rounded-full bg-white p-2"
      >
        <IoIosArrowBack />
      </Link>

      <button
        type="button"
        onClick={handleFavorite}
        className="absolute top-6 right-10"
        aria-label={
          isFavorite ? "Fjern favorit" : "Tilføj favorit"
        }
      >
        {isFavorite ? (
          <IoStar className="rounded-full bg-white/40 p-1.5 text-[32px] text-white" />
        ) : (
          <IoStarOutline className="rounded-full bg-white/40 p-1.5 text-[32px] text-white" />
        )}
      </button>

      <div className="absolute bottom-6 left-10 flex items-center gap-2 rounded-xl bg-white/40 p-2 text-white">
        <Image
          src={image}
          alt={breedname}
          width={32}
          height={32}
          className="rounded-lg object-cover"
        />
        <span>{breedname}</span>
      </div>
    </div>
  );
};

export default BreedDetailHero;
