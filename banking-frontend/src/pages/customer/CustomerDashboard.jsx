import PageLayout from "../../components/PageLayout";
import "../../styles/dashboard.css";

export default function CustomerDashboard() {
  return (
    <PageLayout>
      <h1 className="page-title">Customer Dashboard</h1>

      {/* Summary cards */}
      <div className="card-grid">
        <div className="card">
          <h3>Total Balance</h3>
          <p>$12,450.00</p>
        </div>

        <div className="card">
          <h3>Active Accounts</h3>
          <p>2</p>
        </div>

        <div className="card">
          <h3>Credit Cards</h3>
          <p>1</p>
        </div>

        <div className="card">
          <h3>Loans</h3>
          <p>0</p>
        </div>
      </div>

      {/* Quick actions */}
      <div className="section">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button>Deposit</button>
          <button>Withdraw</button>
          <button>Transfer</button>
        </div>
      </div>

      {/* Recent transactions */}
      <div className="section">
        <h2>Recent Transactions</h2>

        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-03-10</td>
              <td>Deposit</td>
              <td>$500</td>
              <td className="success">SUCCESS</td>
            </tr>
            <tr>
              <td>2025-03-08</td>
              <td>Transfer</td>
              <td>$200</td>
              <td className="success">SUCCESS</td>
            </tr>
            <tr>
              <td>2025-03-05</td>
              <td>Withdraw</td>
              <td>$100</td>
              <td className="pending">PENDING</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
