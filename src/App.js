import React, {useState} from "react";
import "./App.css";
import Users from "./components/Users";
import ToDos from "./components/ToDos";
import * as toDoService from "./services/ToDoService";
import {Header} from "antd/es/layout/layout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import AddUser from "./components/AddUser";
import AddToDo from "./components/AddToDo";
import UpdateUser from "./components/UpdateUser";

export default function App() {
    const [todos, setTodos] = useState([]);

    function showToDos(userId) {
        toDoService.getUserToDos(userId).then((data) => {
            setTodos(data);
        });
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Users showToDos={showToDos}/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: "todos",
                    element: <ToDos todos={todos}/>,
                },
                {
                    path: "add-user",
                    element: <AddUser/>,
                },
                {
                    path: "add-todo",
                    element: <AddToDo/>,
                },
                {
                    path: "update-user",
                    element: <UpdateUser/>,
                },
            ],
        },
    ]);

    return (
        <div className="App">
            <Header className="App-header">User TODO lists</Header>
            <RouterProvider router={router}/>
        </div>
    );
}
