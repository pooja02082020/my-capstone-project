import { Card, Col, Row, Statistic, Typography } from "antd";

const { Title, Text } = Typography;

export default function AdminDashboard() {
  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Admin Dashboard</Title>
      <Text type="secondary">System overview and admin actions.</Text>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} md={8}>
          <Card><Statistic title="Total Employees" value={12} /></Card>
        </Col>
        <Col xs={24} md={8}>
          <Card><Statistic title="Active Users" value={128} /></Card>
        </Col>
        <Col xs={24} md={8}>
          <Card><Statistic title="System Health" value="Operational" /></Card>
        </Col>

        <Col xs={24}>
          <Card title="Admin Notes">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>Manage employees from Employee Management.</li>
              <li>Roles and permissions can be connected to backend later.</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
