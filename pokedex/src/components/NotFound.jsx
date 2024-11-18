import { Link } from 'react-router-dom';
import { FaRegSadTear } from 'react-icons/fa';
import { useGlobalContext } from '../context/useContext';

const NotFound = () => {
  const { optionSelectGeneration, optionSelectType, optionSelectWeakness } = useGlobalContext();

  return (
    <div className="flex flex-col items-center justify-center min-h-[50dvh] w-full space-y-6 p-6">
      <div className="text-center flex items-center justify-center flex-col">
        <FaRegSadTear size={80} className="text-red-500 mb-4" />
        <h1 className="text-3xl font-bold">Oops! Pokémon Not Found</h1>
        <p className="text-gray-400 mt-2">
          No Pokémon matches the selected filters.
        </p>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Your Selected Filters:</h2>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li>
              <span className="font-medium">Generation:</span>{' '}
              {optionSelectGeneration.generation || ''}
            </li>
            <li>
              <span className="font-medium">Type:</span> {optionSelectType.type || ''}
            </li>
            <li>
              <span className="font-medium">Weakness:</span> {optionSelectWeakness === "Weakness" ? 'null' : optionSelectWeakness}
            </li>
          </ul>
        </div>
      </div>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        Back to Pokédex
      </Link>
    </div>
  );
};

export default NotFound;
