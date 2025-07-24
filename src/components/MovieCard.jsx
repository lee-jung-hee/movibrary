import { useNavigate } from "react-router-dom";
import {
  MovieCardContainer,
  MovieCardImg,
  MovieCardRating,
  MovieCardTitle,
  MovieCardInfoContainer,
} from "./MovieCard.styles";

function MovieCard({ id, url, title, rating }) {
  const navigate = useNavigate();

  return (
    <MovieCardContainer onClick={() => navigate(`/detail/${id}`)}>
      <MovieCardImg src={`https://image.tmdb.org/t/p/w500${url}`} />
      <MovieCardInfoContainer>
        <MovieCardTitle>{title}</MovieCardTitle>
        <MovieCardRating>{rating.toFixed(1)}</MovieCardRating>
      </MovieCardInfoContainer>
    </MovieCardContainer>
  );
}

export default MovieCard;
