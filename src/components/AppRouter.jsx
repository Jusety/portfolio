import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";

const AppRouter = () => {
    return (
        <div id="base">
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </div>
    );
};

export default AppRouter;
