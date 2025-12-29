import { Card, Table, Button, Modal, Form, Input, Space, Typography, Badge } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";

const { Title, Text } = Typography;

export default function EmployeeManagement() {
  const [rows, setRows] = useState([
    { id: 1, name: "Pooja", email: "pooja@bank.com", status: "Active" },
    { id: 2, name: "Rita", email: "rita@bank.com", status: "Active" },
    { id: 3, name: "Simran", email: "simran@bank.com", status: "Inactive" },
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
      render: v => <Badge status={v==="Active"?"success":"error"} text={v} />
    },
    {
      title: "Action",
      render: (_, record) => (
        <Space>
          <Button onClick={() => { setEditing(record); setOpen(true); form.setFieldsValue(record); }} icon={<EditOutlined />}>
            Edit
          </Button>
          <Button
            danger={record.status==="Active"}
            onClick={() => setRows(p => p.map(r => r.id===record.id ? { ...r, status: r.status==="Active"?"Inactive":"Active" } : r))}
          >
            {record.status==="Active" ? "Disable" : "Enable"}
          </Button>
        </Space>
      )
    }
  ], [form]);

  return (
    <div>
      <Title level={3} style={{ marginTop: 0 }}>Employee Management</Title>
      <Text type="secondary">Manage employee records.</Text>

      <Card style={{ marginTop: 16 }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => { setEditing(null); form.resetFields(); setOpen(true); }}
          style={{ marginBottom: 12 }}
        >
          Add Employee
        </Button>

        <Table rowKey="id" columns={columns} dataSource={rows} pagination={{ pageSize: 6 }} />

        <Modal
          title={editing ? "Edit Employee" : "Add Employee"}
          open={open}
          onCancel={() => setOpen(false)}
          onOk={async () => { const v = await form.validateFields(); setRows(p => editing ? p.map(r => r.id===editing.id ? { ...r, ...v } : r) : [...p, { id: Math.max(...p.map(r=>r.id))+1, status:"Active", ...v }]); setOpen(false); }}
          okText="Save"
        >
          <Form layout="vertical" form={form}>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}><Input /></Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type:"email" }]}><Input /></Form.Item>
          </Form>
        </Modal>
      </Card>
    </div>
  );
}
