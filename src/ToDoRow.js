import React from "react";
import {Collapse, Select, Space} from 'antd';

const {Panel} = Collapse;

export default function ToDoRow({todo, changeStatus}) {
    return (
        <div>
            <Collapse>
                <Panel header={todo.name} key="1">
                    <p>{todo.summary}</p>
                    <p style={{margin: 5}}>Created at: {todo.createdAt}</p>
                </Panel>
            </Collapse>
            <Space style={{ marginTop: '8px', marginBottom: '8px'}}>
                <Select
                    defaultValue={todo.status}
                    style={{
                        width: 120,
                    }}
                    onChange={(value) => changeStatus(todo.id, value)}
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
            </Space>
        </div>
    );
}
