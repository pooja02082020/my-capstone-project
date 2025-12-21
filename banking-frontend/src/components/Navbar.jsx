import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const nav = useNavigate();
  const { logout, role } = useAuth();

  function handleLogout() {
    logout();
    nav("/login");
  }

  return (
    <div className="navbar">
      <div className="navbar-title">Banking Management System</div>
      <div className="navbar-right">
        <span className="pill">{role || "USER"}</span>
        <button className="btn-ghost" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
