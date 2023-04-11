import React from "react";
import "./App.css";
import Users from "./components/Users";
import ToDos from "./components/ToDos";
import {Header} from "antd/es/layout/layout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import AddUser from "./components/AddUser";
import AddToDo from "./components/AddToDo";
import UpdateUser from "./components/UpdateUser";
import {Provider} from "react-redux";
import store from './store/store';
import EditToDo from "./components/EditToDo";

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Users/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: "/todos",
                    element: <ToDos/>,
                    children: [
                        {
                            path: "/todos/edit",
                            element: <EditToDo/>
                        }
                    ]
                },
                {
                    path: "/add-user",
                    element: <AddUser/>,
                },
                {
                    path: "/add-todo",
                    element: <AddToDo/>,
                },
                {
                    path: "/update-user",
                    element: <UpdateUser/>,
                },
            ],
        },
    ]);

    return (
        <div className="App">
            <Provider store={store}>
                <Header className="App-header">User TODO lists</Header>
                <RouterProvider router={router}/>
            </Provider>
        </div>
    );
}
