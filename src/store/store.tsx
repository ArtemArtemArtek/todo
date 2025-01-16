import {applyMiddleware, combineReducers, createStore} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
// import reducers from './reducers';
import authReducer from "./reducers/auth/index.ts";

// const rootReducer = combineReducers(reducers)

const rootReducer = combineReducers({
    auth: authReducer
})


export const store = configureStore({
    reducer: rootReducer
})

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
