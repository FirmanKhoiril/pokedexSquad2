import { useQuery } from '@tanstack/react-query'
import { getPokemonDetail } from '../api/FetchPokemonDetail'

export default function useGetDetailPokemon(id) {
    const {data, isFetching, isLoading, isSuccess} = useQuery({
        queryKey: ["PokemonDetail", id],
        queryFn: () => getPokemonDetail(id),
        refetchOnWindowFocus: false,
        enabled: !!id,
      })
  return {
    data, isFetching, isLoading, isSuccess
  }
}
