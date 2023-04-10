import React, {useEffect, useState} from "react";
import {Button, Divider, Space, Table} from "antd";
import * as userService from ".././services/UserService";
import {Link, Outlet} from "react-router-dom";

const {Column} = Table;

export default function Users({showToDos}) {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
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
            <Table dataSource={users} rowKey="id" pagination={false}
                   rowSelection={{
                       type: 'radio',
                       onChange: (_, selectedRow) => setSelectedUser(selectedRow[0].id)
                   }}>
                <Column title="Id" dataIndex="id" key="id"/>
                <Column title="Name" dataIndex="name" key="name"/>
            </Table>

            <Space style={{marginTop: '16px', marginLeft: '16px'}}>
                <Link to="/add-user">
                    <Button type={"primary"}>Add User</Button>
                </Link>
                <Link to="/todos">
                    <Button type="default" disabled={!selectedUser} onClick={handleShowTODOsClick}>Show TODOs</Button>
                </Link>
                <Link to="/add-todo">
                    <Button type="default" disabled={!selectedUser}>Add TODO</Button>
                </Link>
                <Link to="/update-user">
                    <Button type="default" disabled={!selectedUser}>Update User</Button>
                </Link>
                <Button danger type="default" disabled={!selectedUser}>Delete User</Button>
            </Space>

            <Outlet/>
        </div>
    );
}
