import {useState} from "react";
import "./App.css";
import Users from "./components/Users";
import ToDos from "./components/ToDos";
import {Divider} from 'antd';
import * as toDoService from "./services/ToDoService";
import {Header} from "antd/es/layout/layout";

function App() {
    const [todos, setTodos] = useState([]);

    function showToDos(userId) {
        toDoService.getUserToDos(userId).then((data) => {
            setTodos(data);
        });
    }

    function changeStatus(id, status) {
        toDoService.updateToDoStatus(id, status);
    }

    return (
        <div className="App">
            <Header className="App-header">User TODO lists</Header>
            <Users showToDos={showToDos}/>

            <ToDos todos={todos} changeStatus={changeStatus}/>
        </div>
    );
}

export default App;
