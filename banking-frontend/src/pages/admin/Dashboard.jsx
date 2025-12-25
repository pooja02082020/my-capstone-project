import {
  Card,
  Col,
  Row,
  Statistic,
  Typography,
  List,
  Tag,
  Progress,
  Timeline,
} from "antd";
import { Column, Pie } from "@ant-design/plots";
import {
  TeamOutlined,
  UserOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

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

  const statCardStyle = {
    borderRadius: 12,
    transition: "all 0.3s",
    cursor: "pointer",
  };

  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>
        Admin Dashboard
      </Title>
      <Text type="secondary">
        Monitor users, system health, and administrative activity.
      </Text>

      {/* TOP STATS */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col xs={24} md={8}>
          <Card
            style={{
              ...statCardStyle,
              background: "linear-gradient(135deg, #6D5BD0, #867BFF)",
              color: "#fff",
            }}
          >
            <Statistic
              title={<Text style={{ color: "#fff" }}>Total Employees</Text>}
              value={12}
              prefix={<TeamOutlined />}
              valueStyle={{ color: "#fff" }}
            />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            style={{
              ...statCardStyle,
              background: "linear-gradient(135deg, #00C6FF, #0072FF)",
              color: "#fff",
            }}
          >
            <Statistic
              title={<Text style={{ color: "#fff" }}>Active Users</Text>}
              value={128}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#fff" }}
            />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card style={{ ...statCardStyle }}>
            <Statistic
              title="System Health"
              value="Operational"
              prefix={<CheckCircleOutlined style={{ color: "#52c41a" }} />}
            />
            <Progress
              percent={98}
              status="active"
              strokeColor="#52c41a"
              style={{ marginTop: 12 }}
            />
          </Card>
        </Col>
      </Row>

      {/* CHARTS */}
      <Row gutter={16} style={{ marginTop: 28 }}>
        <Col xs={24} lg={14}>
          <Card title="User Activity (This Week)">
            <Column
              data={activityData}
              xField="day"
              yField="actions"
              color="#6D5BD0"
              columnStyle={{ radius: [6, 6, 0, 0] }}
            />
          </Card>
        </Col>

        <Col xs={24} lg={10}>
          <Card title="User Distribution">
            <Pie
              data={userData}
              angleField="value"
              colorField="type"
              radius={0.9}
              label={{
                type: "inner",
                offset: "-30%",
                content: "{value}",
                style: { fontSize: 14 },
              }}
            />
          </Card>
        </Col>
      </Row>

      {/* RECENT ACTIVITY */}
      <Row style={{ marginTop: 28 }}>
        <Col span={24}>
          <Card title="Recent Admin Actions">
            <Timeline
              items={[
                {
                  dot: <CheckCircleOutlined style={{ color: "green" }} />,
                  children: "Employee account activated",
                },
                {
                  dot: <ClockCircleOutlined style={{ color: "blue" }} />,
                  children: "New customer registered",
                },
                {
                  dot: <ClockCircleOutlined style={{ color: "orange" }} />,
                  children: "Inactive user reviewed",
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
