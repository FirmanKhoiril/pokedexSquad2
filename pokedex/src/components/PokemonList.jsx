import React from "react";
import PokemonCard from "./PokemonCard";
import Filter from "../components/Filter";

const PokemonList = () => {
  const pokemonData = [
    {
      name: "Bulbasaur",
      number: "0001",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      types: ["Grass", "Poison"],
    },
    {
      name: "Ivysaur",
      number: "0002",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      types: ["Grass", "Poison"],
    },
    {
      name: "Venusaur",
      number: "0003",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      types: ["Grass", "Poison"],
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10">
      <Filter />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        {pokemonData.map((pokemon) => (
          <PokemonCard
            key={pokemon.number}
            image={pokemon.image}
            name={pokemon.name}
            number={pokemon.number}
            types={pokemon.types}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
