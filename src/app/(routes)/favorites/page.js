import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import FavoritesSearch from "../../components/FavoritesSearch";
import { getFavorites } from "../../actions/actions";

export default async function FavoritesPage() {
  const favorites = await getFavorites();

  const favoritesWithImages = favorites.filter(
    (favorite) =>
      favorite.image?.url &&
      favorite.image?.breeds?.[0]?.name,
  );

  return (
    <>
      <Header />

      <h1 className="mt-2 mb-4 px-4 text-2xl font-semibold">
        My Favorites
      </h1>

      <FavoritesSearch favorites={favoritesWithImages} />

      <BottomNav active="favorites" />
    </>
  );
}
