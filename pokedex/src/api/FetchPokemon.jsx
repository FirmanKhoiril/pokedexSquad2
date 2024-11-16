import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

const getPokemonByGeneration = async (generation) => {
  const response = await axios.get(`${BASE_URL}/generation/${generation}`);
  return response.data.pokemon_species.slice(0, 20).map((p) => p.name);
};

const getPokemonByType = async (type) => {
  const response = await axios.get(`${BASE_URL}/type/${type}`);
  return response.data.pokemon.slice(0, 20).map((p) => p.pokemon.name);
};

const getPokemonByWeakness = async (weakness) => {
  const response = await axios.get(`${BASE_URL}/type/${weakness === "Weakness" ? "Normal" : weakness}`);
  const weakTypes = response.data.damage_relations.double_damage_from.map((w) => w.name);

  const weakPokemonPromises = weakTypes.map(async (weakType) => {
    const weakTypeResponse = await axios.get(`${BASE_URL}/type/${weakType}`);
    return weakTypeResponse.data.pokemon.slice(0, 20).map((p) => p.pokemon.name);
  });

  const weakPokemonArrays = await Promise.all(weakPokemonPromises);
  return weakPokemonArrays.flat();
};

const getAllPokemon = async () => {
  const response = await axios.get(`${BASE_URL}/pokemon`);
  return response.data.results.slice(0, 20).map((p) => p.name);
};

export const FilterPokemon = async ({ generation, type, weakness }) => {
  try {
    let filteredPokemon = [];

    if (generation && generation !== "") {
      const genPokemon = await getPokemonByGeneration(generation);
      filteredPokemon = [...genPokemon];
    }

    if (type && type !== "") {
      const typePokemon = await getPokemonByType(type);
      filteredPokemon = filteredPokemon.length
        ? filteredPokemon.filter((p) => typePokemon.includes(p))
        : [...typePokemon];
    }

    if (weakness && weakness !== "Weakness") {
      const weakPokemon = await getPokemonByWeakness(weakness);
      filteredPokemon = filteredPokemon.length
        ? filteredPokemon.filter((p) => weakPokemon.includes(p))
        : [...weakPokemon];
    }

    if (filteredPokemon.length === 0) {
      filteredPokemon = await getAllPokemon();
    }

    const detailedPokemonPromises = filteredPokemon.map(async (pokemonName) => {
      const response = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
      return response.data;
    });

    return await Promise.all(detailedPokemonPromises);
  } catch (error) {
    console.error("Error fetching Pokémon:", error.message);
    return [];
  }
};
