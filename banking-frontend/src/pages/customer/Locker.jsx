import { Card, Typography, Descriptions, Button, Alert, Row, Col, Tag, Space } from "antd";
import { LockOutlined, SafetyOutlined, PhoneOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;

export default function Locker() {
  const [status,setStatus]=useState("NONE"),[msg,setMsg]=useState("");
  const request=()=>{setStatus("PENDING");setMsg("Locker request submitted. Awaiting approval.");};
  const tag={NONE:<Tag>Not Assigned</Tag>,PENDING:<Tag color="gold">Pending</Tag>,ACTIVE:<Tag color="green">Active</Tag>};

  return (
    <>
      <Card style={{marginBottom:23}}>
        <Space>
          <SafetyOutlined style={{fontSize:24,color:"#1677ff"}}/>
          <div>
            <Title level={3} style={{margin:0}}>Locker Service</Title>
            <Text type="secondary">Secure storage for customer valuables</Text>
          </div>
        </Space>
      </Card>

      {msg && <Alert type="success" showIcon message={msg} style={{marginBottom:20}}/>}

      <Row gutter={24}>
        <Col lg={16}>
          <Card title={<Space><LockOutlined/>Locker Details</Space>}>
            <Descriptions bordered column={1}>
              <Descriptions.Item label="Status">{tag[status]}</Descriptions.Item>
              <Descriptions.Item label="Branch">Downtown Branch (Mock)</Descriptions.Item>
              <Descriptions.Item label="Locker ID">{status==="NONE"?"-":"LKR-1042"}</Descriptions.Item>
              <Descriptions.Item label="Access Policy">Valid ID & branch verification required</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>

        <Col lg={8}>
          <Card title="Actions">
            <Space direction="vertical" style={{width:"100%"}}>
              <Button type="primary" block disabled={status!=="NONE"} onClick={request}>Request Locker</Button>
              <Button block icon={<PhoneOutlined/>} disabled={status==="NONE"}>Contact Support</Button>
              <Text type="secondary" style={{fontSize:12}}>Allocation depends on the availability</Text>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
}
