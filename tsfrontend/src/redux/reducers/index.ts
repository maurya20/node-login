import userReducer from './userReduser'
import formReducer from './formReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    userLogged: userReducer,
    formData: formReducer,
})

export default allReducers