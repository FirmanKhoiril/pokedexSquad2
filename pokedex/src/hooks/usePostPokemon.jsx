import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPokemon } from '../api/FetchBookmark'
import { useGlobalContext } from '../context/useContext'


export default function usePostPokemon() {
  const queryClient = useQueryClient()
  const {setBookmarks} = useGlobalContext()
  const {mutate: postPokemon, isLoading} = useMutation({
    mutationFn: (pokemonData) => addPokemon(pokemonData),
    onSuccess: (data) => {
      setBookmarks((prev) => [...prev, data])
      queryClient.invalidateQueries({ queryKey: ['pokemonBookmark'] })
    }
  })
  
  return {
    postPokemon,
    isLoading
  }
}
