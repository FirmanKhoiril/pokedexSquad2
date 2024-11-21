import { useGlobalContext } from "../../context/useContext";
import useDeleteBookmarkPokemon from "../../hooks/useDeleteBookmarkPokemon";
import usePostPokemon from "../../hooks/usePostPokemon";
import { typeColors } from "../../services/DataDummy";
import { Link } from "react-router-dom";

const PokemonCard = ({ image, name, id, types }) => {
  const {bookmarks} = useGlobalContext()
  const {postPokemon} = usePostPokemon()
  const {deleteBookmark} = useDeleteBookmarkPokemon()
  const isBookmarked = bookmarks?.some((pokemon) => String(pokemon.id) === String(id));

  const handleBookmarkClick = () => {
    if (!isBookmarked) {
      postPokemon({
        name,
        id: String(id),
        types,
        image,
      });
    } else {
      deleteBookmark(id);
      console.log(typeof id);
      
    }
  };

  return (
    <div
      className="border-2 border-blue-500 rounded-lg shadow-md p-4 w-full sm:w-[300px] lg:w-72 flex flex-col items-center relative cursor-pointer transition-transform duration-300 transform hover:rotate-1 hover:-translate-y-2"
    >
      <Link
        to={`/pokemon/${id}`}
        className="flex flex-col items-center w-full"
      >
        <img
          src={image || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"}
          alt={name}
          loading="lazy"
          className="w-32 h-32 mb-4"
        />

        <h2 className="text-lg font-bold text-gray-800 capitalize">{name}</h2>
        <p className="text-gray-500 text-sm">#{String(id).padStart(4, '0')}</p>

        <div className="flex space-x-2 mt-4">
          {types?.map((type) => {
            const typeName = type.type.name;
            const bgColor = typeColors[typeName] || typeColors.Default;

            return (
              <span
                key={typeName}
                className={`px-4 py-1.5 capitalize rounded-full text-sm text-white ${bgColor}`}
              >
                {typeName}
              </span>
            );
          })}
        </div>
      </Link>

      <button
        type="button"
        onClick={handleBookmarkClick}
        className="absolute z-20 p-2 top-2 right-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={isBookmarked ? "#3666d5" : "none"}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-6 h-6 text-primary`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75v14.25L12 16.5l-5.25 4.5V6.75c0-.621.504-1.125 1.125-1.125h10.25c.621 0 1.125.504 1.125 1.125z"
          />
        </svg>
      </button>
    </div>
  );
};

export default PokemonCard;
