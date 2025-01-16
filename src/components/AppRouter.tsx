import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/index.tsx";
import { useAppSelector } from "../hooks/hooks.ts";
// import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter = () => {
    //const {isAuth} = useTypedSelector(state=>state)
   const {isAuth}= useAppSelector(state=>state.auth)
//    const {isAuth} = useTypedSelector(state=>state.auth)
// const isAuth = false
    // const auth = false
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path}
                        Component={route.component}
                        key={route.path}
                    />
                )}
                <Route path="*"
                    element={<Navigate to='/' replace />} />

            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                        Component={route.component}
                        key={route.path}

                    />
                )}
                <Route path="*"
                    element={<Navigate to='/login' replace />} />
            </Routes>
    )
}

export default AppRouter;