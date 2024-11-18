import { useQuery } from '@tanstack/react-query';
import { getPokemonSpecies } from '../api/FetchPokemonDetail';


export const useGetSpeciesDetail = (id) => {

    const {data, isLoading, isFetching, isSuccess} = useQuery(['pokemonSpecies', id], () => getPokemonSpecies(id), {
        enabled: !!id,
        refetchOnWindowFocus: false
      });
  return {
    data, isLoading, isFetching, isSuccess
  }
};