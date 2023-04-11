import {ProList} from '@ant-design/pro-components';
import React, {useState} from 'react';
import {Button, Divider, Popconfirm, Select} from "antd";
import * as toDoService from "../services/ToDoService";
import {useDispatch, useSelector} from "react-redux";
import * as todoService from "../services/ToDoService";
import {Link, Outlet} from "react-router-dom";

const {Option} = Select;

export default function ToDos() {
    const [expandedRowKeys, setExpandedRowKeys] = useState([]);
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    function confirm(record) {
        todoService.deleteToDo(record.id)
            .then(() => {
                return todoService.getUserToDos(record.userId);
            })
            .then((data) => {
                dispatch({type: 'SET_TODOS', payload: data});
            })
    }

    return (
        <div>
            <Divider orientation="left">ToDos</Divider>
            <ProList
                rowKey="id"
                expandable={{expandedRowKeys, onExpandedRowsChange: setExpandedRowKeys}}
                dataSource={todos}
                metas={{
                    title: {
                        render: (_, record) => record.name,
                    },
                    subTitle: {
                        render: (_, record) => record.createdAt,
                    },
                    description: {
                        render: (_, record) =>
                            <div>
                                {record.summary}
                                <Link to={'/todos/edit'}>
                                    <Button type="link">Edit</Button>
                                </Link>
                                <Popconfirm
                                    title="Delete the TODO"
                                    description="Are you sure to delete this TODO?"
                                    onConfirm={() => confirm(record)}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button type="link">Delete</Button>
                                </Popconfirm>
                            </div>
                    },
                    actions: {
                        render: (_, record) => {
                            return <Select
                                defaultValue={record.status}
                                style={{width: 120}}
                                onChange={(value) => toDoService.updateToDoStatus(record.id, value)}
                            >
                                <Option value="DONE">DONE</Option>
                                <Option value="TO_DO">TODO</Option>
                            </Select>
                        },
                    },
                }}
            />
            <Outlet/>
        </div>
    );
};
