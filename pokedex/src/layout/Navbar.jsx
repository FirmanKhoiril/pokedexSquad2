import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  
  return (
    <nav className="bg-white w-full sticky top-0 z-20 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between ">
        <div className="flex items-center">
          <img src="/src/assets/Logo.png" alt="Pokemon Logo" className="w-24" />
        </div>

        <div className="hidden md:flex space-x-8 mx-auto">
          <Link
            to="/"
            onClick={() => handleLinkClick("Home")}
            className={`${
              activeLink === "Home"
                ? "text-blue-600 font-semibold underline"
                : "text-blue-300"
            } hover:text-blue-500`}
          >
            Home
          </Link>
          <Link
            to="/"
            onClick={() => handleLinkClick("About")}
            className={`${
              activeLink === "About"
                ? "text-blue-600 font-semibold underline"
                : "text-blue-300"
            } hover:text-blue-500`}
          >
            About
          </Link>
          <Link
            to="/trading-card-game"
            onClick={() => handleLinkClick("Card Game")}
            className={`${
              activeLink === "Card Game"
                ? "text-blue-600 font-semibold underline"
                : "text-blue-300"
            } hover:text-blue-500`}
          >
            Card Game
          </Link>
          <Link
            to="/"
            onClick={() => handleLinkClick("News")}
            className={`${
              activeLink === "News"
                ? "text-blue-600 font-semibold underline"
                : "text-blue-300"
            } hover:text-blue-500`}
          >
            News
          </Link>
          <Link
              to="/bookmark"
              onClick={() => handleLinkClick("Bookmark")}
              className={`${
                activeLink === "Bookmark"
                  ? "text-blue-600 font-semibold underline"
                  : "text-blue-300"
              }`}
            >
              Bookmark
            </Link>
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
          <div className="md:hidden absolute shadow-md top-[62px] left-0 right-0 bg-white z-10">
            <Link
              to="/"
              onClick={() => handleLinkClick("Home")}
              className={`block px-4 py-2 ${
                activeLink === "Home"
                  ? "text-blue-600 font-semibold underline"
                  : "text-blue-300"
              } hover:bg-gray-100`}
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => handleLinkClick("About")}
              className={`block px-4 py-2 ${
                activeLink === "About"
                  ? "text-blue-600 font-semibold underline"
                  : "text-blue-300"
              } hover:bg-gray-100`}
            >
              About
            </Link>

            <Link
              to="/trading-card-game"
              onClick={() => handleLinkClick("Card Game")}
              className={`block px-4 py-2 ${
                activeLink === "Card Game"
                  ? "text-blue-600 font-semibold underline"
                  : "text-blue-300"
              } hover:bg-gray-100`}
            >
              Card Game
            </Link>
            <Link
              to="/"
              onClick={() => handleLinkClick("News")}
              className={`block px-4 py-2 ${
                activeLink === "News"
                  ? "text-blue-600 font-semibold underline"
                  : "text-blue-300"
              } hover:bg-gray-100`}
            >
              News
            </Link>
            <Link
              to="/bookmark"
              onClick={() => handleLinkClick("Bookmark")}
              className={`block px-4 py-2 ${
                activeLink === "Bookmark"
                  ? "text-blue-600 font-semibold underline"
                  : "text-blue-300"
              } hover:bg-gray-100`}
            >
              Bookmark
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
