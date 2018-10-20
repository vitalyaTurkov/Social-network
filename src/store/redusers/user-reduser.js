import {CHANGE_USER_ACTION} from "./constants";
import { getUser } from '../../service/api/api'

const initialState = {
    id: '',
    name: '',
    surname: '',
    email: '',
    isAuthorized: false
};

export const changeUser = (user) => {
    return dispatch => {
        getUser(user.email, user.password, (user) => {
            dispatch({
                type: CHANGE_USER_ACTION,
                payload: {
                    id: user.id,
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    isAuthorized: user.isAuthorized
                }
            })
        });
    };
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USER_ACTION:
            return action.payload;
        default:
            return state;
    }
};
