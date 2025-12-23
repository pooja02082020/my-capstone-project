export default function Transactions() {
  const data = [
    { id: 1, type: "Debit", amount: 200, to: "john@example.com" },
    { id: 2, type: "Credit", amount: 500, from: "salary" },
  ];

  return (
    <div className="card">
      <h2>Transactions</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((t) => (
            <tr key={t.id}>
              <td>{t.type}</td>
              <td>${t.amount}</td>
              <td>{t.to || t.from}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
