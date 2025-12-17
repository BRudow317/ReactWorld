import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Background from "./Background";
// Convention: hooks should usually be lowercase (useTheme), but UseTheme works if that's how you named it.
import { UseTheme } from "../themes/ThemeContext";

const Layout = () => {
  // Hooks are called first.
  const theme = UseTheme(); 

  // Debugging: Check the console to see if we are actually getting a value
  console.log("Current Theme:", theme); 

  return (
    // 2. Optimization: Move the style to the container or Background, 
    // depending on where you want the color to apply.
      <Background>
        <NavBar />
        <div className="content-container">
          {/* The active page content */}
          <Outlet />
        </div>
      </Background>
  );
};

export default Layout;