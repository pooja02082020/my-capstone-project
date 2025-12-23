import { useState } from "react";
import PageLayout from "../../components/PageLayout";

const allTx = [
  { id: "TXN-2001", type: "TRANSFER", amount: 1200, status: "SUCCESS", userId: 1 },
  { id: "TXN-2002", type: "DEPOSIT", amount: 300, status: "PENDING", userId: 2 },
  { id: "TXN-2003", type: "WITHDRAW", amount: 900, status: "FAILED", userId: 2 },
];

export default function TransactionMonitoringPage() {
  const [status, setStatus] = useState("ALL");

  const filtered =
    status === "ALL" ? allTx : allTx.filter((t) => t.status === status);

  return (
    <PageLayout title="Transaction Monitoring">
      <div className="card">
        <div className="card-header">All Transactions</div>
        <div className="card-body">
          <div className="form-row" style={{ gridTemplateColumns: "240px 1fr" }}>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="ALL">ALL</option>
              <option value="SUCCESS">SUCCESS</option>
              <option value="FAILED">FAILED</option>
              <option value="PENDING">PENDING</option>
            </select>
            <div className="muted" style={{ alignSelf: "center" }}>
              Later: GET /transactions/all and /transactions/status/{`{status}`}
            </div>
          </div>

          <div style={{ height: 12 }} />

          <table className="table">
            <thead>
              <tr>
                <th>Txn ID</th>
                <th>User ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.userId}</td>
                  <td>{t.type}</td>
                  <td>${t.amount.toFixed(2)}</td>
                  <td>
                    <span
                      className={
                        t.status === "SUCCESS"
                          ? "badge success"
                          : t.status === "FAILED"
                          ? "badge danger"
                          : "badge pending"
                      }
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
