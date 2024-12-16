import { Button, Form, Input, Select, Table, Upload } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Option } from "antd/es/mentions";
const Form5 = () => {
  const onFinish = (values) => {
    console.log("Evaluation Data:", values);
  };
  return (
    <div className="form-container">
      <h2>Tender Evaluation Input Form</h2>
      <Form onFinish={onFinish} layout="vertical">
        <div className="form-section">
          <Form.Item
            name="tenderId"
            label="Tender ID"
            rules={[{ required: true, message: "Please enter the tender ID" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="modeOfProcurement"
            label="Mode of Procurement"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="GeM">GeM</Option>
              <Option value="CPPP">CPPP</Option>
              <Option value="Proprietary">Proprietary</Option>
              <Option value="Limited Tender">Limited Tender</Option>
            </Select>
          </Form.Item>
        </div>
        <Form.Item
          name="vendorDetails"
          label="Vendor Details"
          rules={[{ required: true }]}
        >
          <Table
            dataSource={[]}
            columns={[
              {
                title: "Vendor Name",
                dataIndex: "vendorName",
                key: "vendorName",
              },
              { title: "Contact", dataIndex: "contact", key: "contact" },
            ]}
            rowKey="vendorName"
          />
        </Form.Item>
        <Form.Item
          name="quotedPrices"
          label="Quoted Prices"
          rules={[{ required: true }]}
        >
          <Table
            dataSource={[]}
            columns={[
              {
                title: "Vendor Name",
                dataIndex: "vendorName",
                key: "vendorName",
              },
              { title: "Price", dataIndex: "price", key: "price" },
            ]}
            rowKey="vendorName"
          />
        </Form.Item>
        <Form.Item
          name="technicalCompliance"
          label="Technical Compliance"
          rules={[{ required: true }]}
        >
          <Upload>
            <Button icon={<UploadOutlined />}>Upload Technical Sheets</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="remarks" label="Remarks">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Form5;
