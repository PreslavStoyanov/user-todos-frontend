import axios from "axios";

const SERVER_HOSTNAME = 'http://localhost:8080';
const SERVICE_URI = SERVER_HOSTNAME + `/users`;

export function addUser(id, userInput) {
    return axios.post(`${SERVICE_URI}/${id}`, userInput);
}

export function getUsers() {
    return axios.get(SERVICE_URI).then(response => response.data);
}

export function getUserById(id) {
    return axios.get(`${SERVICE_URI}/${id}`).then(response => response.data);
}

export function updateUser(id, userInput) {
    return axios.put(`${SERVICE_URI}/${id}`, userInput);
}

export function deleteUser(id) {
    return axios.put(`${SERVICE_URI}/${id}`);
}