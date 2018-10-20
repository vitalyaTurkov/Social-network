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
