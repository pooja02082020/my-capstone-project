import { Card, Col, Row, Statistic, Typography, List, Tag } from "antd";
import { Column, Pie } from "@ant-design/plots";

const { Title, Text } = Typography;

export default function EmployeeDashboard() {
  const requestData = [
    { day: "Mon", count: 5 },
    { day: "Tue", count: 8 },
    { day: "Wed", count: 6 },
    { day: "Thu", count: 10 },
    { day: "Fri", count: 7 },
  ];

  const ticketData = [
    { type: "Open", value: 7 },
    { type: "Resolved", value: 5 },
    { type: "Pending", value: 3 },
  ];

  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Employee Dashboard</Title>
      <Text type="secondary">Quick overview of operations.</Text>

      {/* STATS */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={8}><Card><Statistic title="Open Tickets" value={7} /></Card></Col>
        <Col span={8}><Card><Statistic title="Today Requests" value={12} /></Card></Col>
        <Col span={8}><Card><Statistic title="Resolved" value={5} /></Card></Col>
      </Row>

      {/* CHARTS */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={14}>
          <Card title="Daily Customer Requests">
            <Column data={requestData} xField="day" yField="count" color="#6D5BD0" />
          </Card>
        </Col>

        <Col span={10}>
          <Card title="Ticket Status Distribution">
            <Pie
              data={ticketData}
              angleField="value"
              colorField="type"
              radius={0.9}
              label={{ type: "inner", content: "{value}" }}
            />
          </Card>
        </Col>
      </Row>

      {/* NOTES */}
      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="Notes">
            <List
              dataSource={[
                { text: "Verify customer documents", tag: "KYC" },
                { text: "Review customer records", tag: "Accounts" },
              ]}
              renderItem={(item) => (
                <List.Item>
                  {item.text}
                  <Tag color="purple">{item.tag}</Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
