import { createContext, useState, useContext } from "react";
import { iniciarSesion } from "../services/FormularioServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const res = await iniciarSesion(credentials);
    if (res && res.email) {
      setUser(res);
    }
    return res;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

