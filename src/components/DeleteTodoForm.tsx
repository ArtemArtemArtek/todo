import React, { FC, useState } from "react";
import { Button, Form, Input, Row } from "antd";

interface DeleteTodoProps{
    submit:()=>void
    cancel:()=>void
}

const DeleteTodoForm:FC<DeleteTodoProps>=(props:DeleteTodoProps)=>{
    return(
       <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
                name="head"
            >
               <h1>Вы действительно хотите удалить Todo?</h1>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Row justify='end'>
                    <Button style={{ margin: 5 }} type="primary" htmlType="submit" onClick={()=>props.submit()}>
                        Удалить todo
                    </Button>
                    <Button style={{ margin: 5 }} type="primary" htmlType="submit" onClick={()=>props.cancel()}>
                        Отмена
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    )
}

export default DeleteTodoForm