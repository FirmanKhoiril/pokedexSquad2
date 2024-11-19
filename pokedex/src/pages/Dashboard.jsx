import React from "react";
import PokemonArticles from "./PokemonArticles";
import TrendingTopics from "./TrendingTopics";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold">Pokémon News Dashboard</h1>
          <p className="mt-2 text-lg text-gray-300">
            Explore the latest Pokémon news, articles, and trends all in one
            place.
          </p>
        </div>
      </header>

      <main className="bg-gray-100 py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://beebom.com/wp-content/uploads/2024/10/Gigantamax-Pokemon.jpg"
                alt="Featured Article"
                className="w-full h-80 object-cover opacity-70"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h2 className="text-3xl font-bold">
                  25 of the Most Beautiful Places Around the World
                </h2>
                <p className="mt-2 text-sm text-gray-300">
                  By Gustavo Franci - 1 min ago
                </p>
                <p className="mt-4">
                  Discover breathtaking locations that inspire your next
                  adventure.
                </p>
              </div>
            </div>

            <PokemonArticles />
          </div>

          <aside className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-indigo-600">
                Top Trending Publishers
              </h2>
              <TrendingTopics />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
