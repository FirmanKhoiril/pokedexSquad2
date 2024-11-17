import PokemonList from "../components/card/PokemonList";
import Filter from "../components/Filter";

const Home = () => {
  return (
    <div className="flex container mx-auto w-full flex-col">
      <div className="flex gap-2 w-full lg:flex-row flex-col py-10 h-auto">
        <Filter />
        <PokemonList />
      </div>
    </div>
  );
};

export default Home;
