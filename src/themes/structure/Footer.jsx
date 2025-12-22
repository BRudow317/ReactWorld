import React from "react";
//import { DarkTheme,LightTheme, ContainerBorderTheme, createDiagonalGradient } from "../ThemeStyles";
import { useNavigation } from '../../hooks/Mlm/useNavigation';
import { useTheme } from "../ThemeContext";



const Footer = function() {
    const { theme, toggleTheme } = useTheme();
    const { activeItem } = useNavigation();
    
        const getPageTitle = (item) => {
            if (item) {
                const name = item.label || item.name;
                if (name && typeof name === 'string' && name.trim().length) return name;
            }
            if (typeof window !== 'undefined' && window.location) {
                const segments = window.location.pathname.split('/').filter(Boolean);
                if (segments.length === 0) return 'Home';
                const last = segments[segments.length - 1];
                const pretty = last
                    .replace(/[-_]/g, ' ')
                    .replace(/\b\w/g, (c) => c.toUpperCase());
                return pretty;
            }
            return 'Home';
        };

    return (
        <>
            
            <div className="Footer-container">
                <br />
                <h4>{getPageTitle(activeItem)}</h4>
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