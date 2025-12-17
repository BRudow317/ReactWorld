import React, { useContext } from 'react';
import ThemeContext from '../../themes/Gemini/GeminiThemeContext';

// Card Component
export const Card = ({ title, children, footer, style = {} }) => {
  const { colors, borderRadius, shadow, spacing } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: colors.surface,
      borderRadius: borderRadius,
      boxShadow: shadow,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }}>
      {title && (
        <div style={{ padding: spacing(2), borderBottom: `1px solid ${colors.border}`, fontWeight: 'bold', fontSize: '1.2rem' }}>
          {title}
        </div>
      )}
      <div style={{ padding: spacing(2), flex: 1 }}>{children}</div>
      {footer && (
        <div style={{ padding: spacing(2), backgroundColor: colors.background, borderTop: `1px solid ${colors.border}` }}>
          {footer}
        </div>
      )}
    </div>
  );
};
