import React, { useContext } from 'react';
import GemTheme from '../GemForm/GemThemeContext';

// Button Component
export const GemButton = ({ children, onClick, variant = 'primary', type = 'button', disabled = false, style = {} }) => {
  const { colors, spacing, borderRadius } = useContext(GemTheme);
  
  const baseStyle = {
    padding: `${spacing(1.5)} ${spacing(3)}`,
    borderRadius: borderRadius,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: '600',
    opacity: disabled ? 0.6 : 1,
    transition: '0.2s',
    backgroundColor: colors[variant] || colors.primary,
    color: '#fff',
    ...style
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={baseStyle}>
      {children}
    </button>
  );
};
