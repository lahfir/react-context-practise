import { useContext } from "react";
import MovieCard from "../components/HomePage/MovieCard";
import { MovieContext } from "../contexts/MovieContext";
import "./homeStyles.css";

const HomePage = () => {
  const { loading, setLoading, movies, setMovies } = useContext(MovieContext);
  return (
    <div className="homePage__wrapper">
      <h1 className="heading">Anime Movie Library</h1>
      <div className="movie__card__container">
        {movies.map((element, index) => {
          return (
            <MovieCard key={element.mal_id} id={element.mal_id} index={index} />
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;
