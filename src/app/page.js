import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import BreedSearch from "./components/BreedSearch";
import { Suspense } from "react";
import Loading from "./components/Loading";

export default function ListView() {
  return (
    <>
      <Header />

      <Suspense fallback={<Loading />}>
        <BreedList />
      </Suspense>

      <BottomNav active="home" />
    </>
  );
}

async function BreedList() {
  const response = await fetch(
    "https://api.thedogapi.com/v1/breeds",
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Kunne ikke hente hunderacer");
  }

  const breeds = await response.json();

  return <BreedSearch breeds={breeds} />;
}
