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
        background: "#f7f8fc",
      }}
    >
      <Card
        style={{
          width: 380,
          borderRadius: 16,
          boxShadow: "0 20px 40px rgba(124,108,246,0.15)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <img src={logo} alt="logo" style={{ width: 60 }} />
          <Title level={3} style={{ marginTop: 12 }}>
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
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password />
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
            Login
          </Button>
        </Form>

        <div style={{ marginTop: 16, textAlign: "center" }}>
          <Text type="secondary">
            New user? <Link to="/register">Create an account</Link>
          </Text>
        </div>
      </Card>
    </div>
  );
}
