import { Card, Table, Tag, Typography } from "antd";
import { useMemo } from "react";

const { Title, Text } = Typography;

export default function Transactions() {
  const data = useMemo(
    () => [
      { id: 1, date: "2025-01-18", type: "Transfer", description: "Sent to pooja@bank.com", amount: -200, status: "Completed" },
      { id: 2, date: "2025-01-17", type: "Card Payment", description: "Grocery Store", amount: -56.2, status: "Completed" },
      { id: 3, date: "2025-01-16", type: "Transfer", description: "Received from simran@bank.com", amount: 500, status: "Completed" },
      { id: 4, date: "2025-01-15", type: "Locker", description: "Locker service request", amount: 0, status: "Pending" },
      { id: 5, date: "2025-01-14", type: "Card Payment", description: "Online Subscription", amount: -29.99, status: "Failed" },
    ],
    []
  );

  const columns = [
    { title: "Date", dataIndex: "date" },
    { title: "Type", dataIndex: "type" },
    { title: "Description", dataIndex: "description" },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (value) => (
        <span style={{ color: value < 0 ? "#d4380d" : "#389e0d", fontWeight: 600 }}>
          {value < 0 ? "-" : "+"}${Math.abs(value)}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        if (status === "Completed") return <Tag color="green">Completed</Tag>;
        if (status === "Pending") return <Tag color="orange">Pending</Tag>;
        return <Tag color="red">Failed</Tag>;
      },
    },
  ];

  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Transactions</Title>
      <Text type="secondary">View your recent banking transactions.</Text>

      <Card style={{ marginTop: 16 }}>
        <Table
          rowKey="id"
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 6 }}
        />
      </Card>
    </div>
  );
}
