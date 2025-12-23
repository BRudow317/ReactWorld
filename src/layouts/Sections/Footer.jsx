import React from "react";
//import { DarkTheme,LightTheme, ContainerBorderTheme, createDiagonalGradient } from "../ThemeStyles";
import { useNavigation } from '../../hooks';
import { useTheme } from "../../themes/ThemeContext";
import { getPageTitle } from '../../utils';

const Footer = function() {
    const { theme, toggleTheme } = useTheme();
    const { activeItem } = useNavigation();
    const pageTitle = getPageTitle(activeItem);
        

    return (
        <>
            
            <div className="Footer-container">
                <br />
                <h4>{pageTitle}</h4>
                <p>© 2025 Miller Land Management. All rights reserved.</p>
            </div>
            <div
              style={{
                padding: 20,
                background: theme === "dark" ? "#333" : "#FFF",
                color: theme === "dark" ? "#FFF" : "#333",
              }}
              >
                <h3>Current Site Theme: {theme}</h3>
                <button onClick={toggleTheme}>Toggle Theme</button>
              </div>
        </>
    );
}
export default Footer;