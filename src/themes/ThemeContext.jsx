import { createContext, useContext, useState } from 'react';

// 1. Create the "Channel"
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // 1. Add State to hold the current theme
    const [theme, setTheme] = useState("dark");

    // 2. Helper function to toggle it
    const toggleTheme = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export const UseTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};