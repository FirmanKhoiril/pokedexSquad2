import useGetAllBookmarkPokemon from "../hooks/useGetAllBookmarkPokemon";
import PokemonCard from "../components/card/PokemonCard";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/useContext";
import { useEffect } from "react";

const Bookmark = () => {
  const { data, isSuccess, isFetching, isLoading } = useGetAllBookmarkPokemon();
  const {setBookmarks} = useGlobalContext()
  
  useEffect(() => {
    setBookmarks(data);
}, [isSuccess]);

  if (isLoading || isFetching) return <Loading height={"min-h-screen"} />;

  return (
    <section className="mx-auto w-full container px-4 md:px-0">
      <div className="w-full flex items-center justify-between py-6">
        <h1>Bookmark Page</h1>
        <p>Total Bookmarks: {data?.length}</p>
      </div>
      {data?.length === 0 && isSuccess && (
        <div className="flex flex-col gap-6 items-center justify-center">
            <p>No bookmarks found.</p>
            <Link to={"/"} className="py-3 px-6 bg-primary/90 hover:bg-primary text-white rounded-md shadow-md">
                Start adding your favorite pokemon
            </Link>
        </div>
      )}
      {data && isSuccess && (
        <div className="flex flex-wrap items-center justify-center md:justify-start pb-6 gap-4 w-full">
          {data.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              image={pokemon.image}
              name={pokemon.name}
              id={pokemon.id}
              types={pokemon.types}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Bookmark;
