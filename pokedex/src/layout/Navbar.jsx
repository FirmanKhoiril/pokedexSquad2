import React, { useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Pokédex");
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-white">
      {" "}
      {/* Menghapus shadow-md */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/src/assets/Logo.png" alt="Pokemon Logo" className="w-24" />
        </div>

        <div className="hidden md:flex space-x-8 mx-auto">
          <a
            href="#home"
            onClick={() => handleLinkClick("Home")}
            className={`${
              activeLink === "Home"
                ? "text-blue-600 font-semibold underline"
                : "text-blue-300"
            } hover:text-blue-500`}
          >
            Home
          </a>
          <a
            href="#pokedex"
            onClick={() => handleLinkClick("Pokédex")}
            className={`${
              activeLink === "Pokédex"
                ? "text-blue-600 font-semibold underline"
                : "text-blue-300"
            } hover:text-blue-500`}
          >
            Pokédex
          </a>

          <a
            href="#cardgame"
            onClick={() => handleLinkClick("Card Game")}
            className={`${
              activeLink === "Card Game"
                ? "text-blue-600 font-semibold underline"
                : "text-blue-300"
            } hover:text-blue-500`}
          >
            Card Game
          </a>

          <a
            href="#events"
            onClick={() => handleLinkClick("Events")}
            className={`${
              activeLink === "Events"
                ? "text-blue-600 font-semibold underline"
                : "text-blue-300"
            } hover:text-blue-500`}
          >
            Events
          </a>
          <a
            href="#news"
            onClick={() => handleLinkClick("News")}
            className={`${
              activeLink === "News"
                ? "text-blue-600 font-semibold underline"
                : "text-blue-300"
            } hover:text-blue-500`}
          >
            News
          </a>
        </div>

        <button
          className="md:hidden focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
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
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-10">
            <a
              href="#home"
              onClick={() => handleLinkClick("Home")}
              className={`block px-4 py-2 ${
                activeLink === "Home"
                  ? "text-blue-600 font-semibold underline"
                  : "text-blue-300"
              } hover:bg-gray-100`}
            >
              Home
            </a>
            <a
              href="#pokedex"
              onClick={() => handleLinkClick("Pokédex")}
              className={`block px-4 py-2 ${
                activeLink === "Pokédex"
                  ? "text-blue-600 font-semibold underline"
                  : "text-blue-300"
              } hover:bg-gray-100`}
            >
              Pokédex
            </a>

            <a
              href="#cardgame"
              onClick={() => handleLinkClick("Card Game")}
              className={`block px-4 py-2 ${
                activeLink === "Card Game"
                  ? "text-blue-600 font-semibold underline"
                  : "text-blue-300"
              } hover:bg-gray-100`}
            >
              Card Game
            </a>

            <a
              href="#events"
              onClick={() => handleLinkClick("Events")}
              className={`block px-4 py-2 ${
                activeLink === "Events"
                  ? "text-blue-600 font-semibold underline"
                  : "text-blue-300"
              } hover:bg-gray-100`}
            >
              Events
            </a>
            <a
              href="#news"
              onClick={() => handleLinkClick("News")}
              className={`block px-4 py-2 ${
                activeLink === "News"
                  ? "text-blue-600 font-semibold underline"
                  : "text-blue-300"
              } hover:bg-gray-100`}
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
