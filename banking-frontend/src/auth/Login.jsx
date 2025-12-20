// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "./AuthContext";
// import "../styles/auth.css";
// import logo from "../images/logo.png";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleSubmit = (e) => {
//     e.preventDefault(); // 🔴 VERY IMPORTANT

//     if (!username || !password) {
//       alert("Please enter username and password");
//       return;
//     }

//     // 🔹 MOCK ROLE LOGIC (frontend only)
//     let role = "CUSTOMER";
//     if (username.toLowerCase().includes("admin")) role = "ADMIN";
//     else if (username.toLowerCase().includes("emp")) role = "EMPLOYEE";

//     login({
//       username,
//       role,
//       token: "mock-jwt-token"
//     });

//     // 🔹 Redirect based on role
//     if (role === "ADMIN") navigate("/admin");
//     else if (role === "EMPLOYEE") navigate("/employee");
//     else navigate("/customer");
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-card" onSubmit={handleSubmit}>
//         <img src={logo} alt="Bank Logo" className="auth-logo" />

//         <h2>Banking System Login</h2>
//         <p className="auth-subtitle">Secure Access Portal</p>

//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit" className="auth-btn">
//           Login
//         </button>

//         <p className="auth-footer">
//           First time user? <Link to="/register">Create an account</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import "../styles/auth.css";
import logo from "../images/logo.png";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <img src={logo} alt="Bank Logo" className="auth-logo" />

        <h2>Banking System Login</h2>
        <p className="auth-subtitle">Secure Access Portal</p>

        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">Login</button>
        </form>

        <p className="auth-footer">
          First time user? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
