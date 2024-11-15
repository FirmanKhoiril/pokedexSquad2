import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/src/assets/Logo.png" alt="Pokemon Logo" className="w-24" />
        </div>

        <div className="hidden md:flex space-x-8 mx-auto">
          <a href="#home" className="text-blue-500 hover:underline">
            Home
          </a>
          <a href="#pokedex" className="text-blue-500 font-semibold underline">
            Pokédex
          </a>
          <a href="#videogames" className="text-blue-500 hover:underline">
            Video Games
          </a>
          <a href="#cardgame" className="text-blue-500 hover:underline">
            Card Game
          </a>
          <a href="#pokemonTV" className="text-blue-500 hover:underline">
            Pokémon TV
          </a>
          <a href="#events" className="text-blue-500 hover:underline">
            Events
          </a>
          <a href="#news" className="text-blue-500 hover:underline">
            News
          </a>
        </div>

        <div className="hidden md:block w-24"></div>

        <button
          className="md:hidden focus:outline-none ml-auto"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10">
            <a
              href="#home"
              className="block px-4 py-2 text-blue-500 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#pokedex"
              className="block px-4 py-2 text-blue-500 hover:bg-gray-100 font-semibold underline"
            >
              Pokédex
            </a>
            <a
              href="#videogames"
              className="block px-4 py-2 text-blue-500 hover:bg-gray-100"
            >
              Video Games
            </a>
            <a
              href="#cardgame"
              className="block px-4 py-2 text-blue-500 hover:bg-gray-100"
            >
              Card Game
            </a>
            <a
              href="#pokemonTV"
              className="block px-4 py-2 text-blue-500 hover:bg-gray-100"
            >
              Pokémon TV
            </a>
            <a
              href="#events"
              className="block px-4 py-2 text-blue-500 hover:bg-gray-100"
            >
              Events
            </a>
            <a
              href="#news"
              className="block px-4 py-2 text-blue-500 hover:bg-gray-100"
            >
              News
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
