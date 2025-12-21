import PageLayout from "../../components/PageLayout";
import "../../styles/dashboard.css";

export default function AdminDashboard() {
  return (
    <PageLayout>
      <h1 className="page-title">Admin Dashboard</h1>

      <div className="card-grid">
        <div className="card">
          <h3>Total Users</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Employees</h3>
          <p>15</p>
        </div>

        <div className="card">
          <h3>Total Transactions</h3>
          <p>8,430</p>
        </div>

        <div className="card">
          <h3>Active Accounts</h3>
          <p>310</p>
        </div>
      </div>
    </PageLayout>
  );
}
