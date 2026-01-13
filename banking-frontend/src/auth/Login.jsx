import { Card, Form, Input, Button, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginSuccess } from "../store/authSlice";
import { authService } from "./authService";
import logo from "../images/logo.png";

const { Title, Text } = Typography;

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const res = await authService.login(values.email, values.password);
    dispatch(loginSuccess(res));

    if (res.role === "ADMIN") navigate("/admin");
    else if (res.role === "EMPLOYEE") navigate("/employee");
    else navigate("/customer");
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
          width: 380,
          borderRadius: 18,
          boxShadow: "0 25px 60px rgba(0,0,0,0.15)",
          border: "1px solid rgba(255,255,255,0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <img src={logo} alt="logo" style={{ width: 64 }} />
          <Title level={3} style={{ marginTop: 14, color: "#3f3d56" }}>
            Bank Management
          </Title>
          <Text type="secondary">Secure role-based access</Text>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              height: 44,
              fontWeight: 602,
              borderRadius: 10,
              background: "linear-gradient(135deg, #667eea, #64d2b3)",
              border: "none",
            }}
          >
            Login
          </Button>
        </Form>

        <div style={{ marginTop: 18, textAlign: "center" }}>
          <Text type="secondary">
            New user?{" "}
            <Link to="/register" style={{ color: "#667eea", fontWeight: 502 }}>
              Create an account
            </Link>
          </Text>
        </div>
      </Card>
    </div>
  );
}
