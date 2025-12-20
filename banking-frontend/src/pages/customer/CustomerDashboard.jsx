import "../../styles/dashboard.css";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function CustomerDashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar role="CUSTOMER" />

      <div className="dashboard-main">
        <Navbar />

        <div className="dashboard-content">
          <h1>Customer Dashboard</h1>

          {/* Account Summary */}
          <div className="card-grid">
            <div className="card">
              <h3>Account Number</h3>
              <p>1234567890</p>
            </div>

            <div className="card">
              <h3>Account Type</h3>
              <p>Savings</p>
            </div>

            <div className="card highlight">
              <h3>Balance</h3>
              <p>$12,450.00</p>
            </div>
          </div>

          {/* Quick Actions */}
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button>Deposit</button>
            <button>Withdraw</button>
            <button>Transfer</button>
          </div>

          {/* Transactions */}
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
                <td>2025-01-10</td>
                <td>Deposit</td>
                <td>$1,000</td>
                <td className="success">SUCCESS</td>
              </tr>
              <tr>
                <td>2025-01-08</td>
                <td>Transfer</td>
                <td>$500</td>
                <td className="success">SUCCESS</td>
              </tr>
              <tr>
                <td>2025-01-05</td>
                <td>Withdraw</td>
                <td>$200</td>
                <td className="failed">FAILED</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
