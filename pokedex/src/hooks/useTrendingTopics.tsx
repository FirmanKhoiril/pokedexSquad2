import { useState, useEffect } from "react";
import axios from "axios";

const useTrendingTopics = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingTopics = async () => {
      const options = {
        method: "GET",
        url: "https://news-api14.p.rapidapi.com/v2/search/publishers",
        params: { query: "Pokemon" },
        headers: {
          "x-rapidapi-key": "c7c4c80b6dmsh496186c1b4238c0p1314b8jsnd2c601b6b4a8",
          "x-rapidapi-host": "news-api14.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log("API Response:", response.data);

        if (response.data.success && response.data.data) {
          setTopics(response.data.data); // Sesuaikan dengan struktur data dari API
        } else {
          throw new Error("Invalid API response format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingTopics();
  }, []);

  return { topics, loading, error };
};

export default useTrendingTopics;
