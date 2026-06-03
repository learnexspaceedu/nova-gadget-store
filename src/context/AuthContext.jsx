import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const DEAFULT_AUTH_STAGE = {
  isAuthenticated: false,
};
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const saved = localStorage.getItem("auth");
    if (saved) {
      return JSON.parse(saved);
    } else {
      return DEAFULT_AUTH_STAGE;
    }
  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  const login = (email, password) => {
    setAuth({
      email,
      password,
      isAuthenticated: true,
    });
  };
  const signup = (name, email, password) => {
    setAuth({
      name,
      email,
      password,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    setAuth(DEAFULT_AUTH_STAGE);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
