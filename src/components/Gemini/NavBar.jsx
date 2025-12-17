import React, { useContext } from 'react';
import ThemeContext from '../../themes/Gemini/GeminiThemeContext';
import { useScreenSize } from '../../hooks/GeminiHooks/useScreenSize';

// Navigation Bar
export const NavBar = ({ logo, links }) => {
  const { colors, shadow, spacing } = useContext(ThemeContext);
  const { isMobile } = useScreenSize();

  return (
    <nav style={{
      backgroundColor: colors.surface,
      boxShadow: shadow,
      padding: spacing(2),
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: spacing(2)
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: colors.primary }}>{logo}</div>
      <div style={{ display: 'flex', gap: spacing(2), flexDirection: isMobile ? 'column' : 'row' }}>
        {links.map((link, idx) => (
          <a key={idx} href={link.href} style={{ textDecoration: 'none', color: colors.text, fontWeight: '500' }}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
