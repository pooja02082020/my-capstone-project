import { Card, Table, Tag, Typography } from "antd";

const { Title, Text } = Typography;

const data = [
  { key: 1, type: "Debit", amount: 200, detail: "Transfer to john@bank.com", status: "Completed" },
  { key: 2, type: "Credit", amount: 500, detail: "Salary", status: "Completed" },
  { key: 3, type: "Debit", amount: 56.2, detail: "Card payment - Grocery", status: "Pending" },
];

export default function Transactions() {
  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      render: (v) => (v === "Credit" ? <Tag color="green">Credit</Tag> : <Tag color="red">Debit</Tag>),
    },
    { title: "Amount", dataIndex: "amount", render: (v) => `$${v}` },
    { title: "Details", dataIndex: "detail" },
    {
      title: "Status",
      dataIndex: "status",
      render: (v) => (v === "Completed" ? <Tag color="blue">Completed</Tag> : <Tag color="gold">Pending</Tag>),
    },
  ];

  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Transactions</Title>
      <Text type="secondary">View your recent transaction history.</Text>

      <Card style={{ marginTop: 16 }}>
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
      </Card>
    </div>
  );
}
