import { useState } from "react";
import PageLayout from "../../components/PageLayout";

const initial = [
  { id: 1, username: "emp1", email: "emp1@test.com", department: "Loans", designation: "Associate" },
  { id: 2, username: "emp2", email: "emp2@test.com", department: "Support", designation: "Officer" },
];

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState(initial);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    department: "",
    designation: "",
  });

  const [editingId, setEditingId] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    if (!editingId) {
      setEmployees([{ id: Date.now(), ...form }, ...employees]);
    } else {
      setEmployees(
        employees.map((e) => (e.id === editingId ? { ...e, ...form, id: editingId } : e))
      );
      setEditingId(null);
    }

    setForm({ username: "", email: "", password: "", department: "", designation: "" });
  };

  const edit = (emp) => {
    setEditingId(emp.id);
    setForm({
      username: emp.username,
      email: emp.email,
      password: "",
      department: emp.department,
      designation: emp.designation,
    });
  };

  const del = (id) => setEmployees(employees.filter((e) => e.id !== id));

  return (
    <PageLayout title="Employee Management">
      <div className="grid-2">
        <div className="card">
          <div className="card-header">{editingId ? "Update Employee" : "Create Employee"}</div>
          <div className="card-body">
            <form onSubmit={submit}>
              <div className="form-row">
                <input
                  className="input"
                  placeholder="Username"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  required
                />
                <input
                  className="input"
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div style={{ height: 10 }} />

              <input
                className="input"
                placeholder="Password (required for create)"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required={!editingId}
              />

              <div style={{ height: 10 }} />

              <div className="form-row">
                <input
                  className="input"
                  placeholder="Department"
                  value={form.department}
                  onChange={(e) => setForm({ ...form, department: e.target.value })}
                  required
                />
                <input
                  className="input"
                  placeholder="Designation"
                  value={form.designation}
                  onChange={(e) => setForm({ ...form, designation: e.target.value })}
                  required
                />
              </div>

              <div className="form-actions">
                <button className="btn btn-primary" type="submit">
                  {editingId ? "Update" : "Create"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => {
                      setEditingId(null);
                      setForm({ username: "", email: "", password: "", department: "", designation: "" });
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>

              <p className="muted" style={{ marginTop: 10 }}>
                Later:
                POST/GET/PUT/DELETE /admin/employees
              </p>
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Employees</div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th style={{ width: 180 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((e) => (
                  <tr key={e.id}>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    <td>{e.department}</td>
                    <td>{e.designation}</td>
                    <td>
                      <button className="btn btn-outline" onClick={() => edit(e)}>
                        Edit
                      </button>{" "}
                      <button className="btn btn-outline" onClick={() => del(e.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="muted" style={{ marginTop: 10 }}>
              This is mock UI. Backend integration later.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
