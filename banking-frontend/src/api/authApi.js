import api from "./axios";

// aligns with backend
export const registerApi = (payload) => api.post("/auth/register", payload);
export const loginApi = (payload) => api.post("/auth/login", payload);
