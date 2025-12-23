import { Card, Typography, Button, Row, Col, Tag, List, Switch, Divider } from "antd";
import { CreditCardOutlined, LockOutlined, UnlockOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;

export default function CreditCard() {
  const [frozen, setFrozen] = useState(false);

  const transactions = [
    { title: "Buy online at Walmart", amount: "$84.00" },
    { title: "Cash withdrawal", amount: "$1,482.00" },
    { title: "Amazon purchase", amount: "$210.50" },
    { title: "Monthly electricity bill", amount: "$120.00" },
  ];

  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Cards</Title>
      <Text type="secondary">Manage your credit card and recent activity.</Text>

      {/* CARD VISUALS */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={8}>
          <Card style={{ background: "#B7E36A", borderRadius: 12 }}>
            <Text strong>VISA</Text>
            <Title level={5} style={{ marginTop: 12 }}>Platinum Card</Title>
            <Text type="secondary">**** **** **** 2345</Text>
          </Card>
        </Col>

        <Col span={8}>
          <Card style={{ background: "#E6E6E6", borderRadius: 12 }}>
            <Text strong>VISA</Text>
            <Title level={5} style={{ marginTop: 12 }}>Premium Card</Title>
            <Text type="secondary">**** **** **** 9876</Text>
          </Card>
        </Col>

        <Col span={8}>
          <Card style={{ background: "#F0F0F0", borderRadius: 12 }}>
            <Text strong>VISA</Text>
            <Title level={5} style={{ marginTop: 12 }}>Virtual Card</Title>
            <Text type="secondary">**** **** **** 4455</Text>
          </Card>
        </Col>
      </Row>

      {/* MANAGEMENT + TRANSACTIONS */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={10}>
          <Card title="Card Management">
            <p><CreditCardOutlined /> Credit Limit: <strong>$5,000</strong></p>
            <p>Available Credit: <strong>$3,420</strong></p>
            <p>Status: {frozen ? <Tag color="red">Frozen</Tag> : <Tag color="green">Active</Tag>}</p>

            <Divider />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Text>{frozen ? "Card is frozen" : "Card is active"}</Text>
              <Switch
                checked={!frozen}
                checkedChildren={<UnlockOutlined />}
                unCheckedChildren={<LockOutlined />}
                onChange={() => setFrozen((v) => !v)}
              />
            </div>

            <Divider />

            <Button block style={{ marginBottom: 8 }}>Download Statement</Button>
            <Button block>Change PIN</Button>
          </Card>
        </Col>

        <Col span={14}>
          <Card title="Latest Transactions">
            <List
              itemLayout="horizontal"
              dataSource={transactions}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta title={item.title} />
                  <Text strong>{item.amount}</Text>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
