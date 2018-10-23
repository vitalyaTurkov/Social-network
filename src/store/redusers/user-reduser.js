import {CHANGE_USER_ACTION} from "./constants";
import { getUser } from '../../service/api/api'

const getInitialState = () => {
    const defaultInitialState = {
        id: '',
        isAuthorized: false
    };

    let initialState;

    try {
        initialState = JSON.parse(localStorage.getItem('user'));
        if(initialState) {
            return initialState;
        }
    } catch (e) {
        console.log(e);
    }

    return defaultInitialState;
};

export const changeUser = (user) => {
    return dispatch => {
        getUser(user.email, user.password, (user) => {
            dispatch({
                type: CHANGE_USER_ACTION,
                payload: {
                    id: user.id,
                    isAuthorized: user.isAuthorized
                }
            })
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
