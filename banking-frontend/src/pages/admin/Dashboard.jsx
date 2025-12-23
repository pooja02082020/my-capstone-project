import { Card, Col, Row, Statistic, Typography, List, Tag } from "antd";
import { Column, Pie } from "@ant-design/plots";
import { TeamOutlined, UserOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function AdminDashboard() {
  const userData = [
    { type: "Customers", value: 90 },
    { type: "Employees", value: 30 },
    { type: "Admins", value: 8 },
  ];

  const activityData = [
    { day: "Mon", actions: 20 },
    { day: "Tue", actions: 35 },
    { day: "Wed", actions: 28 },
    { day: "Thu", actions: 40 },
    { day: "Fri", actions: 55 },
  ];

  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Admin Dashboard</Title>
      <Text type="secondary">System overview and admin insights.</Text>

      {/* TOP STATS */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={8}>
          <Card>
            <Statistic title="Total Employees" value={12} prefix={<TeamOutlined />} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Active Users" value={128} prefix={<UserOutlined />} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="System Status" value="Operational" prefix={<CheckCircleOutlined style={{ color: "#52c41a" }} />} />
          </Card>
        </Col>
      </Row>

      {/* CHARTS */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={14}>
          <Card title="User Activity (This Week)">
            <Column data={activityData} xField="day" yField="actions" color="#6D5BD0" />
          </Card>
        </Col>

        <Col span={10}>
          <Card title="User Distribution">
            <Pie
              data={userData}
              angleField="value"
              colorField="type"
              radius={0.9}
              label={{ type: "inner", offset: "-30%", content: "{value}" }}
            />
          </Card>
        </Col>
      </Row>

      {/* ACTIVITY LIST */}
      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="Recent Admin Actions">
            <List
              dataSource={[
                { text: "Employee account activated", tag: "Success" },
                { text: "New customer registered", tag: "Info" },
                { text: "Inactive user reviewed", tag: "Warning" },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <Text>{item.text}</Text>
                  <Tag color={item.tag === "Success" ? "green" : item.tag === "Warning" ? "orange" : "blue"}>
                    {item.tag}
                  </Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
