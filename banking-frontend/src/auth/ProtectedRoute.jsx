import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ allowedRoles, children }) {
  const { isLoggedIn, role } = useAuth();

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    // role mismatch
    if (role === "ADMIN") return <Navigate to="/admin" replace />;
    if (role === "EMPLOYEE") return <Navigate to="/employee" replace />;
    return <Navigate to="/customer" replace />;
  }

  return children;
}
