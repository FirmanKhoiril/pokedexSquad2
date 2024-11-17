import PokemonCard from "./PokemonCard";

import Loading from "../Loading";
import NotFound from "../NotFound";
import useFilterPokemon from "../../hooks/useFilterPokemon";

const PokemonList = () => {
  const {isLoading, isFetching, sortPokemon, data, isSuccess} = useFilterPokemon()
  if (isFetching || isLoading) return <Loading />;

  const sortedData = isSuccess ? sortPokemon(data) : [];

  return (
    <div className="flex justify-center w-full mt-2">
      <div className="flex flex-wrap items-center justify-between gap-6 w-full px-4">
        {sortedData.length === 0 ? (
          <NotFound />
        ) : (
          sortedData.map((pokemon) => (
            <PokemonCard
              key={pokemon?.id}
              image={pokemon?.sprites?.other["official-artwork"]?.front_default}
              name={pokemon?.name}
              id={pokemon?.id}
              types={pokemon?.types}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PokemonList;
