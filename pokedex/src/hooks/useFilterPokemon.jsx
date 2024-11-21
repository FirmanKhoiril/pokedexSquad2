import { useQuery } from "@tanstack/react-query";
import { FilterPokemon } from "../api/FetchPokemon";
import { useGlobalContext } from "../context/useContext";

export default function useFilterPokemon() {
  const {
    optionSelectGeneration,
    optionSelectType,
    optionSelectWeakness,
    optionSortBy,
    searchInput,
  } = useGlobalContext();

  const { data, isLoading, isFetching, isSuccess } = useQuery({
    queryKey: [
      "pokemon",
      optionSelectGeneration.id,
      optionSelectType.id,
      optionSelectWeakness,
    ],
    queryFn: () =>
      FilterPokemon({
        generation: optionSelectGeneration.id,
        type: optionSelectType.id,
        weakness: optionSelectWeakness,
      }),
    refetchOnWindowFocus: false,
  });

  const processPokemonData = () => {
    if (!isSuccess || !data) return [];
    let filteredData = data;
    
    if (searchInput) {
      filteredData = filteredData.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (optionSortBy) {
      filteredData = [...filteredData].sort((a, b) => {
        switch (optionSortBy) {
          case "id":
            return a.id - b.id;
          case "name":
            return a.name.localeCompare(b.name);
          case "type":
            const aType = a.types[0]?.type?.name || "";
            const bType = b.types[0]?.type?.name || "";
            return aType.localeCompare(bType);
          default:
            return 0;
        }
      });
    }

    return filteredData;
  };

  const filteredAndSortedPokemon = processPokemonData();

  return {
    isLoading,
    isFetching,
    isSuccess,
    filteredAndSortedPokemon,
  };
}
