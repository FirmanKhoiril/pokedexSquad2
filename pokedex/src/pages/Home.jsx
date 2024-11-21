import PokemonList from "../components/card/PokemonList";
import SortingByNNT from "../components/card/SortingByNNT";
import Filter from "../components/Filter";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="flex container mx-auto w-full min-h-screen flex-col">
      <Search />
      <div className="flex gap-2 w-full lg:flex-row flex-col py-4 sm:py-10 h-auto">
        <Filter />
        <div className="flex flex-col gap-2 w-full">
          <SortingByNNT />
          <PokemonList />
        </div>
      </div>
    </div>
  );
};

export default Home;
