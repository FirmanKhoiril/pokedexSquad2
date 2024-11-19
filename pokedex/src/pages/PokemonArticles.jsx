import React from "react";
import useFetchArticles from "../hooks/useFetchArticles";
import LoadingSpinner from "../Components/LoadingSpinner";

const PokemonArticles = () => {
  const { articles, loading, error } = useFetchArticles();

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Latest Pokémon Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold">{article.title}</h4>
              <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                {article.excerpt}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                By: {article.authors?.join(", ") || "Unknown"} | Published:{" "}
                {new Date(article.date).toLocaleDateString()}
              </p>
              <div className="mt-4">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm font-semibold"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonArticles;
