import React, { FC } from 'react';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks/hooks.ts';
import { AuthActionCreators } from './store/reducers/auth/action-creator.ts';
import { IUser } from './models/IUser.tsx';
import AppRouter from './components/AppRouter.tsx';
import { Layout } from 'antd';
import NavBar from './components/NavBar.tsx';
import './App.css';

const App: FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(AuthActionCreators.setUser({ username: localStorage.getItem('username') } as IUser))
      dispatch(AuthActionCreators.setAuth(true))
    }
  }, [])

  return (
    <Layout >
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
