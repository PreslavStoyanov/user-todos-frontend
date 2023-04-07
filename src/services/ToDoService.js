import axios from "axios";

export function fetchToDos(userId) {
    return fetch(`http://localhost:8080/todos?userId=${userId}`).then((response) => response.json());
}

export function updateToDoStatus(id, status) {
    return axios.put(`http://localhost:8080/todos/${id}?status=${status}`);
}