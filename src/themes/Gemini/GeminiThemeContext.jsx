import React, { createContext } from 'react';

// ==========================================
// 1. THEME & GLOBAL STYLES (Config)
// ==========================================
const ThemeContext = createContext();

const theme = {
  colors: {
    primary: '#2563EB',     // Royal Blue
    secondary: '#64748B',   // Slate
    success: '#10B981',     // Emerald
    danger: '#EF4444',      // Red
    background: '#F3F4F6',  // Light Gray
    surface: '#FFFFFF',     // White
    text: '#1F2937',        // Dark Gray
    textLight: '#9CA3AF',   // Light Gray Text
    border: '#E5E7EB',      // Border Gray
  },
  spacing: (factor) => `${factor * 0.5}rem`,
  borderRadius: '8px',
  shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};

// Global Provider Wrapper
export const LibraryProvider = ({ children }) => {
  return <ThemeContext.Provider value={{...theme}}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
