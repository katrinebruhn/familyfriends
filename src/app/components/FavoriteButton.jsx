"use client";

import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { addFavorite } from "../actions/actions";

export default function FavoriteButton({ imageId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  async function handleClick() {
    try {
      await addFavorite(imageId);
      setIsFavorite(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-white text-xl rounded-full bg-white/50 p-1"
    >
      {isFavorite ? <IoStar /> : <IoStarOutline />}
    </button>
  );
}
