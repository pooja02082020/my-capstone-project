import { Card, Table, Button, Modal, Form, Input, Space, Typography, Badge } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";

const { Title, Text } = Typography;

export default function CustomerManagement() {
  const [customers, setCustomers] = useState([
    { id: 101, name: "Alice Brown", email: "alice@bank.com", status: "Active" },
    { id: 102, name: "Mark Lee", email: "mark@bank.com", status: "Active" },
    { id: 103, name: "Nina Shah", email: "nina@bank.com", status: "Inactive" },
  ]);

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form] = Form.useForm();

  const columns = useMemo(() => [
    { title: "ID", dataIndex: "id", width: 80 },
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Status",
      dataIndex: "status",
      render: v => <Badge status={v === "Active" ? "success" : "error"} text={v} />
    },
    {
      title: "Action",
      render: (_, record) => (
        <Space>
          <Button onClick={() => { setEditing(record); setOpen(true); form.setFieldsValue(record); }} icon={<EditOutlined />}>Edit</Button>
          <Button danger={record.status === "Active"} onClick={() => setCustomers(p => p.map(c => c.id === record.id ? { ...c, status: c.status === "Active" ? "Inactive" : "Active" } : c))}>
            {record.status === "Active" ? "Disable" : "Enable"}
          </Button>
        </Space>
      )
    }
  ], [form]);

  return (
    <div>
      <Title level={3}>Customer Management</Title>
      <Text type="secondary">Manage customers (mock data)</Text>

      <Card style={{ marginTop: 16 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => { setEditing(null); form.resetFields(); setOpen(true); }} style={{ marginBottom: 12 }}>
          Add Customer
        </Button>

        <Table rowKey="id" columns={columns} dataSource={customers} pagination={false} />

        <Modal title={editing ? "Edit Customer" : "Add Customer"} open={open} onCancel={() => setOpen(false)} onOk={async () => { const v = await form.validateFields(); setCustomers(p => editing ? p.map(c => c.id === editing.id ? { ...c, ...v } : c) : [...p, { id: Math.max(...p.map(c => c.id)) + 1, status: "Active", ...v }]); setOpen(false); }}>
          <Form layout="vertical" form={form}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}><Input /></Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}><Input /></Form.Item>
          </Form>
        </Modal>
      </Card>
    </div>
  );
}
