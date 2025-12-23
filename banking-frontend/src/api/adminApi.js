const BASE_URL = "http://localhost:8082";

export async function getAllEmployees(token) {
  const res = await fetch(`${BASE_URL}/admin/employees`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch employees");
  return res.json(); // Your backend should return List<EmployeeDto>
}

export async function createEmployee(data, token) {
  const res = await fetch(`${BASE_URL}/admin/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create employee");
  return res.text();
}

export async function updateEmployee(id, data, token) {
  const res = await fetch(`${BASE_URL}/admin/employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update employee");
  return res.text();
}

export async function deleteEmployee(id, token) {
  const res = await fetch(`${BASE_URL}/admin/employees/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to delete employee");
  return res.text();
}
