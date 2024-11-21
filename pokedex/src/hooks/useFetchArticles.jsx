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
          "x-rapidapi-key": "6443a330b9mshca44e19b852f815p13be46jsn3253cb1de0ea",
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
