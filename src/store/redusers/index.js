import { combineReducers } from 'redux'
import { userReducer } from './user-reduser'
import { mainReducer } from './main-reducer'

export default combineReducers({
    userReducer,
    mainReducer
});
