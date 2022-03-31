import { useEffect, useState } from "react";
import axios from "axios";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://jikan1.p.rapidapi.com/top/anime/1/upcoming",
      headers: {
        "X-RapidAPI-Host": "jikan1.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        setLoading(false);
        response.data.top.map((element) => {
          element.comments = [];
          element.totalLikes = 0;
          element.totalComments = element.comments.length;
          element.isLiked = false;
        });
        setMovies(response.data.top);
        // console.log(response.data.top);
      })
      .catch(function (error) {
        setLoading(false);
        console.error(error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { loading, movies, setMovies, setLoading };
};

export default useMovies;
