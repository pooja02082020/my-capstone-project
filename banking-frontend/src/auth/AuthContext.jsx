// import { createContext, useContext, useEffect, useMemo, useState } from "react";

// const AuthContext = createContext(null);

// const STORAGE_KEY = "banking_auth";

// export function AuthProvider({ children }) {
//   const [auth, setAuth] = useState(() => {
//     const raw = localStorage.getItem(STORAGE_KEY);
//     return raw ? JSON.parse(raw) : { token: null, user: null };
//   });

//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
//   }, [auth]);

//   const value = useMemo(() => {
//     return {
//       token: auth.token,
//       user: auth.user, // { username, role }
//       isLoggedIn: !!auth.token,
//       login: (token, user) => setAuth({ token, user }),
//       logout: () => setAuth({ token: null, user: null }),
//     };
//   }, [auth]);

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }

import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (username, role) => {
    const userData = { username, role };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);

    if (role === "ADMIN") navigate("/admin");
    else if (role === "EMPLOYEE") navigate("/employee");
    else navigate("/customer");
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
