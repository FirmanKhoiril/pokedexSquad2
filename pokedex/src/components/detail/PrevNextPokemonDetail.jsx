import { FaArrowUpLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PrevNextPokemonDetail = ({ id }) => {
  const maxId = 1025;
  const navigate = useNavigate();

  const handlePrevPokemon = () => {
    if (id > 1) navigate(`/pokemon/${id - 1}`);
  };

  const handleNextPokemon = () => {
    if (id < maxId) navigate(`/pokemon/${+id + 1}`);
  };

  return (
    <div className="flex items-center py-6 text-primary w-full justify-between">
      <button
        onClick={handlePrevPokemon}
        disabled={id === 1}
        className={`text-gray-600 ${
          id === 1 ? "opacity-50 pointer-events-none" : "hover:text-gray-800"
        } transition duration-200`}
      >
        <FaArrowUpLong size={25} color="#3666d5" className="rotate-[270deg]" />
      </button>

      <p className="font-semibold">{id}/{maxId}</p>

      <button
        onClick={handleNextPokemon}
        disabled={id === maxId}
        className={`text-gray-600 ${
          id === maxId ? "opacity-50 pointer-events-none" : "hover:text-gray-800"
        } transition duration-200`}
      >
        <FaArrowUpLong size={25} color="#3666d5" className="rotate-90" />
      </button>
    </div>
  );
};

export default PrevNextPokemonDetail;
