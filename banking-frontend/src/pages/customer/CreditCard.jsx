import { useState } from "react";
import PageLayout from "../../components/PageLayout";

const mockCards = [
  { id: 1, cardNumber: "4111-xxxx-xxxx-1234", status: "INACTIVE", limit: 5000, available: 5000 },
  { id: 2, cardNumber: "4111-xxxx-xxxx-9999", status: "ACTIVE", limit: 8000, available: 6200 },
];

export default function CreditCardsPage() {
  const [cards, setCards] = useState(mockCards);
  const [apply, setApply] = useState({ creditLimit: 5000 });

  const applyCard = (e) => {
    e.preventDefault();
    setCards([
      {
        id: Date.now(),
        cardNumber: "4111-xxxx-xxxx-" + String(Math.floor(Math.random() * 9000) + 1000),
        status: "INACTIVE",
        limit: Number(apply.creditLimit),
        available: Number(apply.creditLimit),
      },
      ...cards,
    ]);
  };

  const toggle = (id) => {
    setCards(
      cards.map((c) =>
        c.id === id ? { ...c, status: c.status === "ACTIVE" ? "INACTIVE" : "ACTIVE" } : c
      )
    );
  };

  return (
    <PageLayout title="Credit Cards">
      <div className="grid-2">
        <div className="card">
          <div className="card-header">Apply for Credit Card</div>
          <div className="card-body">
            <form onSubmit={applyCard}>
              <label className="muted">Requested Credit Limit</label>
              <input
                className="input"
                type="number"
                value={apply.creditLimit}
                onChange={(e) => setApply({ creditLimit: e.target.value })}
              />
              <div className="form-actions">
                <button className="btn btn-primary" type="submit">
                  Apply
                </button>
              </div>
            </form>
            <p className="muted">Later: POST /credit-cards/apply</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">My Cards</div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Card</th>
                  <th>Status</th>
                  <th>Limit</th>
                  <th>Available</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cards.map((c) => (
                  <tr key={c.id}>
                    <td>{c.cardNumber}</td>
                    <td>
                      <span className={c.status === "ACTIVE" ? "badge success" : "badge pending"}>
                        {c.status}
                      </span>
                    </td>
                    <td>${c.limit.toFixed(2)}</td>
                    <td>${c.available.toFixed(2)}</td>
                    <td>
                      <button className="btn btn-outline" onClick={() => toggle(c.id)}>
                        {c.status === "ACTIVE" ? "Deactivate" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="muted" style={{ marginTop: 10 }}>
              Later: PUT /credit-cards/{`{cardId}`}/activate | deactivate
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
