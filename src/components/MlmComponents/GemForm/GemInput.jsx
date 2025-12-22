import React, { useContext } from 'react';
import GemTheme from './GemThemeContext';

// Input Component
export const GemInput = ({ label, name, type = 'text', value, onChange, placeholder }) => {
  const { colors, spacing, borderRadius } = useContext(GemTheme);
  
  return (
    <div style={{ marginBottom: spacing(2), display: 'flex', flexDirection: 'column' }}>
      {label && <label style={{ marginBottom: spacing(1), fontSize: '0.9rem', color: colors.text }}>{label}</label>}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: spacing(1.5),
          borderRadius: borderRadius,
          border: `1px solid ${colors.border}`,
          fontSize: '1rem',
          outline: 'none',
        }}
      />
    </div>
  );
};
