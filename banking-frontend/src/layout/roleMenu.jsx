import {
  DashboardOutlined,
  SwapOutlined,
  UnorderedListOutlined,
  CreditCardOutlined,
  LockOutlined,
  TeamOutlined,
} from "@ant-design/icons";

export const roleMenu = {
  CUSTOMER: [
    {
      key: "/customer",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/customer/transfer",
      icon: <SwapOutlined />,
      label: "Transfer",
    },
    {
      key: "/customer/transactions",
      icon: <UnorderedListOutlined />,
      label: "Transactions",
    },
    {
      key: "/customer/credit-card",
      icon: <CreditCardOutlined />,
      label: "Credit Card",
    },
    {
      key: "/customer/locker",
      icon: <LockOutlined />,
      label: "Locker Service",
    },
  ],

  EMPLOYEE: [
    {
      key: "/employee",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/employee/customers",
      icon: <TeamOutlined />,
      label: "Customer Management",
    },
  ],

  ADMIN: [
    {
      key: "/admin",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/admin/employees",
      icon: <TeamOutlined />,
      label: "Employee Management",
    },
  ],
};
