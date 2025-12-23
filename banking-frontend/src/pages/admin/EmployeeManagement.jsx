import { Card, Table, Button, Modal, Form, Input, Space, Typography } from "antd";
import { useMemo, useState } from "react";

const { Title, Text } = Typography;

export default function EmployeeEmployeeManagement() {
  const [rows, setRows] = useState([
    { id: 1, name: "Sam", email: "sam@bank.com", status: "Active" },
    { id: 2, name: "Rita", email: "rita@bank.com", status: "Active" },
    { id: 3, name: "John", email: "john@bank.com", status: "Inactive" },
  ]);

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form] = Form.useForm();

  const columns = useMemo(
    () => [
      { title: "ID", dataIndex: "id" },
      { title: "Name", dataIndex: "name" },
      { title: "Email", dataIndex: "email" },
      { title: "Status", dataIndex: "status" },
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
            <Button danger onClick={() => setRows((prev) => prev.filter((r) => r.id !== record.id))}>
              Delete
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
      setRows((prev) => prev.map((r) => (r.id === editing.id ? { ...r, ...values } : r)));
    } else {
      const nextId = Math.max(...rows.map((r) => r.id)) + 1;
      setRows((prev) => [...prev, { id: nextId, status: "Active", ...values }]);
    }
    setOpen(false);
  };

  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Employee Management</Title>
      <Text type="secondary">Manage employee records (mock local state).</Text>

      <Card style={{ marginTop: 16 }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
          <Button type="primary" onClick={onAdd}>Add Employee</Button>
        </div>

        <Table rowKey="id" columns={columns} dataSource={rows} pagination={{ pageSize: 6 }} />

        <Modal
          title={editing ? "Edit Employee" : "Add Employee"}
          open={open}
          onCancel={() => setOpen(false)}
          onOk={onSave}
          okText="Save"
        >
          <Form layout="vertical" form={form}>
            <Form.Item name="name" label="Name" rules={[{ required: true, message: "Enter name" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: "Enter email" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="status" label="Status" rules={[{ required: true, message: "Enter status" }]}>
              <Input placeholder="Active / Inactive" />
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </div>
  );
}
