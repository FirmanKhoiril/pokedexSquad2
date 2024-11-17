import axios from "axios";
import { excludedPokemon } from "../services/DataDummy";

const BASE_URL = "https://pokeapi.co/api/v2";

const getPokemonByGeneration = async (generation) => {
  const response = await axios.get(`${BASE_URL}/generation/${generation}`);
  return response.data.pokemon_species.map((p) => p.name);
};

const getPokemonByType = async (type) => {
  console.log(type);
  
  const response = await axios.get(`${BASE_URL}/type/${type}`);
  return response.data.pokemon.map((p) => p.pokemon.name);
};

const getPokemonByWeakness = async (weakness) => {
  const response = await axios.get(
    `${BASE_URL}/type/${weakness === "Weakness" ? "normal" : weakness}`
  );
  const weakTypes = response.data.damage_relations.double_damage_from.map(
    (w) => w.name
  );

  const weakPokemonPromises = weakTypes.map(async (weakType) => {
    const weakTypeResponse = await axios.get(`${BASE_URL}/type/${weakType}`);
    return weakTypeResponse.data.pokemon.map((p) => p.pokemon.name);
  });

  const weakPokemonArrays = await Promise.all(weakPokemonPromises);
  return weakPokemonArrays.flat();
};

export const FilterPokemon = async ({ generation, type, weakness }) => {
  try {
    let filteredPokemon = [];

    if (!generation && !type && (weakness === "Weakness" || !weakness)) {
      return await getAllPokemon();
    }

    if (generation) {
      filteredPokemon = await getPokemonByGeneration(generation);
    } else {
      const dataPokemon = await getAllPokemon();
      filteredPokemon = dataPokemon.map((p) => {
        return p.name
      })
    }

    if (type) {
      const pokemonByType = await getPokemonByType(type);
      
      filteredPokemon = filteredPokemon.filter((name) =>
        pokemonByType.includes(name)
      );
    }

    if (weakness && weakness !== "Weakness") {
      const pokemonByWeakness = await getPokemonByWeakness(weakness);
      filteredPokemon = filteredPokemon.filter((name) =>
        pokemonByWeakness.includes(name)
      );
    }

    filteredPokemon = filteredPokemon.filter(
      (pokemonName) => !excludedPokemon.includes(pokemonName)
    );

    const detailedPokemonPromises = filteredPokemon.map(async (pokemonName) => {
      try {
        const response = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
        return response.data;
      } catch (error) {
        console.error(`Error fetching details for ${pokemonName}:`, error.message);
        return null;
      }
    });

    const detailedPokemon = await Promise.all(detailedPokemonPromises);
    return detailedPokemon.filter((data) => data !== null);
  } catch (error) {
    console.error("Error in FilterPokemon:", error.message);
    return [];
  }
};


const getAllPokemon = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pokemon?limit=1000`);
    const pokemonNames = response.data.results.map((p) => p.name);

    const detailedPokemonPromises = pokemonNames.map(async (pokemonName) => {
      const pokemonDetailsResponse = await axios.get(
        `${BASE_URL}/pokemon/${pokemonName}`
      );
      return pokemonDetailsResponse.data;
    });

    const detailedPokemon = await Promise.all(detailedPokemonPromises);
    return detailedPokemon;
  } catch (error) {
    console.error("Error fetching all Pokémon details:", error.message);
    return [];
  }
};
