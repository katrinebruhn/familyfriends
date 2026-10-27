import Header from "../../../components/Header";
import BottomNav from "../../../components/BottomNav";
import BreedDetailHero from "../../../components/BreedDetailHero";
import BreedTag from "../../../components/BreedTag";

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

  const breed = await response.json();

  return (
    <>
      <Header />

      <BreedDetailHero
        image={breed.image?.url || "/dummydog.jpg"}
        breedname={breed.name}
      />

      <h1 className="text-3xl font-semibold px-5 mt-4">
        {breed.name}
      </h1>

      <div className="flex flex-wrap gap-2 px-5 mt-4">
        {breed.temperament
          ?.split(", ")
          .map((temperament, index) => {
            const colors = [
              "bg-tag-confident",
              "bg-tag-alert",
              "bg-tag-playful",
              "bg-tag-loyal",
            ];

            return (
              <BreedTag
                key={temperament}
                label={
                  temperament.charAt(0).toUpperCase() +
                  temperament.slice(1)
                }
                color={colors[index % colors.length]}
              />
            );
          })}
      </div>

      <section className="px-5 mt-5">
        <h2 className="breed-section-title">
          Breed Description
        </h2>
        <p className="breed-section-text">
          {breed.temperament || "No description available."}
        </p>
      </section>

      <section className="px-5 mt-5 pb-24">
        <h2 className="breed-section-title">
          Breed Origin
        </h2>
        <p className="breed-section-text">
          {breed.origin || "Unknown origin"}
        </p>
      </section>

      <BottomNav active="favorites" />
    </>
  );
}
