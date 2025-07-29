import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonCardContainer, Container } from "../styles/Skeleton.styles";

function Main() {
  const { data, loading } = useSelector((state) => state.movie);
  const movies = data?.results;

  if (loading) {
    return (
      <SkeletonTheme baseColor="#7f7f7f" highlightColor="#444">
        <Container>
          {Array.from({ length: 20 }).map((_, index) => (
            <SkeletonCardContainer key={index}>
              <Skeleton height={169} />
              <div>
                <Skeleton height={18} width={`85%`} />
              </div>
            </SkeletonCardContainer>
          ))}
        </Container>
      </SkeletonTheme>
    );
  }

  return (
    <Container>
      {movies?.map((list) => (
        <MovieCard
          key={list.id}
          id={list.id}
          url={list.backdrop_path}
          title={list.title}
          rating={list.vote_average}
        />
      ))}
    </Container>
  );
}

export default Main;
