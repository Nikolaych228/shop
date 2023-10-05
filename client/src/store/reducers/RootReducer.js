import {combineReducers} from 'redux'
import {loginReducer} from './AuthReducer'

export const rootReduser = combineReducers({
    login: loginReducer,
    
})