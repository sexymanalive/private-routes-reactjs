import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { createContext, useMemo } from "react";
import { useContext } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // calling this function will log the user in
  const login = (data) => {
    setUser(data);
    navigate("/");
  };

  // calling this function will log the user out
  const logout = () => {
    setUser(null);
    navigate("/login", {replace: true});
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
}

