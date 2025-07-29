import styled from "styled-components";

export const AuthenticationContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 10px;
  width: 400px;
  flex-direction: column;
`;

export const AuthenticationInput = styled.input`
  width: 90%;
  border: 1px solid #999;
  border-radius: 8px;
  height: 2rem;
  padding: 2px;
  padding-left: 10px;
`;

export const TextDiv = styled.div`
  margin-top: 1rem;
  margin-bottom: 5px;
  text-align: left !important;
`;

export const DescriptionText = styled.div`
  font-size: 0.8rem;
  color: #888;
  transform: translate(0, -15px);
`;

export const AuthenticationButton = styled.button`
  width: 90%;
  padding: 9px 0;
  margin: 20px 0;
  background-color: #7d0a0a;
  border-radius: 8px;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.8rem;
  height: 1rem;
  visibility: ${(props) => (props.$hasError ? "visible" : "hidden")};
`;
