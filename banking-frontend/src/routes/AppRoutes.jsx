// import { Routes, Route, Navigate } from "react-router-dom";
// import ProtectedRoute from "../auth/ProtectedRoute";

// import Login from "../auth/Login";
// import Register from "../auth/Register";

// import AdminDashboard from "../pages/admin/AdminDashboard";
// import EmployeeManagement from "../pages/admin/EmployeeManagement";

// import CustomerDashboard from "../pages/customer/CustomerDashboard";
// import AccountsPage from "../pages/customer/AccountsPage";
// import TransactionsPage from "../pages/customer/TransactionsPage";
// import TransactionHistoryPage from "../pages/customer/TransactionHistoryPage";
// import CreditCardsPage from "../pages/customer/CreditCardsPage";
// import LockerMyPage from "../pages/customer/LockerMyPage";

// import EmployeeDashboard from "../pages/employee/EmployeeDashboard";
// import LockerManagementPage from "../pages/employee/LockerManagementPage";
// import TransactionMonitoringPage from "../pages/employee/TransactionMonitoringPage";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/login" replace />} />

//       {/* Public */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       {/* Customer */}
//       <Route
//         path="/customer"
//         element={
//           <ProtectedRoute roles={["CUSTOMER"]}>
//             <CustomerDashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/customer/accounts"
//         element={
//           <ProtectedRoute roles={["CUSTOMER"]}>
//             <AccountsPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/customer/transactions"
//         element={
//           <ProtectedRoute roles={["CUSTOMER"]}>
//             <TransactionsPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/customer/history"
//         element={
//           <ProtectedRoute roles={["CUSTOMER"]}>
//             <TransactionHistoryPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/customer/credit-cards"
//         element={
//           <ProtectedRoute roles={["CUSTOMER"]}>
//             <CreditCardsPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/customer/locker"
//         element={
//           <ProtectedRoute roles={["CUSTOMER"]}>
//             <LockerMyPage />
//           </ProtectedRoute>
//         }
//       />

//       {/* Employee */}
//       <Route
//         path="/employee"
//         element={
//           <ProtectedRoute roles={["EMPLOYEE"]}>
//             <EmployeeDashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/employee/lockers"
//         element={
//           <ProtectedRoute roles={["EMPLOYEE"]}>
//             <LockerManagementPage />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/employee/transactions"
//         element={
//           <ProtectedRoute roles={["EMPLOYEE", "ADMIN"]}>
//             <TransactionMonitoringPage />
//           </ProtectedRoute>
//         }
//       />

//       {/* Admin */}
//       <Route
//         path="/admin"
//         element={
//           <ProtectedRoute roles={["ADMIN"]}>
//             <AdminDashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/admin/employees"
//         element={
//           <ProtectedRoute roles={["ADMIN"]}>
//             <EmployeeManagement />
//           </ProtectedRoute>
//         }
//       />

//       <Route path="*" element={<Navigate to="/login" replace />} />
//     </Routes>
//   );
// }

import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../auth/Login";
import Register from "../auth/Register";

import AdminDashboard from "../pages/admin/AdminDashboard";
import CustomerDashboard from "../pages/customer/CustomerDashboard";
import EmployeeDashboard from "../pages/employee/EmployeeDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Temporary dashboards (no protection yet) */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/customer" element={<CustomerDashboard />} />
      <Route path="/employee" element={<EmployeeDashboard />} />

      {/* Default */}
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}
