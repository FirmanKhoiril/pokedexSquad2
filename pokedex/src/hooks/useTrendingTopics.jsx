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
          "x-rapidapi-key": "6443a330b9mshca44e19b852f815p13be46jsn3253cb1de0ea",
          "x-rapidapi-host": "news-api14.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log("API Response:", response.data);

        if (response.data.success && response.data.data) {
          setTopics(response.data.data)
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
