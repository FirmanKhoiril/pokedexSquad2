import {useGlobalContext} from "../context/useContext"
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

function Search() {
  const {searchInput, setSearchInput} = useGlobalContext()

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleClearInput = () => {
    setSearchInput("");
  };

  return (
    <div className="app-container px-2">
      <h1 className="title">Pokédex</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a Pokemon..."
          value={searchInput}
          onChange={handleSearchChange}
          className="search-input"
          required
        />
        <button className="search-button">Search</button>
        {searchInput.length > 0 ? (
          <button onClick={handleClearInput} className="absolute left-3" type="button">
            <IoClose size={24} />
          </button>
        ) : <button className="absolute left-3" type="button">
        <CiSearch size={24} />
      </button>}
      </div>
    </div>
  );
}

export default Search;