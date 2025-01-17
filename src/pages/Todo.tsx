import React, { FC, useEffect, useState } from "react";
import TodoPage from "../components/TodoPage.tsx";
import { useAppSelector, useAppDispatch } from "../hooks/hooks.ts";
import { Layout, Row, Modal, Button } from "antd";
import TodoForm from "../components/TodoForm.tsx";
import { ITodo } from "../models/ITodo.tsx";
import { TodoActionCreators } from "../store/reducers/todo/action-creators.ts";

const Todo: FC = () => {

    const [open, setIsOpen] = useState(false)
    const todos = useAppSelector(state => state.todo.todos)
    const dispatch = useAppDispatch()
    const name = useAppSelector(state=>state.auth.user.username)

    useEffect(()=>{
        dispatch(TodoActionCreators.fetchTodos(name))
    },[])

    const submit=(todo: ITodo)=>{
        setIsOpen(false)
        dispatch(TodoActionCreators.createTodo(todo, name))
    }

    return (
    <div style={{height:'100vh'}}>
    <Layout >
        <Row justify='center'>
            <h1>My Todos</h1>
        </Row>
        <Row justify='end' >
            <Button onClick={()=>setIsOpen(!open)}>Добавить Todo</Button>
        </Row>
        <Row justify='center'>
            <TodoPage todosProps={todos} />
        </Row>
        <Modal title='Добавление TODO' open={open} onCancel={()=>setIsOpen(!open)} footer={null}>
            <TodoForm submit={submit}/>
        </Modal>
    </Layout>
    </div>)
}

export default Todo