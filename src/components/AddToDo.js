import React from "react";
import {Button, Divider, Form, Input, Select} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useDispatch, useSelector} from "react-redux";
import * as toDoService from "../services/ToDoService";
import * as todoService from "../services/ToDoService";

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

export default function AddToDo() {
    const [form] = Form.useForm();
    const selectedUserId = useSelector(state => state.selectedUserId);
    const dispatch = useDispatch();

    const onFinish = (values) => {
        toDoService.addToDo(selectedUserId, values)
            .then(() => {
                return todoService.getUserToDos(selectedUserId);
            })
            .then((data) => {
                dispatch({ type: 'SET_TODOS', payload: data });
            })
        form.resetFields();
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div>
            <Divider orientation="left">Add TODO</Divider>
            <Form {...layout}
                  form={form}
                  name="control-hooks"
                  onFinish={onFinish}
                  style={{maxWidth: 600}}
            >
                <Form.Item name="name" label="Name" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>

                <Form.Item name="summary" label="Summary" rules={[{required: true}]}>
                    <TextArea/>
                </Form.Item>

                <Form.Item name="status" label="Status" rules={[{required: true}]}>
                    <Select style={{maxWidth: 120}}>
                        <Select.Option value="DONE">DONE</Select.Option>
                        <Select.Option value="TO_DO">TODO</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                    <Button htmlType="button" onClick={onReset}>Reset</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
