import {Button, Divider, Form, Input} from "antd";
import * as userService from ".././services/UserService";
import React from "react";
import * as todoService from "../services/ToDoService";
import {useDispatch} from "react-redux";

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

export default function AddUser() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (values) => {
        userService.addUser(values)
            .then(() => {
                return userService.getUsers();
            })
            .then((data) => {
                dispatch({ type: 'SET_USERS', payload: data });
            });
        form.resetFields();
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div>
            <Divider orientation="left">Add User</Divider>
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
