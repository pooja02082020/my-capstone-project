import { Card, Form, Input, InputNumber, Button, Typography, Alert } from "antd";
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
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Transfer Funds</Title>
      <Text type="secondary">Send money securely.</Text>

      <Card style={{ maxWidth: 560, marginTop: 16 }}>
        {msg ? <Alert type="success" message={msg} showIcon style={{ marginBottom: 16 }} /> : null}

        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            label="Recipient Account / Email"
            name="recipient"
            rules={[{ required: true, message: "Enter recipient" }]}
          >
            <Input placeholder="recipient@bank.com" />
          </Form.Item>

          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, message: "Enter amount" }]}
          >
            <InputNumber style={{ width: "100%" }} min={1} placeholder="0.00" />
          </Form.Item>

          <Form.Item label="Note (optional)" name="note">
            <Input.TextArea rows={3} placeholder="What is this for?" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Send Money
          </Button>
        </Form>
      </Card>
    </div>
  );
}
