import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Container, SkeletonCardContainer } from "../styles/SkeletonStyle";

function SkeletonUI() {
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

export default SkeletonUI;
