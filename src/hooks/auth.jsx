import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [data, setData] = useState({});

  async function loginUser({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@todoexperts:user", JSON.stringify(user));
      localStorage.setItem("@todoexoerts:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar");
      }
    }
  }

  function logout() {
    localStorage.removeItem("@todoexperts:token");
    localStorage.removeItem("@todoexperts:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@todoexperts:token");
    const user = localStorage.getItem("@todoexperts:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        logout,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthContextProvider, useAuth };
