import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../Components/LoadingSpinner"; 

const PokemonTradingCardGame = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [rarity, setRarity] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("https://api.pokemontcg.io/v2/cards");
        setCards(response.data.data);
        setFilteredCards(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch cards:", error);
        setIsLoading(false);
      }
    };
    fetchCards();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterCards(query, rarity);
  };

  const handleRarityChange = (e) => {
    const selectedRarity = e.target.value;
    setRarity(selectedRarity);
    filterCards(searchQuery, selectedRarity);
  };

  const filterCards = (query, rarityFilter) => {
    let filtered = cards;

    if (query) {
      filtered = filtered.filter((card) =>
        card.name.toLowerCase().includes(query)
      );
    }

    if (rarityFilter) {
      filtered = filtered.filter((card) => card.rarity === rarityFilter);
    }

    setFilteredCards(filtered);
  };

  return (
    <section className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-6">Pokémon Trading Card Game</h1>

      <div className="flex flex-wrap items-center justify-start mb-8 gap-2">
        <div className="relative w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search card"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 shadow-sm"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 4a7 7 0 110 14 7 7 0 010-14zm0 0l4 4"
            />
          </svg>
        </div>

        <div className="relative w-full sm:w-1/4">
          <select
            value={rarity}
            onChange={handleRarityChange}
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 shadow-sm appearance-none"
          >
            <option value="">Select Rarity</option>
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {isLoading ? (
        <LoadingSpinner /> 
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="border rounded-md p-4 shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={card.images.large}
                alt={card.name}
                className="w-full h-auto rounded-md"
              />
              <h2 className="mt-2 text-lg font-semibold">{card.name}</h2>
              <p className="text-sm text-gray-600">Artist: {card.artist}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PokemonTradingCardGame;
