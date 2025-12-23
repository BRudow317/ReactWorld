import React from "react";
//import { Outlet } from "react-router-dom";
//import { DarkTheme,LightTheme, ContainerBorderTheme, createDiagonalGradient } from "../ThemeStyles";
const Body = function({ children }) {
    return (
        <>
            <div className="Body-container">
                {children}
            </div>
        </>
    );
}
export default Body;