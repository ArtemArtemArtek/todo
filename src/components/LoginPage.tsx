import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
// import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { AuthActionCreators } from "../store/reducers/auth/action-creator.ts";
import { useDispatch } from "react-redux";
// import { useAppSelector } from "../hooks/hooks.ts";
// import { useAppDispatch } from "../hooks/hooks.tsx";
// import { useApp } from "../hooks/useTypedSelector";
import { useAppSelector, useAppDispatch } from "../hooks/hooks.ts";

const LoginPage: FC = () => {

  const [login, setLogin]=useState('')
  const [password, setPassword]=useState('')

  
  const {error, isLoading} = useAppSelector((state)=>state.auth) 
  
  const dispatch = useAppDispatch()
  const submit=()=>{
    dispatch(AuthActionCreators.login(login, password))
  }

  return (
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={submit}
        
      >

          <h1 style={{marginLeft:60, width:200}}>Форма входа</h1>
          {error?
          <p style={{color:'red'}}>{error}</p>:
          null
        }
          
          
        <Form.Item
          label="Логин"
          name="login"
          // style={{marginRight:100}}
          rules={[{ required: true, message: 'Пожалуйста введите логин!' }]}
          
          >
          <Input  onChange={e=>setLogin(e.target.value)}/>
        </Form.Item>
    
        <Form.Item
          label="Пароль"
          name="password"
          // style={{marginRight:100}}
          rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
        >
          <Input.Password onChange={e=>setPassword(e.target.value)}/> 
        </Form.Item>
    
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button style={{marginLeft:110}} type="primary" htmlType="submit" loading={isLoading}>
            Войти
          </Button>
        </Form.Item>
      </Form>
    )
}

export default LoginPage;