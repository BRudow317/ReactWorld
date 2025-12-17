import React, { useContext } from 'react';
import ThemeContext from '../../themes/Gemini/GeminiThemeContext';

// FlexGrid (Responsive Card Container)
export const FlexGrid = ({ children, minItemWidth = '250px' }) => {
  const { spacing } = useContext(ThemeContext);
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(${minItemWidth}, 1fr))`,
      gap: spacing(3),
      width: '100%'
    }}>
      {children}
    </div>
  );
};
