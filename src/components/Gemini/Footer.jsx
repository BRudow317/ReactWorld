import React, { useContext } from 'react';
import ThemeContext from '../../themes/Gemini/GeminiThemeContext';

export const Footer = ({ children }) => {
  const { colors, spacing } = useContext(ThemeContext);
  return (
    <footer style={{ 
      backgroundColor: colors.secondary, 
      color: '#fff', 
      padding: spacing(4), 
      marginTop: 'auto', 
      textAlign: 'center' 
    }}>
      {children}
    </footer>
  );
};
