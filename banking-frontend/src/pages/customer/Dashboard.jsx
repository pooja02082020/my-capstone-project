import { Card, Col, Row, Statistic, Typography, Progress } from "antd";
import { Column, Area } from "@ant-design/plots";

const { Title, Text } = Typography;

export default function CustomerDashboard() {
  const barData = [
    { month: "Jan", value: 3 },
    { month: "Feb", value: 5 },
    { month: "Mar", value: 4 },
    { month: "Apr", value: 6 },
    { month: "May", value: 8 },
    { month: "Jun", value: 6 },
  ];

  const areaData = [
    { month: "Jan", balance: 10200 },
    { month: "Feb", balance: 10800 },
    { month: "Mar", balance: 11300 },
    { month: "Apr", balance: 11800 },
    { month: "May", balance: 12450 },
  ];

  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Customer Dashboard</Title>
      <Text type="secondary">Overview of your banking activity.</Text>

      {/* TOP STATS */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={6}><Card><Statistic title="Balance" value={12450} prefix="$" /></Card></Col>
        <Col span={6}><Card><Statistic title="Transfers" value={6} /></Card></Col>
        <Col span={6}><Card><Statistic title="Transactions" value={18} /></Card></Col>
        <Col span={6}><Card><Statistic title="Rating" value={8.5} suffix="/10" /></Card></Col>
      </Row>

      {/* CHART SECTION */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={14}>
          <Card title="Monthly Transfers">
            <Column data={barData} xField="month" yField="value" color="#6D5BD0" />
          </Card>
        </Col>

        <Col span={10}>
          <Card title="Service Usage">
            <div style={{ textAlign: "center" }}>
              <Progress type="dashboard" percent={45} strokeColor="#6D5BD0" />
              <Text type="secondary">Locker & Card Usage</Text>
            </div>
          </Card>
        </Col>
      </Row>

      {/* BALANCE TREND */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="Balance Trend">
            <Area data={areaData} xField="month" yField="balance" smooth color="#8B7CF6" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
