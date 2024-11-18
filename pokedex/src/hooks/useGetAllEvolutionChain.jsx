import { getEvolutionChain } from '../api/FetchPokemonDetail';
import { useQuery } from '@tanstack/react-query';

export default function useGetAllEvolutionChain({evolutionChainUrl}) {
  const { data: evolutionChain, isLoading, isError } = useQuery(
    ["evolutionChain", evolutionChainUrl],
    () => getEvolutionChain(evolutionChainUrl),
    {
      enabled: !!evolutionChainUrl,
      refetchOnWindowFocus: false
    }
  );

  return {
    evolutionChain, isLoading, isError,
  }
}
