import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectSearchMovie } from "../features/movie/movieSelector";
import MovieCard from "../components/MovieCard";
import { useDebounce } from "../hooks/useDebounce";

function Search() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("movie");
  const debouncedSearchTerm = useDebounce(searchTerm);

  const allMovies = useSelector((state) => state.movie.data.results);

  const filteredMovies = useSelector((state) =>
    debouncedSearchTerm
      ? selectSearchMovie(debouncedSearchTerm.toLowerCase())(state)
      : allMovies
  );

  return (
    <>
      {filteredMovies?.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          url={movie.backdrop_path}
          title={movie.title}
          rating={movie.vote_average}
        />
      ))}
    </>
  );
}

export default Search;
