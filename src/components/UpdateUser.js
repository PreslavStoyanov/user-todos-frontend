import {Button, Divider, Form, Input} from "antd";
import React from "react";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

export default function UpdateUser() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div>
            <Divider orientation="left">Update User</Divider>
            <Form {...layout}
                  form={form}
                  name="control-hooks"
                  onFinish={onFinish}
                  style={{maxWidth: 600}}
            >
                <Form.Item name="name" label="Name" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                    <Button htmlType="button" onClick={onReset}>Reset</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
