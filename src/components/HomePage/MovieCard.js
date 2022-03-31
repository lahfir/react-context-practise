import { MovieContext } from "../../contexts/MovieContext";
import { useCallback, useContext, useMemo, useState } from "react";
import "./movieCard.css";
import { AiOutlineLike, AiFillLike, AiOutlineComment } from "react-icons/ai";
import { ModalContext } from "../../contexts/ModalContext";
import Divider from "../Divider";

const MovieCard = ({ id, index }) => {
  const { isModalOpen, setIsModalOpen, setIndex } = useContext(ModalContext);
  const { setMovies, movies } = useContext(MovieContext);
  const likePost = useCallback(
    (e, index) => {
      movies[index].isLiked = !movies[index].isLiked;
      movies[index].totalLikes = !movies[index].isLiked
        ? movies[index].totalLikes > 0
          ? movies[index].totalLikes - 1
          : 0
        : movies[index].totalLikes + 1;

      setMovies([...movies]);
    },
    [movies, setMovies]
  );

  return useMemo(
    () => (
      <div className="movie__card">
        <div className="movie__card__image__container">
          <img src={movies[index].image_url} alt="" />
        </div>
        <h1 className="movie__card__title">{movies[index].title}</h1>
        <div className="movie__card__lower">
          <button
            className="movie__card__action__button__container"
            onClick={(event) => likePost(event, index)}
          >
            {movies[index].isLiked ? (
              <AiFillLike
                className="movie__card__action__button"
                size={"30px"}
              />
            ) : (
              <AiOutlineLike
                className="movie__card__action__button"
                size={"30px"}
                color={"white"}
              />
            )}
            <p>{movies[index].totalLikes}</p>
          </button>
          <button
            className="movie__card__action__button__container"
            onClick={() => {
              setIndex(index);
              setIsModalOpen(!isModalOpen);
            }}
          >
            <AiOutlineComment
              className="movie__card__action__button"
              size={"30px"}
              color={"white"}
            />
            <p>{movies[index].totalComments}</p>
          </button>
        </div>
        <div className="movie__card__comments__contianer">
          <h4>Comments</h4>
          <Divider />
          {movies[index].totalComments ? (
            <>
              {movies[index].comments.map((element) => {
                return <p className="movie__card__comment">{element}</p>;
              })}
            </>
          ) : (
            <p style={{ color: "rgba(255,255,255,0.2)" }}>No Comments</p>
          )}
        </div>
      </div>
    ),
    [movies, setMovies]
  );
};

export default MovieCard;
