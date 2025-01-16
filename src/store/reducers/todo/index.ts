import { ActionTypes, TodoState, TodoActionsEnum } from "./types.ts";
import { ITodo } from "../../../models/ITodo";

const initialState:TodoState={
    todos: [] as ITodo[], 
    error: ''
}

export default function todoReducer(state = initialState, action:ActionTypes):TodoState{
    switch (action.type) {
        case TodoActionsEnum.SET_TODO:
            return{...state, todos: action.payload}
        case TodoActionsEnum.SET_ERROR:
            return{...state, error: action.payload}
        default:
            return state;
    }
}