import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import BreedSearch from "./components/BreedSearch";
import Loading from "./components/Loading";
import { Suspense } from "react";

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

  const breeds = await response.json();

  return <BreedSearch breeds={breeds} />;
}
