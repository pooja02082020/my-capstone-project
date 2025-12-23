const BASE_URL = "http://localhost:8082"; // auth-service port

export async function loginApi(credentials) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    // If backend returns JSON error, you can parse it here.
    throw new Error("Login failed. Check email/password.");
  }

  // Expected JSON: { token, role, email, name }
  return res.json();
}

export async function registerApi(data) {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Registration failed");
  return res.text();
}
