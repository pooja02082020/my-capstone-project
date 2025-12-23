import { Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

import CustomerDashboard from "../pages/customer/CustomerDashboard";
import TransferFunds from "../pages/customer/TransferFunds";
import Transactions from "../pages/customer/Transactions";

import AdminDashboard from "../pages/admin/AdminDashboard";
import EmployeeManagement from "../pages/admin/EmployeeManagement";

import EmployeeDashboard from "../pages/employee/EmployeeDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/customer" element={<PageLayout />}>
        <Route index element={<CustomerDashboard />} />
        <Route path="transfer" element={<TransferFunds />} />
        <Route path="transactions" element={<Transactions />} />
      </Route>

      <Route path="/admin" element={<PageLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="employees" element={<EmployeeManagement />} />
      </Route>

      <Route path="/employee" element={<PageLayout />}>
        <Route index element={<EmployeeDashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/customer" />} />
    </Routes>
  );
}
