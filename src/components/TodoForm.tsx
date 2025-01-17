import React, { FC, useEffect, useState } from "react";
import { Button, Form, Input, Row } from "antd";
import { ITodo } from "../models/ITodo";
import { useAppSelector } from "../hooks/hooks.ts";

interface TodoProps {
    submit: (todo: ITodo) => void
}

const TodoForm: FC<TodoProps> = (props) => {

    const [todo, setToDo] = useState({
        author: '',
        text: ''
    })

    useEffect(() => {
        setToDo({
            author: '',
            text: ''
        });
    }, [props]);

    const author = useAppSelector(state => state.auth.user.username)

    return (
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >


            <Row justify='center'>
                <p style={{marginTop:'5%'}}>Введите текст</p>
                <Input value={todo.text} onChange={(e) => { setToDo({ ...todo, text: e.target.value }) }} style={{ width: 300, margin: 20 }} />
            </Row>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Row justify='end'>
                    <Button style={{ marginLeft: 110 }} type="primary" htmlType="submit" onClick={() => todo.text ? props.submit({ ...todo, author: author }) : null}>
                        Добавить todo
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    )
}

export default TodoForm