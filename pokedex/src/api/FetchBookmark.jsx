import axios from "axios";


const BASE_URL = "http://localhost:3001"

export const getAllBookmarkPokemon = async () => {
    const {data} = await axios.get(`${BASE_URL}/pokemon`)
    return data
}

export const addPokemon = async (pokemonData) => {
    const {data} = await axios.post(`${BASE_URL}/pokemon`, pokemonData)
    
    return data
}