import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

const BreedCard = ({
  breedname,
  origin,
  image = "/dummydog.jpg",
  imageId,
  isFavorite,
  favoriteId,
}) => {
  return (
    <article className="breed-card">
      <div className="relative">
        <Image
          src={image}
          width={400}
          height={400}
          alt={breedname}
          className="h-40 w-full rounded-2xl object-cover object-center"
        />
        <div className="pointer-events-auto absolute top-2 right-2 z-20">
          <FavoriteButton
            imageId={imageId}
            isFavorite={isFavorite}
            favoriteId={favoriteId}
          />
        </div>
      </div>
      <div className="breed-card-content">
        <h2>{breedname}</h2>
        <p>{origin}</p>
      </div>
    </article>
  );
};

export default BreedCard;
