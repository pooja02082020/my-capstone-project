// import { Navigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// export default function ProtectedRoute({ roles = [], children }) {
//   const { isLoggedIn, user } = useAuth();

//   if (!isLoggedIn) return <Navigate to="/login" replace />;

//   if (roles.length > 0 && (!user || !roles.includes(user.role))) {
//     // If logged in but wrong role
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }

import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (role && user.role !== role) return <Navigate to="/login" />;

  return children;
}
