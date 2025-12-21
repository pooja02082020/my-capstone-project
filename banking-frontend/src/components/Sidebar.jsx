import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">BANK</h2>

      <ul className="sidebar-menu">
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
