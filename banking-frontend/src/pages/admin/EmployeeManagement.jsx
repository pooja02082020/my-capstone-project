export default function EmployeeDashboard() {
  return (
    <div className="card">
      <h2>Employee Dashboard</h2>
      <p>View and manage customer requests.</p>

      <ul>
        <li>Account verification – Pending</li>
        <li>Transfer approval – Completed</li>
        <li>Password reset – In progress</li>
      </ul>
    </div>
  );
}
