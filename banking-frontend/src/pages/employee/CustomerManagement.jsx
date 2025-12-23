import { Card, Table, Button, Modal, Form, Input, Space, Typography, Tag } from "antd";
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

  const columns = useMemo(
    () => [
      { title: "Customer ID", dataIndex: "id" },
      { title: "Name", dataIndex: "name" },
      { title: "Email", dataIndex: "email" },
      {
        title: "Status",
        dataIndex: "status",
        render: (v) => (v === "Active" ? <Tag color="green">Active</Tag> : <Tag color="red">Inactive</Tag>),
      },
      {
        title: "Action",
        render: (_, record) => (
          <Space>
            <Button
              onClick={() => {
                setEditing(record);
                setOpen(true);
                form.setFieldsValue(record);
              }}
            >
              Edit
            </Button>
            <Button danger onClick={() => setCustomers((prev) => prev.filter((c) => c.id !== record.id))}>
              Disable
            </Button>
          </Space>
        ),
      },
    ],
    [form]
  );

  const onAdd = () => {
    setEditing(null);
    form.resetFields();
    setOpen(true);
  };

  const onSave = async () => {
    const values = await form.validateFields();

    if (editing) {
      setCustomers((prev) =>
        prev.map((c) => (c.id === editing.id ? { ...c, ...values } : c))
      );
    } else {
      const nextId = Math.max(...customers.map((c) => c.id)) + 1;
      setCustomers((prev) => [
        ...prev,
        { id: nextId, status: "Active", ...values },
      ]);
    }

    setOpen(false);
  };

  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>
        Customer Management
      </Title>
      <Text type="secondary">
        View and manage customer records (mock data).
      </Text>

      <Card style={{ marginTop: 16 }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
          <Button type="primary" onClick={onAdd}>
            Add Customer
          </Button>
        </div>

        <Table
          rowKey="id"
          columns={columns}
          dataSource={customers}
          pagination={{ pageSize: 6 }}
        />

        <Modal
          title={editing ? "Edit Customer" : "Add Customer"}
          open={open}
          onCancel={() => setOpen(false)}
          onOk={onSave}
          okText="Save"
        >
          <Form layout="vertical" form={form}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Enter name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: "Enter email" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true, message: "Enter status" }]}
            >
              <Input placeholder="Active / Inactive" />
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </div>
  );
}
