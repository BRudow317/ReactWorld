//Hook that sets theme based on state of toggle.
import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // 1. Check Local Storage first
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    // 2. If no save, check System Preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    // Apply the attribute to <html>
    document.documentElement.setAttribute("data-theme", theme);
    // Save preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}