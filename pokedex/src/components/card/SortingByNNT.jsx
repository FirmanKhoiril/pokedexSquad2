import { useGlobalContext } from "../../context/useContext";

const SortingByNNT = () => {
  const { setOptionSortBy} = useGlobalContext()
  
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4">
      <div className="md:flex items-center space-x-1">
        <label htmlFor="sort" className="text-base font-medium text-gray-900">
          Sort by
        </label>
        <select
          id="sort"
          name="sort"
          onChange={(e) => setOptionSortBy(e.currentTarget.value)}
          className="rounded-md px-2 py-1 text-base font-medium text-gray-900 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        >
          <option value="id">Number</option>
          <option value="name">Name</option>
          <option value="type">Type</option>
        </select>
      </div>
    </div>
  );
};

export default SortingByNNT;
