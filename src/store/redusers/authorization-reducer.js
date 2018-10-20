import {CHANGE_STATUS_ACTION} from "./constants";

const initialState = {
    status: ''
};

export const changeAuthorizationStatus = (code) => {
    return {
        type: CHANGE_STATUS_ACTION,
        code
    };
};

export const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATUS_ACTION:
            return {status: action.code};
        default:
            return state;
    }
};
