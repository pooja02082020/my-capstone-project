import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginApi } from "../api/authApi";
import { useAuth } from "./AuthContext";
import logo from "../images/logo.png";

export default function Login() {
  const nav = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const res = await loginApi({ username, password });

      // your backend returns: { token: "..." } or { jwt: "..." } – handle both
      const token = res.data.token || res.data.jwt || res.data.accessToken;
      if (!token) throw new Error("Token not found in response");

      login(token);

      // redirect based on role (stored by AuthContext from token)
      const role = localStorage.getItem("role");
      if (role === "ADMIN") nav("/admin");
      else if (role === "EMPLOYEE") nav("/employee");
      else nav("/customer");
    } catch (e2) {
      setErr(e2?.response?.data?.message || e2.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <div className="auth-brand">
          <img className="auth-logo" src={logo} alt="Banking Logo" />
          <h1>Banking System Login</h1>
          <p>Secure Access Portal</p>
        </div>

        <form className="auth-form" onSubmit={onSubmit}>
          <label>
            Username
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              autoComplete="username"
              required
            />
          </label>

          <label>
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              type="password"
              autoComplete="current-password"
              required
            />
          </label>

          {err && <div className="auth-error">{err}</div>}

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="auth-footer">
          <span>First time user?</span>{" "}
          <Link to="/register" className="auth-link">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
