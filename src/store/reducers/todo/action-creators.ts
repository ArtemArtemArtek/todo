import { TodoActionsEnum, SetError, SetTodo } from "./types.ts"
import { ITodo } from "../../../models/ITodo.tsx"
import { AppDispatch } from "../../store.tsx"

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
    createTodo: (todo: ITodo, username: string) => async (dispatch: AppDispatch) => {
        try {
            const todos = localStorage.getItem('todos') || '[]'
            const jsonTodos = JSON.parse(todos) as ITodo[]
            jsonTodos.push(todo)
            const currentUserTodos = jsonTodos.filter(el => el.author === username)
            dispatch(TodoActionCreators.setTodo(currentUserTodos))
            localStorage.setItem('todos', JSON.stringify(jsonTodos))
        } catch (error) {
            console.log(error)
        }
    },
    updateTodo: (oldValue: string, newValue: string, username: string) => async (dispatch: AppDispatch) => {
        try {
            const todos = localStorage.getItem('todos') || '[]'
            const jsonTodos = JSON.parse(todos) as ITodo[]
            const changedTodos = jsonTodos.map(el => {
                if (el.text === oldValue) {
                    el.text = newValue
                }
                return el
            }) as ITodo[]
            const currentUserTodos = changedTodos.filter(el => el.author === username)
            dispatch(TodoActionCreators.setTodo(currentUserTodos))
            localStorage.setItem('todos', JSON.stringify(changedTodos))
        } catch (error) {
            console.log(error)
        }
    },
    deleteTodo: (value: string, username: string) => async (dispatch: AppDispatch) => {
        try {
            const todos = localStorage.getItem('todos') || '[]'
            const jsonTodos = JSON.parse(todos) as ITodo[]
            const newTodos = jsonTodos.filter(el => el.text !== value) as ITodo[]
            const currentUserTodos = newTodos.filter(el => el.author === username)
            dispatch(TodoActionCreators.setTodo(currentUserTodos))
            localStorage.setItem('todos', JSON.stringify(newTodos))
        } catch (error) {
            console.log(error)
        }
    }
}