import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h3>Banking Management System</h3>
      <div className="navbar-user">
        <span>Welcome, User</span>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}
