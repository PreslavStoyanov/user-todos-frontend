import axios from "axios";

export function fetchUsers() {
    return fetch("http://localhost:8080/users").then((response) => response.json());
}

export function fetchToDos(userId) {
    return fetch(`http://127.0.0.1:8080/todos?userId=${userId}`).then((response) => response.json());
}

export function updateToDoStatus(id, status) {
    return axios.put(`http://127.0.0.1:8080/todos/${id}?status=${status}`);
}