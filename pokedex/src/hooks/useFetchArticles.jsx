import { useState, useEffect } from "react";
import axios from "axios";

const useFetchArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const options = {
        method: "GET",
        url: "https://news-api14.p.rapidapi.com/v2/search/articles",
        params: {
          query: "pokemon",
          language: "en",
        },
        headers: {
          "x-rapidapi-key": "c7c4c80b6dmsh496186c1b4238c0p1314b8jsnd2c601b6b4a8",
          "x-rapidapi-host": "news-api14.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        if (response.data.success) {
          setArticles(response.data.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
};

export default useFetchArticles;
