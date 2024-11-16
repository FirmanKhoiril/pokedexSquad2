import React from "react";

const PokemonCard = ({ image, name, number, types }) => {
  return (
    <div className="border-2 border-blue-500 rounded-lg shadow-md p-4 w-full sm:w-[300px] lg:w-72 flex flex-col items-center relative">
      <img src={image} alt={name} className="w-32 h-32 mb-4" />

      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-500 text-sm">#{number}</p>

      <div className="flex space-x-2 mt-4">
        {types.map((type, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm text-white ${
              type === "Grass"
                ? "bg-green-600"
                : type === "Poison"
                ? "bg-purple-600"
                : "bg-gray-300"
            }`}
          >
            {type}
          </span>
        ))}
      </div>

      <div className="absolute top-2 right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75v14.25L12 16.5l-5.25 4.5V6.75c0-.621.504-1.125 1.125-1.125h10.25c.621 0 1.125.504 1.125 1.125z"
          />
        </svg>
      </div>
    </div>
  );
};

export default PokemonCard;