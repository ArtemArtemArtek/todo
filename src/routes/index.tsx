import React from "react"
import LoginPage from "../pages/Login.tsx"
import TodoPage from "../pages/Todo.tsx"

export interface IRoute {
    path: string,
    component: React.ComponentType,
}

export enum RoutesName {
    LOGIN = '/login',
    TODO = '/'
}

export const publicRoutes: IRoute[] = [
    { path: RoutesName.LOGIN, component: LoginPage }
]
export const privateRoutes: IRoute[] = [
    { path: RoutesName.TODO, component: TodoPage }
]