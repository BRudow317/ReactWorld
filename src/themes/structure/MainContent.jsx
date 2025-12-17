import React from "react";
import { Outlet } from "react-router-dom";
//import { DarkTheme,LightTheme, ContainerBorderTheme, createDiagonalGradient } from "../ThemeStyles";
const MainContent = function() {
    return (
        <>
            <div className="MainContent-container">
                <Outlet />
            </div>
        </>
    );
}
export default MainContent;