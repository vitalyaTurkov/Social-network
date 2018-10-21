import {addUser, getUser} from './api/api'
import {EMPTY_FIELDS, INCORRECT_EMAIL, OK, USED_EMAIL} from "./constants";

export const hasUser = (email, callback) => {
    getUser(email, '', callback);
};

export const isCorrectEmail = (email) => {
    if(email.indexOf('@') === -1) {
        return false;
    }
    return !(email.indexOf('.ru') === -1 && email.indexOf('.com') === -1);
};

export const registration = (name, surname, email, password, callback) => {
    if(name === '' || surname === '' ||
        password === '' || email === '')
    {
        callback(EMPTY_FIELDS);
        return;
    }

    if(!isCorrectEmail(email)) {
        callback(INCORRECT_EMAIL);
        return;
    }

    hasUser(email, (user) => {
        console.log(user.email);
        if(user.email === '') {
            const user = {name, surname, email, password};
            addUser(user);
            callback(OK);
        }
        else {
            callback(USED_EMAIL);
        }
    });
};
