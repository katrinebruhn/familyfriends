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
    throw new Error("Kunne ikke gemme favorit");
  }

  return response.json();
};
