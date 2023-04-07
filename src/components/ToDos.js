import {ProList} from '@ant-design/pro-components';
import React, {useState} from 'react';
import {Divider, Select} from "antd";

export default function ToDos({todos, changeStatus}) {
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
                                style={{
                                    width: 120,
                                }}
                                onChange={(value) => changeStatus(record.id, value)}
                                options={[
                                    {
                                        value: 'DONE',
                                        label: 'DONE',
                                    },
                                    {
                                        value: 'TO_DO',
                                        label: 'TODO',
                                    },
                                ]}
                            />
                        },
                    },
                }}
            />
        </div>

    );
};
