"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoStar, IoStarOutline } from "react-icons/io5";
import {
  addFavorite,
  removeFavorite,
} from "../actions/actions";

export default function FavoriteButton({
  imageId,
  isFavorite = false,
  favoriteId = null,
}) {
  const router = useRouter();

  const [isFavoriteClient, setIsFavoriteClient] =
    useState(isFavorite);
  const [favoriteIdClient, setFavoriteIdClient] =
    useState(favoriteId);
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if (isLoading || !imageId) return;

    setIsLoading(true);

    try {
      if (isFavoriteClient) {
        await removeFavorite(favoriteIdClient);
        setIsFavoriteClient(false);
        setFavoriteIdClient(null);
      } else {
        const favorite = await addFavorite(imageId);
        setIsFavoriteClient(true);
        setFavoriteIdClient(favorite.id);
      }

      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading || !imageId}
      aria-label={
        isFavoriteClient
          ? "Fjern favorit"
          : "Tilføj favorit"
      }
      aria-pressed={isFavoriteClient}
      className="rounded-full bg-white/50 p-1 text-xl text-white"
    >
      {isFavoriteClient ? <IoStar /> : <IoStarOutline />}
    </button>
  );
}
