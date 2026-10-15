import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import BreedDetailHero from "../../components/BreedDetailHero";
import BreedTag from "../../components/BreedTag";

const DetailView = () => {
  return (
    <>
      <Header />
      <BreedDetailHero
        image="/dummydog.jpg"
        breedname="Affenpinscher"
      />
      <h1 className="text-3xl font-semibold px-5 mt-4">
        Affenpinscher
      </h1>
      <div className="flex flex-wrap gap-2 px-5 mt-4">
        <BreedTag
          label="Confident"
          color="bg-tag-confident"
        />
        <BreedTag label="Alert" color="bg-tag-alert" />
        <BreedTag label="Playful" color="bg-tag-playful" />
        <BreedTag label="Loyal" color="bg-tag-loyal" />
      </div>
      <section className="px-5 mt-5">
        <h2 className="breed-section-title">
          Breed Description
        </h2>
        <p className="breed-section-text">
          Small, sturdy toy breed with a distinctive
          monkey-like expression and shaggy, wiry coat.
          Known for its confident, terrier-like personality
          despite its small size.
        </p>
      </section>
      <section className="px-5 mt-5 pb-24">
        <h2 className="breed-section-title">
          Breed history
        </h2>
        <p className="breed-section-text">
          Originating in 17th-century Germany, bred down
          from larger terriers to be skilled ratters in
          homes, kitchens and stables. Refined in Munich and
          Berlin, recognized by AKC in 1936. Name translates
          to 'monkey-like terrier'.
        </p>
      </section>
      <BottomNav active="favorites" />
    </>
  );
};

export default DetailView;
