import {
  Card,
  Col,
  Row,
  Statistic,
  Typography,
  Tag,
  Progress,
  Timeline,
} from "antd";
import { Column, Pie } from "@ant-design/plots";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

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

  const statStyle = {
    borderRadius: 12,
    transition: "all 0.3s",
  };

  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>
        Employee Dashboard
      </Title>
      <Text type="secondary">
        Daily workload, requests, and ticket insights.
      </Text>

      {/* STATS */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col xs={24} md={8}>
          <Card
            style={{
              ...statStyle,
              background: "linear-gradient(135deg, #FF9A9E, #FAD0C4)",
            }}
          >
            <Statistic
              title="Open Tickets"
              value={7}
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card
            style={{
              ...statStyle,
              background: "linear-gradient(135deg, #A1C4FD, #C2E9FB)",
            }}
          >
            <Statistic
              title="Today Requests"
              value={12}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card style={statStyle}>
            <Statistic
              title="Resolved Tickets"
              value={5}
              prefix={<CheckCircleOutlined style={{ color: "#52c41a" }} />}
            />
            <Progress
              percent={70}
              strokeColor="#52c41a"
              style={{ marginTop: 12 }}
            />
          </Card>
        </Col>
      </Row>

      {/* CHARTS */}
      <Row gutter={16} style={{ marginTop: 28 }}>
        <Col xs={24} lg={14}>
          <Card title="Daily Customer Requests">
            <Column
              data={requestData}
              xField="day"
              yField="count"
              color="#6D5BD0"
              columnStyle={{ radius: [6, 6, 0, 0] }}
            />
          </Card>
        </Col>

        <Col xs={24} lg={10}>
          <Card title="Ticket Status Distribution">
            <Pie
              data={ticketData}
              angleField="value"
              colorField="type"
              radius={0.9}
              label={{
                type: "inner",
                content: "{value}",
                style: { fontSize: 14 },
              }}
            />
          </Card>
        </Col>
      </Row>

      {/* NOTES / TASKS */}
      <Row style={{ marginTop: 28 }}>
        <Col span={24}>
          <Card title="Pending Tasks">
            <Timeline
              items={[
                {
                  children: (
                    <>
                      Verify customer documents <Tag color="purple">KYC</Tag>
                    </>
                  ),
                },
                {
                  children: (
                    <>
                      Review customer records <Tag color="blue">Accounts</Tag>
                    </>
                  ),
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
