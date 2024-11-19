
import { useGlobalContext } from '../context/useContext';

const NotFound = () => {
  const { optionSelectGeneration, optionSelectType, optionSelectWeakness } = useGlobalContext();

  return (
    <div className="flex flex-col items-center justify-center min-h-[50dvh] w-full space-y-6 p-6">
      <div className="text-center relative flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold">Oops! Pokemon Not Found</h1>
        <p className="text-gray-400 mt-2">
          No Pokemon match with selected filters.
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

    </div>
  );
};

export default NotFound;
