import React, { FC, useState } from "react";
import { ITodo } from "../models/ITodo";
import { Card, Button, Modal } from 'antd';
import DeleteTodoForm from "./DeleteTodoForm.tsx";
import UpdateTodoForm from "./UpdateTodoForm.tsx";
import { useAppDispatch, useAppSelector } from "../hooks/hooks.ts";
import { TodoActionCreators } from "../store/reducers/todo/action-creators.ts";

interface BodyProps {
    element: ITodo
}

const TodoBody: FC<BodyProps> = (props: BodyProps) => {

    const [openDelete, setIsOpenDelete] = useState(false)
    const [openUpdate, setIsOpenUpdate] = useState(false)
    const dispatch = useAppDispatch()
    const username = useAppSelector(state=>state.auth.user.username)

    const submitDelete = () => {
        setIsOpenDelete(false)
        dispatch(TodoActionCreators.deleteTodo(props.element.text, username))
    }

    const submitUpdate = (oldValue: string, newValue: string) => {
        setIsOpenUpdate(false)
        dispatch(TodoActionCreators.updateTodo(oldValue, newValue, username))
    }

    const cancelDelete = () => {
        setIsOpenDelete(false)
    }

    const cancelUpdate = () => {
        setIsOpenUpdate(false)
    }
    return (
        <Card style={{margin:20}}>
            <div>{props.element.text}</div>
            <Button onClick={()=>setIsOpenUpdate(!openUpdate)}>Редактировать</Button>
            <Button onClick={() => setIsOpenDelete(!openDelete)}>Удалить</Button>
            <Modal open={openDelete} title='Удалить Todo' onCancel={() => setIsOpenDelete(!openDelete)} footer={null}>
                <DeleteTodoForm submit={submitDelete} cancel={cancelDelete} />
            </Modal>
            <Modal open={openUpdate} title='Редактировать Todo' onCancel={() => setIsOpenUpdate(!openUpdate)} footer={null}>
                <UpdateTodoForm submit={submitUpdate} cancel={cancelUpdate} value={props.element.text}/>
            </Modal>
        </Card>
    )
}

export default TodoBody