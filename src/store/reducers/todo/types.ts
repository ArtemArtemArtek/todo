import { ITodo } from "../../../models/ITodo";

export interface TodoState {
    todos: ITodo[],
    error: string
}

export enum TodoActionsEnum {
    SET_TODO = 'SET_TODO',
    SET_ERROR = 'SET_ERROR'
}

export type SetTodo = {
    type: TodoActionsEnum.SET_TODO
    payload: ITodo[]
}

export type SetError = {
    type: TodoActionsEnum.SET_ERROR
    payload: string
}

export type ActionTypes = SetError | SetTodo