import "./styles.css";
import useMovies from "./hooks/useMovies";
import ReactLoading from "react-loading";
import { MovieContext } from "./contexts/MovieContext";
import ModalContextProvider from "./contexts/ModalContext";
import HomePage from "./pages/HomePage";
import Modal from "./components/Modal";

export default function App() {
  const { loading, setLoading, movies, setMovies } = useMovies();
  return loading ? (
    <div className="App">
      <ReactLoading type={"spin"} color={"white"} height={"5%"} width={"5%"} />
    </div>
  ) : (
    <div className="App">
      <MovieContext.Provider value={{ loading, setLoading, movies, setMovies }}>
        <ModalContextProvider>
          <Modal>
            <h1>Hello</h1>
          </Modal>
          <HomePage />
        </ModalContextProvider>
      </MovieContext.Provider>
    </div>
  );
}
