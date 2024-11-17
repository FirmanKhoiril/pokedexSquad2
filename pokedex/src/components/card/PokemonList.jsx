import PokemonCard from "./PokemonCard";
import { useQuery } from "@tanstack/react-query";
import { FilterPokemon } from "../../api/FetchPokemon";
import { useGlobalContext } from "../../context/useContext";
import Loading from "../Loading";
import NotFound from "../NotFound";

const PokemonList = () => {
  const {
    optionSelectGeneration,
    optionSelectType,
    optionSelectWeakness,
  } = useGlobalContext();

  const { data, isLoading, isFetching, isSuccess, } = useQuery({
    queryKey: [
      "pokemon",
      optionSelectGeneration.id,
      optionSelectType.id,
      optionSelectWeakness
    ],
    queryFn: () =>
      FilterPokemon({
        generation: optionSelectGeneration.id,
        type: optionSelectType.id,
        weakness: optionSelectWeakness,
      }),
    refetchOnWindowFocus: false,
  });

  if (isFetching || isLoading)
    return <Loading />

  return (
    <div className="flex justify-center w-full mt-2">
      <div className="flex flex-wrap items-center gap-6 w-full px-4">
        {isSuccess && data?.length === 0 ? (
         <NotFound />
        ) : ( 
          data?.map((pokemon) => (
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
