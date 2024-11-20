import { useGlobalContext } from '../context/useContext';

function Search() {
  const {searchInput, setSearchInput} = useGlobalContext()

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="App">
      <h1>Search Pokemon</h1>
      <input
        type="text"
        placeholder="Search for a Pokémon..."
        value={searchInput}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;