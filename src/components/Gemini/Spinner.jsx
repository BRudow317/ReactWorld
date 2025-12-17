import React, { useContext } from 'react';
import ThemeContext from '../../themes/Gemini/GeminiThemeContext';

// Loader Component
export const Spinner = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <div style={{
      border: `4px solid ${colors.background}`,
      borderTop: `4px solid ${colors.primary}`,
      borderRadius: '50%',
      width: '24px',
      height: '24px',
      animation: 'spin 1s linear infinite'
    }} />
  );
};
