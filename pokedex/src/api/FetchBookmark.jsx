import axios from "axios";


const BASE_URL = "http://localhost:3001"

export const getAllBookmarkPokemon = async () => {
    const {data} = await axios.get(`${BASE_URL}/pokemons`)
    return data
}

export const addPokemon = async (pokemonData) => {
    const {data} = await axios.post(`${BASE_URL}/pokemons`, pokemonData)
    
    return data
}

export const deletePokemon = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/pokemons/${id}`);
    } catch (error) {
      console.error("Error deleting Pokémon:", error?.message);
    }
  };
  