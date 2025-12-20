import { useState } from "react";
import PageLayout from "../../components/PageLayout";

const mockAccounts = [
  { id: 1, accountNumber: "1002003001", accountType: "SAVINGS", balance: 2500, status: "ACTIVE" },
  { id: 2, accountNumber: "1002003002", accountType: "CURRENT", balance: 12000, status: "ACTIVE" },
];

export default function AccountsPage() {
  const [accounts, setAccounts] = useState(mockAccounts);
  const [form, setForm] = useState({ accountType: "SAVINGS" });

  const createAccount = (e) => {
    e.preventDefault();
    const newAcc = {
      id: Date.now(),
      accountNumber: String(Math.floor(Math.random() * 9000000000) + 1000000000),
      accountType: form.accountType,
      balance: 0,
      status: "ACTIVE",
    };
    setAccounts([newAcc, ...accounts]);
  };

  return (
    <PageLayout title="Accounts">
      <div className="grid-2">
        <div className="card">
          <div className="card-header">Create Bank Account</div>
          <div className="card-body">
            <form onSubmit={createAccount}>
              <label className="muted">Account Type</label>
              <select
                value={form.accountType}
                onChange={(e) => setForm({ ...form, accountType: e.target.value })}
              >
                <option value="SAVINGS">SAVINGS</option>
                <option value="CURRENT">CURRENT</option>
              </select>

              <div className="form-actions">
                <button className="btn btn-primary" type="submit">
                  Create Account
                </button>
              </div>

              <p className="muted" style={{ marginTop: 10 }}>
                (Mock UI for now. Later connect POST /transactions/accounts)
              </p>
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-header">My Accounts</div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Account No.</th>
                  <th>Type</th>
                  <th>Balance</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((a) => (
                  <tr key={a.id}>
                    <td>{a.accountNumber}</td>
                    <td>{a.accountType}</td>
                    <td>${a.balance.toFixed(2)}</td>
                    <td>
                      <span className="badge success">{a.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
