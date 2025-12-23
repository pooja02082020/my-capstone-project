export default function CustomerDashboard() {
  return (
    <div className="dashGrid">
      <div className="card">
        <h3>Account Balance</h3>
        <p className="amount">$12,450.00</p>
      </div>

      <div className="card">
        <h3>Last Transaction</h3>
        <p>Sent $200 to john@example.com</p>
      </div>

      <div className="card">
        <h3>Status</h3>
        <p>All services running</p>
      </div>
    </div>
  );
}
