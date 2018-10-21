import {OPEN_MENU_ACTION} from "./constants";

const initialState = {
    menuIsOpened: false
};

export const openMenuAction = (menuIsOpened) => {
    return {
        type: OPEN_MENU_ACTION,
        menuIsOpened
    }
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MENU_ACTION:
            return {...state, menuIsOpened: action.menuIsOpened};
        default:
            return state;
    }
};
