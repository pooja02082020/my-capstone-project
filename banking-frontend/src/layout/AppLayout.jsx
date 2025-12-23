import { Layout, Menu, Avatar, Typography, Space, Button, Modal } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { roleMenu } from "./roleMenu";
import logo from "../images/logo.png";
import { useState } from "react";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const SIDER_WIDTH = 260;

export default function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { role, user } = useSelector((state) => state.auth);
  const items = roleMenu[role] || [];

  const [logoutOpen, setLogoutOpen] = useState(false);

  const selectedKey = items
  .slice()
  .sort((a, b) => b.key.length - a.key.length) // longest path first
  .find(
    (item) =>
      location.pathname === item.key ||
      location.pathname.startsWith(item.key + "/")
  )?.key;


  const handleLogout = () => {
    dispatch(logout());
    setLogoutOpen(false);
    navigate("/login", { replace: true });
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#F6F5FB" }}>
      {/* ================= SIDEBAR ================= */}
      <Sider
        width={SIDER_WIDTH}
        theme="dark"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: "linear-gradient(180deg, #7B6FE6, #5A4FCF)",
          boxShadow: "2px 0 12px rgba(0,0,0,0.15)",
          overflow: "auto",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            padding: "22px 18px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <img
            src={logo}
            alt="Bank Management"
            style={{ width: 36, height: 36 }}
          />
          <div style={{ color: "#fff" }}>
            <div style={{ fontSize: 20, fontWeight: 800 }}>
              Bank Management
            </div>
            <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>
              Role-based SPA
            </Text>
          </div>
        </div>

        {/* MENU */}
        <Menu
          mode="inline"
          selectedKeys={selectedKey ? [selectedKey] : []}
          items={items}
          onClick={(e) => navigate(e.key)}
          style={{
            background: "transparent",
            borderRight: 0,
            padding: 8,
          }}
        />
      </Sider>

      {/* ================= MAIN ================= */}
      <Layout style={{ marginLeft: SIDER_WIDTH }}>
        {/* HEADER */}
        <Header
          style={{
            background: "#FFFFFF",
            height: 64,
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          {/* TITLE */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#6D5BD0",
                lineHeight: 1.2,
              }}
            >
              Bank Management
            </div>
            <Text type="secondary" style={{ fontSize: 12 }}>
              {role}
            </Text>
          </div>

          {/* USER + LOGOUT */}
          <Space size={16} align="center">
            <Space>
              <Avatar
                style={{
                  backgroundColor: "#6D5BD0",
                  fontWeight: 700,
                }}
              >
                {(user?.name?.[0] || "U").toUpperCase()}
              </Avatar>
              <div style={{ lineHeight: 1.2 }}>
                <div style={{ fontWeight: 600 }}>
                  {user?.name || "User"}
                </div>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {user?.email || ""}
                </Text>
              </div>
            </Space>

            <Button
              type="link"
              icon={<LogoutOutlined />}
              onClick={() => setLogoutOpen(true)}
            >
              Logout
            </Button>
          </Space>
        </Header>

        {/* CONTENT */}
        <Content
          style={{
            padding: "32px",
            paddingTop: "40px",
            background: "#F6F5FB",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Outlet />
          </div>
        </Content>
      </Layout>

      {/* LOGOUT CONFIRMATION */}
      <Modal
        title="Confirm Logout"
        open={logoutOpen}
        onOk={handleLogout}
        onCancel={() => setLogoutOpen(false)}
        okText="Logout"
        okButtonProps={{ danger: true }}
      >
        Are you sure you want to logout?
      </Modal>
    </Layout>
  );
}
