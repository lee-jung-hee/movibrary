import { createContext, useState, useEffect, useRef } from "react";
import { useAuth } from "../supabase/auth/useAuth";
import { useEmailAuth } from "../supabase/auth/useEmail.auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const { logout: doLogout, getUserInfo: fetchUserInfo } = useAuth();
  const { login: doLogin, signUp: doSignUp } = useEmailAuth();

  const fetchUserInfoRef = useRef(fetchUserInfo);
  useEffect(() => {
    fetchUserInfoRef.current = fetchUserInfo;
  }, [fetchUserInfo]);

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      try {
        const userInfo = await fetchUserInfoRef.current();
        if (userInfo && userInfo.user) {
          setUser(userInfo.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const login = async ({ email, password }) => {
    const { user, error } = await doLogin({ email, password });
    if (user) {
      setUser(user);
    }
    return { user, error };
  };

  const signUp = async ({ email, password, ...userData }) => {
    return await doSignUp({ email, password, ...userData });
  };

  const logout = async () => {
    await doLogout();
    setUser(null);
  };

  const loginWithKakao = () => alert("카카오 로그인 기능은 준비 중입니다.");
  const loginWithGoogle = () => alert("구글 로그인 기능은 준비 중입니다.");

  const value = {
    user,
    loading,
    login,
    signUp,
    logout,
    loginWithKakao,
    loginWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
