import React from "react";
//import { DarkTheme,LightTheme, ContainerBorderTheme, createDiagonalGradient } from "../ThemeStyles";
import { Outlet } from "react-router-dom";

export function PageContainer() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default PageContainer;
