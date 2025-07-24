import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

function Main() {
  const movie = useSelector((state) => state.movie.results);
  return (
    <>
      {movie.map((list) => (
        <MovieCard
          key={list.id}
          id={list.id}
          url={list.backdrop_path}
          title={list.title}
          rating={list.vote_average}
        />
      ))}
    </>
  );
}

export default Main;
