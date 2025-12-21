import api from "./axios";

export const listEmployeesApi = () => api.get("/admin/employees");
export const createEmployeeApi = (payload) => api.post("/admin/employees", payload);
export const updateEmployeeApi = (id, payload) => api.put(`/admin/employees/${id}`, payload);
export const deleteEmployeeApi = (id) => api.delete(`/admin/employees/${id}`);
