import Header from "../../../components/Header";
import BottomNav from "../../../components/BottomNav";
import BreedDetailHero from "../../../components/BreedDetailHero";
import BreedTag from "../../../components/BreedTag";
import { notFound } from "next/navigation";

export default async function DetailView({ params }) {
  const { id } = await params;

  const response = await fetch(
    `https://api.thedogapi.com/v1/breeds/${id}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    },
  );

  if (!response.ok) {
    notFound();
  }

  const breed = await response.json();

  const tags =
    breed.temperament?.split(", ").slice(0, 4) || [];

  const tagColors = [
    "bg-tag-confident",
    "bg-tag-alert",
    "bg-tag-playful",
    "bg-tag-loyal",
  ];

  return (
    <>
      <Header />

      <BreedDetailHero
        image={breed.image?.url || "/dummydog.jpg"}
        breedname={breed.name}
        id={breed.id}
        origin={breed.origin}
      />

      <h1 className="mt-4 px-5 text-3xl font-semibold">
        {breed.name}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2 px-5">
        {tags.map((tag, index) => (
          <BreedTag
            key={tag}
            label={tag}
            color={tagColors[index]}
          />
        ))}
      </div>

      <section className="mt-5 px-5">
        <h2 className="breed-section-title">
          Breed Description
        </h2>
        <p className="breed-section-text">
          {breed.description || "No description available."}
        </p>
      </section>

      <section className="mt-5 px-5 pb-24">
        <h2 className="breed-section-title">
          Breed Information
        </h2>
        <p className="breed-section-text">
          Origin: {breed.origin || "Unknown"}
        </p>
        <p className="breed-section-text">
          Life span: {breed.life_span || "Unknown"}
        </p>
      </section>

      <BottomNav active="home" />
    </>
  );
}
