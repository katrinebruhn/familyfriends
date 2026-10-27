"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoStar } from "react-icons/io5";

const BreedDetailHero = ({ image, breedname }) => {
  const router = useRouter();
  return (
    <div className="relative px-5">
      <Image
        src={image}
        alt={breedname}
        width={400}
        height={400}
        className="w-full h-[370px] object-cover rounded-[30px]"
      />
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Tilbage til listen"
        className="absolute top-6 left-10 bg-white rounded-full p-2"
      >
        <IoIosArrowBack />
      </button>
      <IoStar className="absolute top-6 right-10 rounded-full bg-white/40 p-1.5 text-[32px] text-white" />

      <div className="absolute bottom-6 left-10 flex items-center gap-2 rounded-xl bg-white/40 p-2 text-white">
        <Image
          src={image}
          alt={breedname}
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-lg object-cover"
        />
        <span>{breedname}</span>
      </div>
    </div>
  );
};

export default BreedDetailHero;
