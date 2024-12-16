import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import { Option } from "antd/es/mentions";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";

const Form4 = () => {
  const onFinish = (values) => {
    console.log("Form Data:", values);
  };
  return (
    <div className="form-container">
      <h2>Tender Request Form</h2>
      <Form onFinish={onFinish} layout="vertical">
        <div className="form-section">
          <Form.Item
            name="title"
            label="Title of the Tender"
            rules={[
              { required: true, message: "Please enter the tender title" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="openingDate"
            label="Opening Date"
            rules={[
              { required: true, message: "Please select the opening date" },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="closingDate"
            label="Closing Date"
            rules={[
              { required: true, message: "Please select the closing date" },
            ]}
          >
            <DatePicker />
          </Form.Item>
        </div>
        <div className="form-section">
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
          <Form.Item
            name="bidType"
            label="Bid Type"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="Single Bid">Single Bid</Option>
              <Option value="Two Bid">Two Bid</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="materialCategory"
            label="Material Category"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="form-section">
          <Form.Item
            name="indentId"
            label="Indent ID"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="tenderTerms"
            label="Tender Terms"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={1} />
          </Form.Item>
          <Form.Item name="selectedVendors" label="Selected Vendors">
            <Select mode="tags" placeholder="Add vendors">
              {/* Dynamic vendor options can be added here */}
            </Select>
          </Form.Item>
        </div>
        <div className="form-section">
        </div>
        <Form.Item
          name="documentsUpload"
          label="Documents Upload"
          rules={[{ required: true }]}
        >
          <Upload>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button type="default" htmlType="reset">
              Reset
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="dashed" htmlType="button">
              Save Draft
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form4;
