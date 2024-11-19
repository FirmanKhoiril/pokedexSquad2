import React from "react";
import useTrendingTopics from "../hooks/useTrendingTopics";
import LoadingSpinner from "../Components/LoadingSpinner";

const TrendingTopics = () => {
  const { topics, loading, error } = useTrendingTopics();

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      
      <ul className="space-y-4">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="shadow-lg rounded-lg p-4 hover:shadow-xl transition border border-gray-200"
          >
            <h4 className="text-lg font-semibold">{topic.name}</h4>
            <p className="text-sm text-gray-500 mt-2">
              {topic.description || "No description available"}
            </p>
            <div className="mt-2">
              <a
                href={topic.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm font-semibold"
              >
                Visit Publisher →
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingTopics;
