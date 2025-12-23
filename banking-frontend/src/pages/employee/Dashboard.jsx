import { Card, Col, Row, Statistic, Typography } from "antd";

const { Title, Text } = Typography;

export default function EmployeeDashboard() {
  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Employee Dashboard</Title>
      <Text type="secondary">Quick overview of operations.</Text>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} md={8}>
          <Card><Statistic title="Open Tickets" value={7} /></Card>
        </Col>
        <Col xs={24} md={8}>
          <Card><Statistic title="Today Requests" value={12} /></Card>
        </Col>
        <Col xs={24} md={8}>
          <Card><Statistic title="Resolved" value={5} /></Card>
        </Col>

        <Col xs={24}>
          <Card title="Notes">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>Verify customer documents (mock list).</li>
              <li>Review employee records in Employee Management.</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
