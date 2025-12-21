import { Link } from "react-router-dom";
import "../styles/auth.css";
import logo from "../images/logo.png";

export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <img src={logo} alt="Bank Logo" className="auth-logo" />

        <h2>Banking System Login</h2>
        <p className="auth-subtitle">Secure Access Portal</p>

        <form>
          <input
            type="text"
            placeholder="Username"
            className="auth-input"
          />

          <input
            type="password"
            placeholder="Password"
            className="auth-input"
          />

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <p className="auth-footer">
          First time user?{" "}
          <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
