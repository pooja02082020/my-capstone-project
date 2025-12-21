import PageLayout from "../../components/PageLayout";
import "../../styles/dashboard.css";

export default function EmployeeDashboard() {
  return (
    <PageLayout>
      <h1 className="page-title">Employee Dashboard</h1>

      {/* Overview cards */}
      <div className="card-grid">
        <div className="card">
          <h3>Total Customers</h3>
          <p>128</p>
        </div>

        <div className="card">
          <h3>Active Accounts</h3>
          <p>245</p>
        </div>

        <div className="card">
          <h3>Pending Loans</h3>
          <p>6</p>
        </div>

        <div className="card">
          <h3>Daily Transactions</h3>
          <p>89</p>
        </div>
      </div>

      {/* Actions */}
      <div className="section">
        <h2>Employee Actions</h2>
        <div className="action-buttons">
          <button>View Customers</button>
          <button>Monitor Transactions</button>
          <button>Review Loans</button>
          <button>Manage Accounts</button>
        </div>
      </div>

      {/* Transactions table */}
      <div className="section">
        <h2>Recent Transactions</h2>

        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-03-11</td>
              <td>John Doe</td>
              <td>Transfer</td>
              <td>$500</td>
              <td className="success">SUCCESS</td>
            </tr>
            <tr>
              <td>2025-03-10</td>
              <td>Jane Smith</td>
              <td>Withdraw</td>
              <td>$200</td>
              <td className="pending">PENDING</td>
            </tr>
            <tr>
              <td>2025-03-09</td>
              <td>Alex Brown</td>
              <td>Deposit</td>
              <td>$1,000</td>
              <td className="success">SUCCESS</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
