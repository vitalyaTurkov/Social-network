import { getUser } from './api/api'

export const hasUser = (email, callback) => {
    getUser(email, '', callback);
};

export const isCorrectEmail = (email) => {
    if(email.indexOf('@') === -1) {
        return false;
    }
    if(email.indexOf('.ru') === -1 && email.indexOf('.com') === -1) {
        return false;
    }
    return true;
};
