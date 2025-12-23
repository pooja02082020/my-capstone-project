import { useState } from "react";

export default function TransferFunds() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  function submit() {
    setMessage(`$${amount} sent to ${recipient}`);
    setRecipient("");
    setAmount("");
    setNote("");
  }

  return (
    <div className="transferCard">
      <h2>Transfer Funds</h2>
      <p>Send money securely to anyone.</p>

      <input
        placeholder="Recipient Account / Email"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <textarea
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={submit}>Send Money</button>

      {message && <p className="success">{message}</p>}
    </div>
  );
}
