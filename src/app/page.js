import Link from "next/link";
import StatusBar from "./components/StatusBar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BreedCard from "./components/BreedCard";
import BottomNav from "./components/BottomNav";
import "./globals.css";

export default function ListView() {
  return (
    <>
      <StatusBar />
      <Header />
      {/* <h2>ListView</h2>
      <Link href="/detailview">Go to DetailView</Link> */}
      <div className="mt-4">
        <SearchBar />
      </div>

      <div className="grid grid-cols-2 gap-4 px-5 mt-8">
        <BreedCard
          breedname="Affenpinscher"
          origin={"Northern,\nGermany"}
        />
        <BreedCard
          breedname="Afghan Hound"
          origin="Afghanistan"
        />
        <BreedCard
          breedname="Airedale Terrier"
          origin={"Yorkshire,\nEngland"}
        />
        <BreedCard
          breedname="Akbash"
          origin="Western Turkey"
        />
        <BreedCard breedname="" />
        <BreedCard breedname="Akita" />
      </div>

      <BottomNav active="home" />
    </>
  );
}
