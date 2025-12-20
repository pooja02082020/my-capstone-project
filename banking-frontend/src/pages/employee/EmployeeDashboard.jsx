import PageLayout from "../../components/PageLayout";

export default function EmployeeDashboard() {
  return (
    <PageLayout title="Employee Dashboard">
      <div className="grid-2">
        <div className="card">
          <div className="card-header">Tasks</div>
          <div className="card-body">
            <ul className="muted" style={{ margin: 0, paddingLeft: 18 }}>
              <li>Monitor customer transactions</li>
              <li>Manage locker availability and assignments</li>
              <li>Assist customers in operations</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Quick Notes</div>
          <div className="card-body">
            <p className="muted" style={{ margin: 0 }}>
              This is UI-first. Backend integration will be added later via API Gateway.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
