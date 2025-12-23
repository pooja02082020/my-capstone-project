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
        background: "#f7f8fc",
      }}
    >
      <Card
        style={{
          width: 420,
          borderRadius: 16,
          boxShadow: "0 20px 40px rgba(124,108,246,0.15)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <img src={logo} alt="logo" style={{ width: 60 }} />
          <Title level={3} style={{ marginTop: 12 }}>
            Create Account
          </Title>
          <Text type="secondary">Register to access the system</Text>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true }]}
          >
            <Select
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
              backgroundColor: "#7c6cf6",
              borderColor: "#7c6cf6",
            }}
          >
            Register
          </Button>
        </Form>

        <div style={{ marginTop: 16, textAlign: "center" }}>
          <Text type="secondary">
            Already have an account? <Link to="/login">Login</Link>
          </Text>
        </div>
      </Card>
    </div>
  );
}
