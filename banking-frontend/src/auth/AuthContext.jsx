import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

function decodeRoleFromJwt(token) {
  try {
    const payload = token.split(".")[1];
    const json = JSON.parse(atob(payload));
    return json.role || null; // backend puts claim "role"
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState(localStorage.getItem("role") || "");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      const r = role || decodeRoleFromJwt(token);
      if (r) {
        setRole(r);
        localStorage.setItem("role", r);
      }
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      setRole("");
    }
  }, [token]);

  const value = useMemo(
    () => ({
      token,
      role,
      isLoggedIn: !!token,
      login: (newToken) => setToken(newToken),
      logout: () => setToken(""),
    }),
    [token, role]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
