import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Sidebar() {
  const { role } = useAuth();

  const links =
    role === "ADMIN"
      ? [
          { to: "/admin", label: "Dashboard" },
          { to: "/admin/employees", label: "Employees" },
        ]
      : role === "EMPLOYEE"
      ? [{ to: "/employee", label: "Dashboard" }]
      : [{ to: "/customer", label: "Dashboard" }];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-big">BANK</div>
        <div className="brand-sub">Portal</div>
      </div>

      <nav className="sidebar-nav">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
