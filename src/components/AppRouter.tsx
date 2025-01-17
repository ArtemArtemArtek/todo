import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/index.tsx";
import { useAppSelector } from "../hooks/hooks.ts";

const AppRouter = () => {
   const {isAuth}= useAppSelector(state=>state.auth)
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