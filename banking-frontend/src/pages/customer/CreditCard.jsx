import { Card, Typography, Descriptions, Button, Alert } from "antd";
import { useState } from "react";

const { Title, Text } = Typography;

export default function CreditCard() {
  const [freeze, setFreeze] = useState(false);

  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Credit Card</Title>
      <Text type="secondary">Manage your credit card settings.</Text>

      <Card style={{ maxWidth: 720, marginTop: 16 }}>
        <Descriptions title="Card Overview" bordered column={1}>
          <Descriptions.Item label="Card Type">Platinum</Descriptions.Item>
          <Descriptions.Item label="Status">{freeze ? "Frozen" : "Active"}</Descriptions.Item>
          <Descriptions.Item label="Credit Limit">$5,000</Descriptions.Item>
          <Descriptions.Item label="Available Credit">$3,420</Descriptions.Item>
          <Descriptions.Item label="Next Payment Due">2026-01-10</Descriptions.Item>
        </Descriptions>

        <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
          <Button type={freeze ? "default" : "primary"} onClick={() => setFreeze((v) => !v)}>
            {freeze ? "Unfreeze Card" : "Freeze Card"}
          </Button>
          <Button>Request Limit Increase</Button>
        </div>

        <div style={{ marginTop: 16 }}>
          <Alert
            type="info"
            showIcon
            message="These actions are mock for frontend demo. Connect backend later."
          />
        </div>
      </Card>
    </div>
  );
}
