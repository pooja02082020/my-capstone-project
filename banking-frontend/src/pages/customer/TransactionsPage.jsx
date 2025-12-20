import { useState } from "react";
import PageLayout from "../../components/PageLayout";

export default function TransactionsPage() {
  const [deposit, setDeposit] = useState({ accountId: "", amount: "" });
  const [withdraw, setWithdraw] = useState({ accountId: "", amount: "" });
  const [transfer, setTransfer] = useState({ fromAccountId: "", toAccountId: "", amount: "" });

  const submit = (label, payload) => {
    alert(`${label} submitted (mock)\n` + JSON.stringify(payload, null, 2));
  };

  return (
    <PageLayout title="Transactions">
      <div className="grid-2">
        <div className="card">
          <div className="card-header">Deposit</div>
          <div className="card-body">
            <input
              className="input"
              placeholder="Account ID"
              value={deposit.accountId}
              onChange={(e) => setDeposit({ ...deposit, accountId: e.target.value })}
            />
            <div style={{ height: 10 }} />
            <input
              className="input"
              placeholder="Amount"
              type="number"
              value={deposit.amount}
              onChange={(e) => setDeposit({ ...deposit, amount: e.target.value })}
            />
            <div className="form-actions">
              <button className="btn btn-primary" onClick={() => submit("Deposit", deposit)}>
                Deposit
              </button>
            </div>
            <p className="muted">Later: POST /transactions/deposit</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Withdraw</div>
          <div className="card-body">
            <input
              className="input"
              placeholder="Account ID"
              value={withdraw.accountId}
              onChange={(e) => setWithdraw({ ...withdraw, accountId: e.target.value })}
            />
            <div style={{ height: 10 }} />
            <input
              className="input"
              placeholder="Amount"
              type="number"
              value={withdraw.amount}
              onChange={(e) => setWithdraw({ ...withdraw, amount: e.target.value })}
            />
            <div className="form-actions">
              <button className="btn btn-primary" onClick={() => submit("Withdraw", withdraw)}>
                Withdraw
              </button>
            </div>
            <p className="muted">Later: POST /transactions/withdraw</p>
          </div>
        </div>

        <div className="card" style={{ gridColumn: "1 / -1" }}>
          <div className="card-header">Transfer Funds</div>
          <div className="card-body">
            <div className="form-row">
              <input
                className="input"
                placeholder="From Account ID"
                value={transfer.fromAccountId}
                onChange={(e) => setTransfer({ ...transfer, fromAccountId: e.target.value })}
              />
              <input
                className="input"
                placeholder="To Account ID"
                value={transfer.toAccountId}
                onChange={(e) => setTransfer({ ...transfer, toAccountId: e.target.value })}
              />
            </div>
            <div style={{ height: 10 }} />
            <input
              className="input"
              placeholder="Amount"
              type="number"
              value={transfer.amount}
              onChange={(e) => setTransfer({ ...transfer, amount: e.target.value })}
            />
            <div className="form-actions">
              <button className="btn btn-primary" onClick={() => submit("Transfer", transfer)}>
                Transfer
              </button>
            </div>
            <p className="muted">Later: POST /transactions/transfer</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
