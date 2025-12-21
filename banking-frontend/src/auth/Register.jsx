import { Link } from "react-router-dom";
import "../styles/auth.css";
import logo from "../images/logo.png";

export default function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <img src={logo} alt="Bank Logo" className="auth-logo" />

        <h2>Create Account</h2>
        <p className="auth-subtitle">Register to access banking services</p>

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

          <select className="auth-input">
            <option value="CUSTOMER">Customer</option>
            <option value="EMPLOYEE">Employee</option>
          </select>

          <button type="submit" className="auth-button">
            Register
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
