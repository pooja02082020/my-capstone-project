import { Card, Col, Row, Statistic, Typography } from "antd";

const { Title, Text } = Typography;

export default function CustomerDashboard() {
  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Customer Dashboard</Title>
      <Text type="secondary">Overview of your banking activity.</Text>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Available Balance" value={12450} prefix="$" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="This Month Transfers" value={6} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Card Status" value="Active" />
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Recent Activity">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>Transfer sent to john@bank.com ($200)</li>
              <li>Card payment at Grocery Store ($56.20)</li>
              <li>Locker service: Request status updated</li>
            </ul>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Alerts">
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              <li>Keep your contact details up to date.</li>
              <li>Review your transactions weekly.</li>
              <li>Enable 2FA when backend auth is connected.</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
