import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Header, Footer, Body, LayoutStyles } from ".";
import { useTheme } from "../themes/ThemeContext";

const Layout = () => {
  // Hooks are called first.
  const { theme } = useTheme();
  console.log("Current Theme: ", theme);
  return (
    <>
      <div
        id="Layout"
        className={`
            ${LayoutStyles.LayoutContainer} 
            ${ theme === "dark" ? LayoutStyles.DarkModePallete : LayoutStyles.LightModePallete } 
      `}>
        <div className={LayoutStyles.BackgroundWrapper}>
          <div className={LayoutStyles.OuterContainer}>
          <NavBar />
          
            <div className={` 
            ${LayoutStyles.mainGlassWrapper} 
            ${ theme === "dark" ? LayoutStyles.GlassyEffectDarkMode : LayoutStyles.GlassyEffectLightMode }
            `}>
            <Header />
            <Body>
              <Outlet />
            </Body>
            <Footer />
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
