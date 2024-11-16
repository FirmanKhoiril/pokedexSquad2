import React from "react";
import PokemonList from "../components/PokemonList";
import Filter from '../components/Filter'
import {useQuery} from '@tanstack/react-query'
import { FilterPokemon } from '../api/FetchPokemon'
import { useGlobalContext } from '../context/useContext'

const Home = () => {
  const {optionSelectGeneration, optionSelectType, optionSelectWeakness} = useGlobalContext()
  const {data} = useQuery({
    queryKey: ['pokemon', optionSelectGeneration.id, optionSelectType.id, optionSelectWeakness],
    queryFn:  () => FilterPokemon({
      generation: optionSelectGeneration.id,
      type: optionSelectType.id,
      weakness: optionSelectWeakness,
    }),
    refetchInterval: 60000,
    refetchOnWindowFocus: false
  })

  console.log(data);
  
  return (
    <div>
      <PokemonList />
      <Filter />
    </div>
  );
};

export default Home;
