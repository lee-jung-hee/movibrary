import styled from "styled-components";

export const ProfileImg = styled.div`
  height: 40px;
  width: 40px;
  min-width: 40px;
  overflow: hidden;
  border-radius: 20px;
  background-color: gray;
  margin-right: 1rem;
`;

export const SignContainer = styled.span`
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

export const SignInText = styled.span`
  color: #333;
`;
export const SignUpText = styled.span`
  color: #333;
`;

export const SlashSeparator = styled.span`
  &::before {
    content: "/";
    padding: 0 3px;
    color: #333;
  }
`;
