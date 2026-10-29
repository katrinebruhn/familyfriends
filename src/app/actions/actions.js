"use server";

export const addFavorite = async (Id) => {
  const response = await fetch(
    "https://api.thedogapi.com/v1/favourites",
    {
      method: "POST",
      headers: {
        "x-api-key": process.env.API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_id: Id,
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `API-fejl ${response.status}: ${errorText}`,
    );
  }

  return response.json();
};

export const getFavorites = async () => {
  const response = await fetch(
    "https://api.thedogapi.com/v1/favourites",
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Kunne ikke hente favoritter");
  }

  return response.json();
};

export const removeFavorite = async (favoriteId) => {
  const response = await fetch(
    `https://api.thedogapi.com/v1/favourites/${favoriteId}`,
    {
      method: "DELETE",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Kunne ikke fjerne favorit");
  }
};
