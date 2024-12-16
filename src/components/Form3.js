import { Button, Checkbox, Form, Input } from "antd";
import React from "react";

const Form3 = () => {
  const [form] = Form.useForm();
  return (
    <div className="form-container">
      <h2>Indent Modification Form</h2>
      <Form form={form} layout="vertical">
        <div className="form-section">
          <Form.Item
            label="Indent ID"
            name="indentId"
            rules={[{ required: true, message: "Indent ID is required" }]}
          >
            <Input placeholder="Enter Indent ID" />
          </Form.Item>
          <Form.Item
            label="Changes Made"
            name="changesMade"
            rules={[{ required: true, message: "Changes Made is required" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter Changes Made" />
          </Form.Item>
        </div>
        <div className="form-section">
          <Form.Item label="Resubmission Comments" name="resubmissionComments">
            <Input.TextArea
              rows={4}
              placeholder="Enter Resubmission Comments"
            />
          </Form.Item>
          <Form.Item
            name="approversNotified"
            label="Approvers Notified"
            valuePropName="checked"
            rules={[
              { required: true, message: "Approvers should be notified" },
            ]}
          >
            <Checkbox>Approvers Notified?</Checkbox>
          </Form.Item>
        </div>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form3;
