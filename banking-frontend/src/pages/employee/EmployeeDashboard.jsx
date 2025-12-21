export default function EmployeeDashboard() {
  return (
    <div className="page">
      <h1 className="page-title">Employee Dashboard</h1>
      <p className="page-subtitle">
        Employee can monitor transactions, assist customer accounts, and handle operations.
      </p>

      <div className="grid-4">
        <div className="card stat">
          <div className="stat-label">Active Accounts</div>
          <div className="stat-value">—</div>
          <div className="stat-hint">From Transaction Service</div>
        </div>
        <div className="card stat">
          <div className="stat-label">Today’s Transactions</div>
          <div className="stat-value">—</div>
          <div className="stat-hint">From /transactions/all</div>
        </div>
        <div className="card stat">
          <div className="stat-label">Pending</div>
          <div className="stat-value warn">—</div>
          <div className="stat-hint">PENDING</div>
        </div>
        <div className="card stat">
          <div className="stat-label">Alerts</div>
          <div className="stat-value">—</div>
          <div className="stat-hint">Rule checks</div>
        </div>
      </div>

      <div className="card">
        <h3 className="section-title">Recent Transactions (UI placeholder)</h3>
        <div className="muted">
          Once Transaction Service endpoints are connected, we’ll list real data here.
        </div>
      </div>
    </div>
  );
}
