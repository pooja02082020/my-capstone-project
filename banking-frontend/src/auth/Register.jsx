// import { useState } from "react";
// import "../styles/auth.css";
// import logo from "../images/logo.png";

// export default function Register() {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//     role: "CUSTOMER",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Register:", form);
//     // TODO: call /auth/register API later
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         <img src={logo} alt="Bank Logo" className="auth-logo" />

//         <h2 className="auth-title">Create Account</h2>
//         <p className="auth-subtitle">Register for Banking Services</p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             required
//             value={form.username}
//             onChange={handleChange}
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             value={form.email}
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             required
//             value={form.password}
//             onChange={handleChange}
//           />

//           <select
//             name="role"
//             value={form.role}
//             onChange={handleChange}
//           >
//             <option value="CUSTOMER">Customer</option>
//             <option value="EMPLOYEE">Employee</option>
//           </select>

//           <button type="submit">Register</button>
//         </form>

//         <div className="auth-footer">
//           <span>Already have an account? </span>
//           <a href="/login">Login</a>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CUSTOMER");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.username === username);
    if (exists) {
      alert("User already exists");
      return;
    }

    users.push({ username, password, role });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful. Please login.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleRegister}>
        <h2>Create Account</h2>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="CUSTOMER">Customer</option>
          <option value="EMPLOYEE">Employee</option>
          <option value="ADMIN">Admin</option>
        </select>

        <button type="submit" className="auth-btn">Register</button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
