import axios from 'axios'
import { URL } from '../../etc/url'

export function addUser(name, surname, email, password) {
    axios.post(`${URL}/new-user`, {name, surname, email, password})
        .then(response => console.log(response))
        .catch(function (error) {
            console.log(error);
        });
}

export function getUser(email, password, callback) {
    const url = `${URL}/user?email=${email}&password=${password}`;
    return axios.get(url)
        .then(res => callback(res.data))
        .catch(err => console.log(err));
}

export function getUsers() {
    return new Promise(resolve => {
        axios.get(`${URL}/users`)
            .then(res => resolve(res.data))
            .catch(err => console.log(err));
    })
}

export function getUserById(id) {
    return axios(`${URL}/user?id=${id}`);
}
