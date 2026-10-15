import Link from "next/link";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BreedCard from "./components/BreedCard";
import BottomNav from "./components/BottomNav";

export default function ListView() {
  return (
    <>
      <Header />
      <div className="mt-4">
        <SearchBar />
      </div>

      <div className="flex gap-4 px-5 mt-8 pb-24">
        <div className="flex flex-1 flex-col gap-4">
          <Link
            href="/detailview"
            className="block rounded-2xl focus-visible:outline-2 focus-visible:outline"
          >
            <BreedCard
              breedname="Affenpinscher"
              origin={"Northern,\nGermany"}
              isFavorite={true}
            />
          </Link>
          <BreedCard
            breedname="Airedale Terrier"
            origin={"Yorkshire,\nEngland"}
          />
          <BreedCard breedname="Samoyed" />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <BreedCard
            breedname="Afghan Hound"
            origin="Afghanistan"
          />
          <BreedCard
            breedname="Akbash"
            origin="Western Turkey"
          />
          <BreedCard breedname="Akita" />
        </div>
      </div>

      <BottomNav active="home" />
    </>
  );
}
