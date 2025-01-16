import { ActionTypes, TodoActionsEnum, SetError, SetTodo } from "./types.ts"
// import { IUser } from "../../../models/IUser"
import { ITodo } from "../../../models/ITodo.tsx"
import { AppDispatch } from "../../store.tsx"
import UserService from "../../../api/UserService.tsx"
import axios from "axios"

export const TodoActionCreators = {
    setTodo: (todo: ITodo[]): SetTodo => ({ type: TodoActionsEnum.SET_TODO, payload: todo }),
    setError: (error: string): SetError => ({ type: TodoActionsEnum.SET_ERROR, payload: error }),
    fetchTodos: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const todos = localStorage.getItem('todos') || '[]'
            const jsonTodos = JSON.parse(todos) as ITodo[]
            const currentUserTodos = jsonTodos.filter(el => el.author === username)
            dispatch(TodoActionCreators.setTodo(currentUserTodos))
        } catch (error) {
            console.log(error)
        }
    },
    createTodo: (todo: ITodo) => async (dispatch: AppDispatch) => {
        try {
            const todos = localStorage.getItem('todos') || '[]'
            const jsonTodos = JSON.parse(todos) as ITodo[]
            jsonTodos.push(todo)
            dispatch(TodoActionCreators.setTodo(jsonTodos))
            localStorage.setItem('todos', JSON.stringify(jsonTodos))
        } catch (error) {
            console.log(error)
        }
    },
    updateTodo: (oldValue: string, newValue: string) => async (dispatch: AppDispatch) => {
        try {
            const todos = localStorage.getItem('todos') || '[]'
            const jsonTodos = JSON.parse(todos) as ITodo[]
            const changedTodos = jsonTodos.map(el => {
                if (el.text === oldValue) {
                    el.text = newValue
                }
                return el
            }) as ITodo[]
            dispatch(TodoActionCreators.setTodo(changedTodos))
            localStorage.setItem('todos', JSON.stringify(changedTodos))
        } catch (error) {
            console.log(error)
        }
    },
    deleteTodo: (value: string) => async (dispatch: AppDispatch) => {
        try {
            const todos = localStorage.getItem('todos') || '[]'
            const jsonTodos = JSON.parse(todos) as ITodo[]
            const newTodos = jsonTodos.filter(el => el.text !== value) as ITodo[]
            dispatch(TodoActionCreators.setTodo(newTodos))
            localStorage.setItem('todos', JSON.stringify(newTodos))
        } catch (error) {
            console.log(error)
        }
    }
}