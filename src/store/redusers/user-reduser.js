import {CHANGE_USER_ACTION} from "./constants";
import { getUser } from '../../service/api/api'
import * as ls from '../../service/local-storage'

const getInitialState = () => {
    let initialState = {
        id: '',
        isAuthorized: false
    };
    const user = ls.get('user');

    if(user) {
        initialState = user;
    }

    return initialState;
};

export const changeUser = (user, callback) => {
    return dispatch => {
        getUser(user.email, user.password, (user) => {
            dispatch({
                type: CHANGE_USER_ACTION,
                payload: {
                    id: user.id,
                    isAuthorized: user.isAuthorized
                }
            });
            callback(user);
        });
    };
};

export const userReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case CHANGE_USER_ACTION:
            return action.payload;
        default:
            return state;
    }
};
