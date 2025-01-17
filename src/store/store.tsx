import {combineReducers} from "redux";
import {configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/index.ts";
import todoReducer from "./reducers/todo/index.ts";

const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer
})


export const store = configureStore({
    reducer: rootReducer
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
