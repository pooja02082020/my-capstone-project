import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authSlice";
import { loginApi } from "../api/authApi";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginApi({ email, password });
      dispatch(loginSuccess(data));

      // route based on role
      if (data.role === "ADMIN") navigate("/admin");
      else if (data.role === "EMPLOYEE") navigate("/employee");
      else navigate("/customer");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="authWrap">
      <div className="authBg" />

      <div className="authCard">
        <div className="authHeader">
          <div className="badgeGlow">🔐</div>
          <h1>Welcome Back</h1>
          <p>Sign in to access your banking dashboard</p>
        </div>

        <form onSubmit={onSubmit} className="authForm">
          <label className="field">
            <span>Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@bank.com"
              type="email"
              required
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              type="password"
              required
            />
          </label>

          {error && <div className="errorBox">{error}</div>}

          <button className="btnPrimary" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <div className="authFooter">
            <span>New user?</span> <Link to="/register">Create an account</Link>
          </div>
        </form>
      </div>
      
          </div>
  );
}
