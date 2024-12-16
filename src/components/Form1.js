import React from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Upload,
  DatePicker,
  Checkbox,
} from "antd";
import { Option } from "antd/es/mentions";

const Form1 = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div className="form-container">
      <h2>Indent Creation Form</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ date: null }}
      >
        <div className="form-section">
          <Form.Item
            label="Indentor Name"
            name="indentorName"
            rules={[{ required: true, message: "Indentor name is required" }]}
          >
            <Input value='Auto-populated' disabled />
          </Form.Item>
          <Form.Item
            label="Contact Details"
            name="contactDetails"
            rules={[
              { required: true, message: "Contact details are required" },
            ]}
          >
            <Input placeholder="Enter contact number or email" />
          </Form.Item>

          <Form.Item
            label="Material/Job code"
            name="materialJobCode"
            rules={[
              { required: true, message: "Material/Job code is required" },
            ]}
          >
            <Input disabled placeholder="Pre-filled code" />
          </Form.Item>
        </div>

        <div className="form-section">
          <Form.Item
            name="consigneeLocation"
            label="Consignee Location"
            rules={[
              { required: true, message: "Consignee Location is required" },
            ]}
          >
            <Select placeholder="Select location">
              <Option value="location1">Location 1</Option>
              <Option value="location2">Location 2</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="budgetCode"
            label="Budget Code"
            rules={[{ required: true, message: "Budget Code is required" }]}
          >
            <Select placeholder="Select budget code">
              <Option value="budget1">Budget 1</Option>
              <Option value="budget2">Budget 2</Option>
            </Select>
          </Form.Item>

          <Form.Item name="projectName" label="Project Name">
            <Select placeholder="Select project">
              <Option value="project1">Project 1</Option>
              <Option value="project2">Project 2</Option>
            </Select>
          </Form.Item>
        </div>

        <div className="form-section">
          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: "Quantity is required" }]}
          >
            <Input type="number" placeholder="Enter Quantity" />
          </Form.Item>
          <Form.Item
            name="preBidMeetingDetails"
            label="Pre-bid Meeting Details"
          >
            <DatePicker.RangePicker showTime format="YYYY-MM-DD HH:mm" />
          </Form.Item>
          <Form.Item name="technicalDocuments" label="Technical Documents">
            <Upload>
              <Button>Upload PDF/Link</Button>
            </Upload>
          </Form.Item>
        </div>

        <div className="form-section">
          <Form.Item name="preBidMeetingRequired" valuePropName="checked">
            <Checkbox>Pre-bid Meeting Required</Checkbox>
          </Form.Item>
        </div>
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

export default Form1;