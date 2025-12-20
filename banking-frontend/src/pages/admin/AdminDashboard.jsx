import PageLayout from "../../components/PageLayout";

export default function AdminDashboard() {
  return (
    <PageLayout title="Admin Dashboard">
      <div className="grid-2">
        <div className="card">
          <div className="card-header">Admin Capabilities</div>
          <div className="card-body">
            <ul className="muted" style={{ margin: 0, paddingLeft: 18 }}>
              <li>Create / update / delete employees</li>
              <li>System wide monitoring</li>
              <li>Security and access control oversight</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Next Integration</div>
          <div className="card-body">
            <p className="muted" style={{ margin: 0 }}>
              Later connect to: /admin/employees (CRUD) and /transactions/all.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
