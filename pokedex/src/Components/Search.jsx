import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Search for a Pokémon..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default App;