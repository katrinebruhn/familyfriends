import Image from "next/image";
import { IoStar, IoStarOutline } from "react-icons/io5";

const BreedCard = ({
  breedname,
  origin,
  image = "/dummydog.jpg",
  isFavorite = false,
}) => {
  return (
    <article className="breed-card">
      <div className="relative">
        <Image
          src={image}
          width={400}
          height={400}
          alt={breedname}
          className="h-28 w-full object-cover rounded-2xl"
        />
        {isFavorite ? (
          <IoStar className="absolute top-2 right-2 size-9 rounded-full bg-white/30 p-2 text-white" />
        ) : (
          <IoStarOutline className="absolute top-2 right-2 size-9 rounded-full bg-white/30 p-2 text-white" />
        )}
      </div>
      <div className="breed-card-content">
        <h2>{breedname}</h2>
        <p>{origin}</p>
      </div>
    </article>
  );
};

export default BreedCard;
