import { useEffect, useState } from "react";
import {
  listEmployeesApi,
  createEmployeeApi,
  updateEmployeeApi,
  deleteEmployeeApi,
} from "../../api/adminApi";

export default function EmployeeManagement() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    department: "",
    designation: "",
  });

  async function load() {
    setErr("");
    setLoading(true);
    try {
      const res = await listEmployeesApi();
      setRows(res.data || []);
    } catch (e) {
      setErr(e?.response?.data?.message || e.message || "Failed to load employees");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleCreate(e) {
    e.preventDefault();
    setErr("");
    try {
      await createEmployeeApi(form);
      setForm({ username: "", email: "", password: "", department: "", designation: "" });
      await load();
    } catch (e2) {
      setErr(e2?.response?.data?.message || e2.message || "Create failed");
    }
  }

  async function handleDelete(id) {
    if (!confirm("Delete employee?")) return;
    setErr("");
    try {
      await deleteEmployeeApi(id);
      await load();
    } catch (e2) {
      setErr(e2?.response?.data?.message || e2.message || "Delete failed");
    }
  }

  return (
    <div className="page">
      <h1 className="page-title">Employee Management</h1>
      <p className="page-subtitle">Admin can create/update/delete employees.</p>

      {err && <div className="alert error">{err}</div>}

      <div className="card">
        <h3 className="section-title">Create Employee</h3>

        <form className="form-grid" onSubmit={handleCreate}>
          <input
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            placeholder="Temp Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <input
            placeholder="Department"
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
            required
          />
          <input
            placeholder="Designation"
            value={form.designation}
            onChange={(e) => setForm({ ...form, designation: e.target.value })}
            required
          />
          <button className="btn-primary" type="submit">
            Create
          </button>
        </form>
      </div>

      <div className="card">
        <h3 className="section-title">Employees</h3>

        {loading ? (
          <div className="muted">Loading...</div>
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.username}</td>
                    <td>{r.email}</td>
                    <td>{r.department}</td>
                    <td>{r.designation}</td>
                    <td>
                      <button className="btn-danger" onClick={() => handleDelete(r.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td colSpan="6" className="muted">
                      No employees found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
