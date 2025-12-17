import React, { useContext } from 'react';
import ThemeContext from '../../themes/Gemini/GeminiThemeContext';

// Main Page Layout
export const PageLayout = ({ header, footer, children }) => {
  const { colors, spacing } = useContext(ThemeContext);
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      backgroundColor: colors.background,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {header}
      <main style={{ 
        flex: 1, 
        padding: spacing(3), 
        maxWidth: '1200px', 
        width: '100%', 
        margin: '0 auto',
        boxSizing: 'border-box'
      }}>
        {children}
      </main>
      {footer}
    </div>
  );
};
