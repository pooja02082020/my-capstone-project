import PageLayout from "../../components/PageLayout";

export default function LockerMyPage() {
  const locker = { lockerNumber: "L-102", status: "ASSIGNED", assignedDate: "2025-12-01" };

  return (
    <PageLayout title="My Locker">
      <div className="card">
        <div className="card-header">Locker Information</div>
        <div className="card-body">
          <table className="table">
            <tbody>
              <tr>
                <th>Locker Number</th>
                <td>{locker.lockerNumber}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>
                  <span className="badge success">{locker.status}</span>
                </td>
              </tr>
              <tr>
                <th>Assigned Date</th>
                <td>{locker.assignedDate}</td>
              </tr>
            </tbody>
          </table>

          <p className="muted" style={{ marginTop: 10 }}>
            Later: GET /lockers/user/{`{userId}`}
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
