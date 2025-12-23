import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const role = useSelector((s) => s.auth?.role);

  const menu = {
    CUSTOMER: [
      { to: "/customer", label: "Dashboard" },
      { to: "/customer/transfer", label: "Transfer Funds" },
      { to: "/customer/transactions", label: "Transactions" },
    ],
    ADMIN: [
      { to: "/admin", label: "Dashboard" },
      { to: "/admin/employees", label: "Manage Employees" },
    ],
    EMPLOYEE: [
      { to: "/employee", label: "Dashboard" },
    ],
  };

  const items = menu[role] || menu["CUSTOMER"]; //  fallback

  return (
    <aside className="sidebar">
      <h2>BankSys</h2>

      <nav>
        {items.map((item) => (
          <NavLink key={item.to} to={item.to} className="navItem">
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
