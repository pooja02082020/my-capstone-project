import { Card, Form, Input, Button, Select, Typography } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "./authService";
import logo from "../images/logo.png";

const { Title, Text } = Typography;

export default function Register() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    await authService.register(values);
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea, #64d2b3)",
      }}
    >
      <Card
        style={{
          width: 420,
          borderRadius: 18,
          boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
          border: "1px solid rgba(255,255,255,0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <img src={logo} alt="logo" style={{ width: 64 }} />
          <Title level={3} style={{ marginTop: 14, color: "#3f3d56" }}>
            Create Account
          </Title>
          <Text type="secondary">Register to access the system</Text>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password placeholder="Create a password" />
          </Form.Item>

          <Form.Item name="role" label="Role" rules={[{ required: true }]}>
            <Select
              placeholder="Select role"
              options={[
                { value: "CUSTOMER", label: "Customer" },
                { value: "EMPLOYEE", label: "Employee" },
                { value: "ADMIN", label: "Admin" },
              ]}
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              height: 44,
              fontWeight: 600,
              borderRadius: 9,
              background: "linear-gradient(135deg, #667eea, #64d2b3)",
              border: "none",
            }}
          >
            Register
          </Button>
        </Form>

        <div style={{ marginTop: 18, textAlign: "center" }}>
          <Text type="secondary">
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#667eea", fontWeight: 500 }}>
              Login
            </Link>
          </Text>
        </div>
      </Card>
    </div>
  );
}
