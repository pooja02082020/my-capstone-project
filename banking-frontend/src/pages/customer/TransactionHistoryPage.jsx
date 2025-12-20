import PageLayout from "../../components/PageLayout";

const rows = [
  { id: "TXN-1001", type: "DEPOSIT", amount: 500, status: "SUCCESS", date: "2025-12-20" },
  { id: "TXN-1002", type: "TRANSFER", amount: 250, status: "PENDING", date: "2025-12-20" },
  { id: "TXN-1003", type: "WITHDRAW", amount: 120, status: "FAILED", date: "2025-12-19" },
];

function badgeClass(status) {
  if (status === "SUCCESS") return "badge success";
  if (status === "FAILED") return "badge danger";
  return "badge pending";
}

export default function TransactionHistoryPage() {
  return (
    <PageLayout title="Transaction History">
      <div className="card">
        <div className="card-header">Recent Transactions</div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.type}</td>
                  <td>${r.amount.toFixed(2)}</td>
                  <td>
                    <span className={badgeClass(r.status)}>{r.status}</span>
                  </td>
                  <td>{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="muted" style={{ marginTop: 10 }}>
            Later: GET /transactions/history/{accountId}
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
