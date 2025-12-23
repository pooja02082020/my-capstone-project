import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerApi } from "../api/authApi";
import "../styles/auth.css";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Adjust body to match your RegisterRequest DTO
      await registerApi({ name, email, password });
      navigate("/login");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="authWrap">
      <div className="authBg" />

      <div className="authCard">
        <div className="authHeader">
          <div className="badgeGlow">✨</div>
          <h1>Create Account</h1>
          <p>Register to access the banking system</p>
        </div>

        <form onSubmit={onSubmit} className="authForm">
          <label className="field">
            <span>Name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
          </label>

          <label className="field">
            <span>Email</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" type="email" required />
          </label>

          <label className="field">
            <span>Password</span>
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create password" type="password" required />
          </label>

          {error && <div className="errorBox">{error}</div>}

          <button className="btnPrimary" disabled={loading}>
            {loading ? "Creating..." : "Create"}
          </button>

          <div className="authFooter">
            <span>Already have an account?</span> <Link to="/login">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
