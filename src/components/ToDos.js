import {ProList} from '@ant-design/pro-components';
import React, {useState} from 'react';
import {Divider, Select} from "antd";
import * as toDoService from "../services/ToDoService";

const {Option} = Select;

export default function ToDos({todos}) {
    const [expandedRowKeys, setExpandedRowKeys] = useState([]);

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
                        render: (_, record) => record.summary,
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
        </div>
    );
};
