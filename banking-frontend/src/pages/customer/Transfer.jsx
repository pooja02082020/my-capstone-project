import { Card, Form, Input, InputNumber, Button, Typography, Alert, Divider } from "antd";
import { SendOutlined, MailOutlined, DollarOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;

export default function Transfer() {
  const [msg, setMsg] = useState("");
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setMsg(`Transfer submitted: $${values.amount} to ${values.recipient}`);
    form.resetFields();
  };

  return (
    <div style={{ maxWidth: 620 }}>
      <Title level={3} style={{ marginTop: 0 }}>Transfer Funds</Title>
      <Text type="secondary">Send money securely.</Text>

      <Card
        style={{
          marginTop: 20,
          borderRadius: 14,
          boxShadow: "0 10px 30px rgba(109,91,208,0.15)",
          overflow: "hidden"
        }}
      >
        {/* Accent Header */}
        <div
          style={{
            background: "linear-gradient(90deg, #6D5BD0, #8A7CF0)",
            padding: "12px 16px",
            margin: "-24px -24px 20px -24px",
            color: "#fff",
            fontWeight: 600
          }}
        >
          Secure Transfer
        </div>

        {msg && (
          <Alert
            type="success"
            message={msg}
            showIcon
            style={{ marginBottom: 16 }}
          />
        )}

        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            label="Recipient Account / Email"
            name="recipient"
            rules={[{ required: true, message: "Enter recipient" }]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="recipient@bank.com"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, message: "Enter amount" }]}
          >
            <InputNumber
              size="large"
              min={1}
              style={{
                width: "100%",
                background: "#F6F5FB",
                borderRadius: 8
              }}
              prefix={<DollarOutlined />}
              placeholder="0.00"
            />
          </Form.Item>

          <Form.Item label="Note (optional)" name="note">
            <Input.TextArea
              rows={3}
              placeholder="What is this for?"
              style={{ borderRadius: 8 }}
            />
          </Form.Item>

          <Divider />

          <Button
            htmlType="submit"
            icon={<SendOutlined />}
            block
            size="large"
            style={{
              background: "linear-gradient(90deg, #6D5BD0, #8A7CF0)",
              border: "none",
              color: "#fff",
              borderRadius: 10,
              height: 48
            }}
          >
            Send Money
          </Button>
        </Form>
      </Card>
    </div>
  );
}
