import styled from "styled-components";

export const MovieDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background-color: white;
  color: #141a21;
`;

export const Poster = styled.img`
  width: 100%;
  height: auto;
  grid-row: span 3;
  object-fit: cover;
  margin: 5px;
`;

export const TitleAndRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  margin: 5px;
`;

export const Rating = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px;
`;

export const Date = styled.div`
  margin-top: 8px;
  font-size: 1rem;
  margin: 5px;
  bottom: 0;
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 1rem;
  line-height: 1.4;
  margin: 5px;
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  grid-row: span 3;
`;
