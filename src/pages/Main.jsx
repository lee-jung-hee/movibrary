import { movieList } from "../api/movieList";
import MovieCard from "../components/MovieCard";
import Navigator from "../components/Navigator";

function Main() {
  return (
    <>
      {movieList.map((list) => (
        <MovieCard
          key={list.id}
          id={list.id}
          url={list.backdrop_path}
          title={list.original_title}
          rating={list.vote_average}
        />
      ))}
    </>
  );
}

export default Main;
