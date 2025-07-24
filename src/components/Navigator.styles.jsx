import styled from "styled-components";

export const NavigatorContainer = styled.nav`
  width: 100vw;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  position: fixed;
  top: 0;
  left: 0;
`;

export const NavigatorLogo = styled.a`
  color: #d61f3d;
  margin: 0 20px;
  cursor: pointer;
  font-size: 30px;
  font-weight: 800;
  transform: translate(0, -3px);
`;
