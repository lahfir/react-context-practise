import "./modalStyles.css";
import { useCallback, useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { ModalContext } from "../contexts/ModalContext";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ children, ...props }) => {
  const { isModalOpen, setIsModalOpen, index } = useContext(ModalContext);
  const { movies, setMovies } = useContext(MovieContext);

  const addComment = useCallback(() => {
    const commentBox = document.getElementById("commentBox");
    if (!commentBox.value) {
      alert("Fill out the field");
    } else {
      setIsModalOpen(false);
      movies[index].comments.push(commentBox.value);
      movies[index].totalComments += 1;
      setMovies([...movies]);
    }
  }, [movies, index]);

  return isModalOpen ? (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__header">
          <h1 className="modal__title">Add Comment</h1>
          <button
            className="modal__header__button"
            onClick={() => setIsModalOpen(!isModalOpen)}
          >
            <AiOutlineClose
              size={"24px"}
              className="modal__icon"
              color={"black"}
            />
          </button>
        </div>
        <div className="modal__body">
          <input id="commentBox" placeholder="Comment" required></input>
          <button className="submit__button" type="submit" onClick={addComment}>
            Add Comment
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
