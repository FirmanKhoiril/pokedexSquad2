import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deletePokemon } from "../api/FetchBookmark"

export default function useDeleteBookmarkPokemon() {
    const queryClient = useQueryClient()
    const {mutate: deleteBookmark} = useMutation({
      mutationFn: (id) => deletePokemon(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['pokemonBookmark'] })
      }
    })
    
    return {
      deleteBookmark
    }
}
