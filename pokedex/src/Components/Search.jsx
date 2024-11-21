import { useState } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
      </div>
    </div>
  );
}

export default Search;