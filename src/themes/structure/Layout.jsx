import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import styles from "./Layout.module.css";
//import;
//import ThemeContext from "../ThemeContext";

// Convention: hooks should usually be lowercase (useTheme), but UseTheme works if that's how you named it.
import { useTheme } from "../ThemeContext";

const Layout = () => {
  // Hooks are called first.
  const { theme, toggleTheme } = useTheme();
  console.log("Current Theme: ", theme);
  return (
    <>
      <div
        id="Layout"
        className={`
            ${styles.LayoutContainer} 
            ${ theme === "dark" ? styles.DarkModePallete : styles.LightModePallete } 
      `}>
        <div className={styles.BackgroundWrapper}>
          <div className={styles.OuterContainer}>
          <NavBar />
          
            <div className={` 
            ${styles.mainGlassWrapper} 
            ${ theme === "dark" ? styles.GlassyEffectDarkMode : styles.GlassyEffectLightMode }
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
