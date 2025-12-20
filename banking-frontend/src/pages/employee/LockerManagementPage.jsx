import { useState } from "react";
import PageLayout from "../../components/PageLayout";

const initial = [
  { id: 1, lockerNumber: "L-101", status: "AVAILABLE" },
  { id: 2, lockerNumber: "L-102", status: "ASSIGNED", userId: 2 },
  { id: 3, lockerNumber: "L-103", status: "AVAILABLE" },
];

export default function LockerManagementPage() {
  const [lockers, setLockers] = useState(initial);
  const [assign, setAssign] = useState({ lockerId: "", userId: "" });

  const assignLocker = (e) => {
    e.preventDefault();
    setLockers(
      lockers.map((l) =>
        String(l.id) === assign.lockerId
          ? { ...l, status: "ASSIGNED", userId: Number(assign.userId) }
          : l
      )
    );
    setAssign({ lockerId: "", userId: "" });
  };

  const release = (id) => {
    setLockers(
      lockers.map((l) => (l.id === id ? { ...l, status: "AVAILABLE", userId: undefined } : l))
    );
  };

  return (
    <PageLayout title="Locker Management">
      <div className="grid-2">
        <div className="card">
          <div className="card-header">Available Lockers</div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Locker</th>
                  <th>Status</th>
                  <th>User</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {lockers.map((l) => (
                  <tr key={l.id}>
                    <td>{l.lockerNumber}</td>
                    <td>
                      <span className={l.status === "AVAILABLE" ? "badge pending" : "badge success"}>
                        {l.status}
                      </span>
                    </td>
                    <td>{l.userId ?? "-"}</td>
                    <td>
                      {l.status === "ASSIGNED" ? (
                        <button className="btn btn-outline" onClick={() => release(l.id)}>
                          Release
                        </button>
                      ) : (
                        <span className="muted">Assign using form</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="muted" style={{ marginTop: 10 }}>
              Later: GET /lockers/available, PUT /lockers/{`{lockerId}`}/release
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Assign Locker</div>
          <div className="card-body">
            <form onSubmit={assignLocker}>
              <input
                className="input"
                placeholder="Locker ID (e.g. 1)"
                value={assign.lockerId}
                onChange={(e) => setAssign({ ...assign, lockerId: e.target.value })}
                required
              />
              <div style={{ height: 10 }} />
              <input
                className="input"
                placeholder="User ID (Customer)"
                value={assign.userId}
                onChange={(e) => setAssign({ ...assign, userId: e.target.value })}
                required
              />
              <div className="form-actions">
                <button className="btn btn-primary">Assign</button>
              </div>
              <p className="muted">Later: POST /lockers/assign</p>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
