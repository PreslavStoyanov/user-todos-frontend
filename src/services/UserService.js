export function fetchUsers() {
    return fetch("http://localhost:8080/users").then((response) => response.json());
}