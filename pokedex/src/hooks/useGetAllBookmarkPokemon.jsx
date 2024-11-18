import { useQuery } from "@tanstack/react-query";
import { getAllBookmarkPokemon } from "../api/FetchBookmark";

export default function useGetAllBookmarkPokemon() {
  const { data, isLoading, isFetching, isSuccess } = useQuery({
    queryKey: ["pokemonBookmark"],
    queryFn: () => getAllBookmarkPokemon(),
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isFetching,
    isLoading,
    isSuccess,
  };
}
