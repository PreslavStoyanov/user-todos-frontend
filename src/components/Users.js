import React, {useEffect, useState} from "react";
import {Button, Divider, Space, Table} from "antd";
import * as userService from ".././services/UserService";

const {Column} = Table;

export default function Users({showToDos}) {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        console.log("Fetching users");
        userService.getUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    const handleShowTODOsClick = () => {
        showToDos(users.find((user) => user.id === selectedUser).id);
    };

    return (
        <div>
            <Divider orientation="left">Users</Divider>
            <Table
                dataSource={users}
                rowKey="id"
                pagination={false}
                rowSelection={{
                    type: 'radio',
                    onChange: (_, selectedRow) => setSelectedUser(selectedRow[0].id)
                }}
            >
                <Column title="Id" dataIndex="id" key="id"/>
                <Column title="Name" dataIndex="name" key="name"/>
            </Table>
            <Space style={{ marginTop: '16px', marginLeft: '16px' }}>
                <Button type={"primary"}>Add User</Button>
                <Button type="default" disabled={!selectedUser} onClick={handleShowTODOsClick}>Show TODOs</Button>
                <Button type="default" disabled={!selectedUser}>Add TODO</Button>
                <Button type="default" disabled={!selectedUser}>Update User</Button>
                <Button danger type="default" disabled={!selectedUser}>Delete User</Button>
            </Space>
        </div>
    );
}
