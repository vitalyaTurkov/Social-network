import { combineReducers } from 'redux'
import { userReducer } from './user-reduser'
import { registrationReducer } from './registration-reducer'
import { authorizationReducer } from './authorization-reducer'

export default combineReducers({
    userReducer,
    registrationReducer,
    authorizationReducer
});
