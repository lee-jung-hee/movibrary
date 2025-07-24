import styled from "styled-components";

export const MovieCardContainer = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 5px;
`;

export const MovieCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieCardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 0;
`;

export const MovieCardTitle = styled.h3`
  font-size: 14px;
  color: #141a21;
  height: 40px;
  margin-left: 5px;
`;

export const MovieCardRating = styled.span`
  font-size: 0.9rem;
  color: #686868;
  height: 40px;
  margin-right: 5px;
`;
