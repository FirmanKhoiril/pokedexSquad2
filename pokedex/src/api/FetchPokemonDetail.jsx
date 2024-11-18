import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";


export const getPokemonSpecies = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    return response.data;
  };

export const getPokemonDetail = async (id) => {
    const {data} = await axios.get(`${BASE_URL}/pokemon/${id}`);
    return data
}


export const getEvolutionChain = async (url) => {
  const { data } = await axios.get(url);
  const chain = [];
  let current = data.chain;

  while (current) {
    const speciesName = current.species.name;
    const pokemonDetails = await axios.get(`${BASE_URL}/pokemon/${speciesName}`);

    chain.push({
      name: speciesName,
      id: pokemonDetails.data.id,
      image: pokemonDetails.data.sprites.other["official-artwork"].front_default,
    });

    current = current.evolves_to[0];
  }

  return chain;
};