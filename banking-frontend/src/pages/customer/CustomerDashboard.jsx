export default function CustomerDashboard() {
  return (
    <div className="page">
      <h1 className="page-title">Customer Dashboard</h1>
      <p className="page-subtitle">
        Customer can manage accounts, transfers, and view transaction history.
      </p>

      <div className="grid-4">
        <div className="card stat">
          <div className="stat-label">Accounts</div>
          <div className="stat-value">—</div>
          <div className="stat-hint">/transactions/accounts/user/{`{userId}`}</div>
        </div>
        <div className="card stat">
          <div className="stat-label">Balance</div>
          <div className="stat-value">—</div>
          <div className="stat-hint">SAVINGS/CURRENT</div>
        </div>
        <div className="card stat">
          <div className="stat-label">Transfers</div>
          <div className="stat-value">—</div>
          <div className="stat-hint">/transactions/transfer</div>
        </div>
        <div className="card stat">
          <div className="stat-label">Transactions</div>
          <div className="stat-value">—</div>
          <div className="stat-hint">/transactions/history/{`{accountId}`}</div>
        </div>
      </div>

      <div className="card">
        <h3 className="section-title">Transaction History (UI placeholder)</h3>
        <div className="muted">
          We will connect this to Transaction Service after backend integration.
        </div>
      </div>
    </div>
  );
}
