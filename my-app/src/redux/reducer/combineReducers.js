import { usersReducer } from './users'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    users:usersReducer
})
