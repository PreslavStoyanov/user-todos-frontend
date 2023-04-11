import React, {useEffect} from "react";
import {Button, Divider, Space, Table} from "antd";
import {useDispatch, useSelector} from 'react-redux';
import * as userService from ".././services/UserService";
import * as todoService from ".././services/ToDoService";
import {Link, Outlet} from "react-router-dom";

const {Column} = Table;

export default function Users() {
    const users = useSelector(state => state.users);
    const selectedUserId = useSelector(state => state.selectedUserId);
    const dispatch = useDispatch();

    useEffect(() => {
        userService.getUsers().then((data) => {
            dispatch({type: 'SET_USERS', payload: data});
        });
    }, [dispatch]);

    const handleUserSelect = (_, selectedRow) => {
        dispatch({type: 'SELECT_USER_ID', payload: selectedRow[0].id});
        todoService.getUserToDos(selectedRow[0].id).then((data) => {
            dispatch({type: 'SET_TODOS', payload: data});
        })
    };

    return (
        <div>
            <Divider orientation="left">Users</Divider>
            <Table dataSource={users} rowKey="id" pagination={false}
                   rowSelection={{
                       type: 'radio',
                       onChange: handleUserSelect,
                   }}>
                <Column title="Id" dataIndex="id" key="id"/>
                <Column title="Name" dataIndex="name" key="name"/>
            </Table>

            <Space style={{marginTop: '16px', marginLeft: '16px'}}>
                <Link to="/add-user">
                    <Button type={"primary"}>Add User</Button>
                </Link>
                <Link to="/todos">
                    <Button type="default" disabled={!selectedUserId}>Show TODOs</Button>
                </Link>
                <Link to="/add-todo">
                    <Button type="default" disabled={!selectedUserId}>Add TODO</Button>
                </Link>
                <Link to="/update-user">
                    <Button type="default" disabled={!selectedUserId}>Update User</Button>
                </Link>
                <Button danger type="default" disabled={!selectedUserId}>Delete User</Button>
            </Space>

            <Outlet/>
        </div>
    );
}
