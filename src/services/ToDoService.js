import axios from "axios";

const SERVER_HOSTNAME = "http://localhost:8080";
const SERVICE_URI = SERVER_HOSTNAME + `/todos`;

export function addToDo(id, toDoInput) {
    return axios.post(`${SERVICE_URI}/${id}`, toDoInput);
}

export function getUserToDos(userId) {
    return axios.get(`${SERVICE_URI}?userId=${userId}`).then(response => response.data);
}

export function updateToDoStatus(id, status) {
    return axios.patch(`${SERVICE_URI}/${id}?status=${status}`);
}

export function updateToDo(id, toDoInput) {
    return axios.put(`${SERVICE_URI}/${id}`, toDoInput);
}

export function deleteToDo(id) {
    return axios.delete(`${SERVICE_URI}/${id}`);
}
