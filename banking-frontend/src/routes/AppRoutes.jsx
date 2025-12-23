import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreSession } from "../store/authSlice";

import RoleGate from "./RoleGate";
import AppLayout from "../layout/AppLayout";

/* Auth */
import Login from "../auth/Login";
import Register from "../auth/Register";

/* Customer pages */
import CustomerDashboard from "../pages/customer/Dashboard";
import Transfer from "../pages/customer/Transfer";
import Transactions from "../pages/customer/Transactions";
import CreditCard from "../pages/customer/CreditCard";
import Locker from "../pages/customer/Locker";

/* Employee pages */
import EmployeeDashboard from "../pages/employee/Dashboard";
import CustomerManagement from "../pages/employee/CustomerManagement";

/* Admin pages */
import AdminDashboard from "../pages/admin/Dashboard";
import EmployeeManagement from "../pages/admin/EmployeeManagement";

export default function AppRoutes() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* CUSTOMER */}
        <Route element={<RoleGate allowedRoles={["CUSTOMER"]} />}>
          <Route path="/customer" element={<AppLayout />}>
            <Route index element={<CustomerDashboard />} />
            <Route path="transfer" element={<Transfer />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="credit-card" element={<CreditCard />} />
            <Route path="locker" element={<Locker />} />
          </Route>
        </Route>

        {/* EMPLOYEE */}
        <Route element={<RoleGate allowedRoles={["EMPLOYEE"]} />}>
          <Route path="/employee" element={<AppLayout />}>
            <Route index element={<EmployeeDashboard />} />
            <Route path="customers" element={<CustomerManagement />} />
          </Route>
        </Route>

        {/* ADMIN */}
        <Route element={<RoleGate allowedRoles={["ADMIN"]} />}>
          <Route path="/admin" element={<AppLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="employees" element={<EmployeeManagement />} />
          </Route>
        </Route>

        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
