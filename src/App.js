import {useState} from "react";
import "./App.css";
import Users from "./Users";
import ToDoRow from "./ToDoRow";
import {Divider} from 'antd';
import * as services from "./services";
import {Header} from "antd/es/layout/layout";

function App() {
    const [todos, setTodos] = useState([]);

    function showToDos(userId) {
        services.fetchToDos(userId).then((data) => {
            setTodos(data);
        });
    }

    function changeStatus(id, status) {
        services.updateToDoStatus(id, status);
    }

    return (
        <div className="App">
            <Header className="App-header">User TODO lists</Header>

            <Divider orientation="left">Users</Divider>
            <Users showToDos={showToDos}/>

            <Divider orientation="left">ToDos</Divider>
            {todos.map((todo) => <ToDoRow todo={todo} changeStatus={changeStatus}/>)}
        </div>
    );
}

export default App;
