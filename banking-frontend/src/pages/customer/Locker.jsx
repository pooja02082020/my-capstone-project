import { 
  Card, 
  Typography, 
  Descriptions, 
  Button, 
  Alert, 
  Row, 
  Col, 
  Tag, 
  Space 
} from "antd";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;

export default function Locker() {
  const [status, setStatus] = useState("NONE");
  const [msg, setMsg] = useState("");

  const requestLocker = () => {
    setStatus("PENDING");
    setMsg("Locker request submitted successfully. Status updated to Pending.");
  };

  const statusTag = {
    NONE: <Tag>Not Assigned</Tag>,
    PENDING: <Tag color="gold">Pending Approval</Tag>,
    ACTIVE: <Tag color="green">Active</Tag>,
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 24 }}>
        <Title level={3} style={{ marginBottom: 0 }}>
          Locker Service
        </Title>
        <Text type="secondary">
          Secure storage service for your valuables.
        </Text>
      </div>

      {msg && (
        <Alert
          type="success"
          showIcon
          message={msg}
          style={{ marginBottom: 24 }}
        />
      )}

      <Row gutter={[24, 24]}>
        {/* Locker Info */}
        <Col xs={24} lg={16}>
          <Card
            title={
              <Space>
                <LockOutlined />
                Locker Details
              </Space>
            }
          >
            <Descriptions bordered column={1} size="middle">
              <Descriptions.Item label="Locker Status">
                {statusTag[status]}
              </Descriptions.Item>
              <Descriptions.Item label="Branch">
                Downtown Branch (Mock)
              </Descriptions.Item>
              <Descriptions.Item label="Locker ID">
                {status === "NONE" ? "-" : "LKR-1042"}
              </Descriptions.Item>
              <Descriptions.Item label="Access Instructions">
                Bring valid government-issued ID for locker activation.
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        {/* Actions */}
        <Col xs={24} lg={8}>
          <Card title="Actions">
            <Space direction="vertical" style={{ width: "100%" }} size="middle">
              <Button
                type="primary"
                block
                disabled={status !== "NONE"}
                onClick={requestLocker}
              >
                Request Locker
              </Button>

              <Button
                icon={<PhoneOutlined />}
                block
                disabled={status === "NONE"}
              >
                Contact Support
              </Button>

              <Text type="secondary" style={{ fontSize: 12 }}>
                Locker approval is subject to availability and branch verification.
              </Text>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
