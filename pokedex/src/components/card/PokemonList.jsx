import PokemonCard from "./PokemonCard";
import Loading from "../Loading";
import NotFound from "../NotFound";
import useFilterPokemon from "../../hooks/useFilterPokemon";
import { useGlobalContext } from "../../context/useContext";
import useGetAllBookmarkPokemon from "../../hooks/useGetAllBookmarkPokemon";
import { useEffect } from "react";

const PokemonList = () => {
  const { isLoading, isFetching, sortPokemon, data, isSuccess } =
    useFilterPokemon();
  const { data: bookmarksPokemon, isSuccess: bookmarkSuccess } =
    useGetAllBookmarkPokemon();
  const { setBookmarks } = useGlobalContext();

  useEffect(() => {
    setBookmarks(bookmarksPokemon);
  }, [bookmarkSuccess, bookmarksPokemon]);

  if (isFetching || isLoading) return <Loading />;

  const sortedData = isSuccess ? sortPokemon(data) : [];

  return (
    <div className="flex justify-center w-full mt-2">
      <div className="flex flex-wrap items-center gap-6 w-full px-4">
        {sortedData.length === 0 ? (
          <NotFound />
        ) : ( sortedData &&
          sortedData.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              image={pokemon.sprites.other["official-artwork"].front_default}
              name={pokemon.name}
              id={pokemon.id}
              types={pokemon.types}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PokemonList;
