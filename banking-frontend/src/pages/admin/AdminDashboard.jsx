export default function AdminDashboard() {
  return (
    <div className="page">
      <h1 className="page-title">Admin Dashboard</h1>
      <p className="page-subtitle">
        Employee management and high-level monitoring (role-based access).
      </p>

      <div className="grid-4">
        <div className="card stat">
          <div className="stat-label">Employees</div>
          <div className="stat-value">—</div>
          <div className="stat-hint">From /admin/employees</div>
        </div>
        <div className="card stat">
          <div className="stat-label">Services</div>
          <div className="stat-value">4</div>
          <div className="stat-hint">Eureka registered</div>
        </div>
        <div className="card stat">
          <div className="stat-label">System Status</div>
          <div className="stat-value ok">UP</div>
          <div className="stat-hint">Gateway routing</div>
        </div>
        <div className="card stat">
          <div className="stat-label">Security</div>
          <div className="stat-value">JWT</div>
          <div className="stat-hint">Role based</div>
        </div>
      </div>
    </div>
  );
}
