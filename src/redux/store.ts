import thunkMiddleware from "redux-thunk"
import {applyMiddleware, combineReducers, createStore} from "redux"
import {tradersReducer} from "./tradersReducers"

const rootReducer = combineReducers({
    traders: tradersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>