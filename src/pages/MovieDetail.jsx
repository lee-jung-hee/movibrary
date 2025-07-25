import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMovie } from "../features/movie/movieSelector";
import {
  MovieDetailContainer,
  Poster,
  TitleAndRating,
  Title,
  Rating,
  Date,
  Description,
  MovieInfoContainer,
} from "../styles/MovieDetail.styles";

function MovieDetail() {
  const { id } = useParams();
  const movie = useSelector(selectMovie(Number(id)));

  return (
    <MovieDetailContainer>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieInfoContainer>
        <TitleAndRating>
          <Title>{movie.title}</Title>
          <Rating>Rating : {movie.vote_average.toFixed(1)}</Rating>
        </TitleAndRating>
        <Description>{movie.overview}</Description>
        <Date>Release Date : {movie.release_date}</Date>
      </MovieInfoContainer>
    </MovieDetailContainer>
  );
}

export default MovieDetail;
