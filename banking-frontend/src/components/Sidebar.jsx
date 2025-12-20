import "../styles/dashboard.css";

export default function Sidebar({ role }) {
  return (
    <div className="sidebar">
      <h3>{role} Menu</h3>

      <ul>
        <li>Dashboard</li>
        <li>Accounts</li>
        <li>Transactions</li>
        <li>Cards</li>
        <li>Loans</li>
        <li>Lockers</li>
      </ul>
    </div>
  );
}
