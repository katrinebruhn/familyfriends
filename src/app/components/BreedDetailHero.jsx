import Link from "next/link";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoStar } from "react-icons/io5";

const BreedDetailHero = ({ image, breedname }) => {
  return (
    <div className="relative px-5">
      <Image
        src={image}
        alt={breedname}
        width={400}
        height={400}
        className="w-full h-[370px] object-cover rounded-[30px]"
      />
      <Link
        href="/"
        aria-label="Tilbage til forsiden"
        className="absolute top-6 left-10 bg-white rounded-full p-2"
      >
        <IoIosArrowBack />
      </Link>
      <IoStar className="absolute top-6 right-10 rounded-full bg-white/40 p-1.5 text-[32px] text-white" />

      <div className="absolute bottom-6 left-10 flex items-center gap-2 rounded-xl bg-white/40 p-2 text-white">
        <Image
          src={image}
          alt={breedname}
          width={32}
          height={32}
          className="rounded-lg object-cover"
        />
        <span>{breedname}</span>
      </div>
    </div>
  );
};

export default BreedDetailHero;
