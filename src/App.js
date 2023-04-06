import {useState} from "react";
import "./App.css";
import Users from "./components/Users";
import ToDoRow from "./components/ToDoRow";
import {Divider} from 'antd';
import * as toDoService from "./services/ToDoService";
import {Header} from "antd/es/layout/layout";

function App() {
    const [todos, setTodos] = useState([]);

    function showToDos(userId) {
        toDoService.fetchToDos(userId).then((data) => {
            setTodos(data);
        });
    }

    function changeStatus(id, status) {
        toDoService.updateToDoStatus(id, status);
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
