import React, { FC, useEffect, useState } from "react";
import { Button, Form, Input, Row } from "antd";

interface UpdateTodoProps {
    submit: (oldValue: string, newValue: string) => void
    cancel: () => void
    value: string
}

const UpdateTodoForm: FC<UpdateTodoProps> = (props: UpdateTodoProps) => {
    const [newValue, setNewValue] = useState('')
    useEffect(() => {
        setNewValue(props.value);
    }, [props]);

    return (
        <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Row justify='center'>
            <p style={{marginTop:'5%'}}>Редактируйте текст</p>
            <Input value={newValue} onChange={(e) => { setNewValue(e.target.value) }} style={{ width: 300, margin:20 }} />
            </Row>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Row justify='end'>
                    <Button style={{ margin: 5 }} type="primary" htmlType="submit" onClick={() => props.submit(props.value, newValue)}>
                        Редактировать todo
                    </Button>
                    <Button style={{ margin: 5 }} type="primary" htmlType="submit" onClick={() => props.cancel()}>
                        Отмена
                    </Button>
                </Row>
            </Form.Item>
        </Form>
    )
}

export default UpdateTodoForm