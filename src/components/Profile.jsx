import { FaUserCircle } from "react-icons/fa";
import {
  ProfileImg,
  SignContainer,
  SignInText,
  SignUpText,
  SlashSeparator,
} from "./Profile.styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state.user.isLogined);
  return (
    <>
      {user ? (
        <ProfileImg>
          <FaUserCircle size="40" color="#ccc" />
        </ProfileImg>
      ) : (
        <SignContainer>
          <Link to="/sign-in">
            <SignInText>Sign in</SignInText>
          </Link>
          <SlashSeparator />
          <Link to="/sign-up">
            <SignUpText>Sign up</SignUpText>
          </Link>
        </SignContainer>
      )}
    </>
  );
}

export default Profile;
