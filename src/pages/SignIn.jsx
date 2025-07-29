import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmailAuth } from "../supabase/auth/useEmail.auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import {
  AuthenticationContainer,
  AuthenticationInput,
  TextDiv,
  AuthenticationButton,
  ErrorText,
} from "../styles/Authentication.sytles";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useEmailAuth();
  const dispatch = useDispatch();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { user, error: loginError } = await login({ email, password });
      if (loginError) throw loginError;

      dispatch(setUser(user));
      navigate("/");
    } catch (err) {
      setError("Please check your email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthenticationContainer as="form" onSubmit={handleSignIn}>
      <TextDiv>Email</TextDiv>
      <AuthenticationInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <ErrorText $hasError={!!error}>{error}</ErrorText>

      <TextDiv>Password</TextDiv>
      <AuthenticationInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <ErrorText $hasError={!!error}>{error}</ErrorText>

      <AuthenticationButton type="submit" disabled={loading}>
        {loading ? "Signing in..." : "Sign In"}
      </AuthenticationButton>
    </AuthenticationContainer>
  );
}

export default SignIn;
