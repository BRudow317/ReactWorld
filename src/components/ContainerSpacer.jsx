import React, { useState } from 'react';

/**
 * RESPONSIVE CONTAINER SYSTEM
 * 
 * Reusable container classes that adapt to mobile and desktop
 * with consistent spacing, rounded corners, and flexible sizing.
 * 
 * These use CSS-in-JS but the patterns work with any styling approach.
 */

// ==========================================
// CORE SPACING SYSTEM
// ==========================================
const spacing = {
  // Base spacing unit (multiply for consistency)
  unit: 8, // 8px base
  
  // Semantic spacing values
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  
  // Edge spacing (distance from screen edges)
  edge: {
    mobile: '1rem',    // 16px on mobile
    desktop: '2rem',   // 32px on desktop
  },
  
  // Gap between sibling containers
  gap: {
    mobile: '1rem',    // 16px on mobile
    desktop: '1.5rem', // 24px on desktop
  }
};

// ==========================================
// CORE STYLING VARIABLES
// ==========================================
const theme = {
  // Border radius for modern rounded look
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  
  // Colors
  colors: {
    bg: {
      primary: '#ffffff',
      secondary: '#f7f9fc',
      card: '#ffffff',
    },
    border: '#e2e8f0',
    shadow: 'rgba(0, 0, 0, 0.08)',
  },
  
  // Breakpoints
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px',
  }
};

// ==========================================
// REUSABLE CONTAINER COMPONENTS
// ==========================================

/**
 * AppContainer - Root container with edge spacing
 * Keeps content away from screen edges
 * Adapts padding based on screen size
 */
const AppContainer = ({ children, className = '' }) => {
  const styles = {
    width: '100%',
    minHeight: '100vh',
    padding: spacing.edge.mobile,
    boxSizing: 'border-box',
    
    // Desktop: increase edge spacing
    '@media (min-width: 768px)': {
      padding: spacing.edge.desktop,
    }
  };
  
  return <div style={styles} className={className}>{children}</div>;
};

/**
 * ContentStack - Vertical stack with gaps
 * Automatically spaces children vertically
 * "Keep stacking until spacing rules say stop"
 */
const ContentStack = ({ children, gap = 'md', className = '' }) => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[gap] || spacing.md,
    width: '100%',
    
    // On mobile, reduce gap slightly
    '@media (max-width: 768px)': {
      gap: spacing.gap.mobile,
    }
  };
  
  return <div style={styles} className={className}>{children}</div>;
};

/**
 * Card - Modern rounded container
 * Perfect for header, main content, footer sections
 * Has padding, rounded corners, shadow, and background
 */
const Card = ({ children, className = '', padding = 'md', fullHeight = false }) => {
  const styles = {
    backgroundColor: theme.colors.bg.card,
    borderRadius: theme.radius.md,
    padding: spacing[padding] || spacing.md,
    boxShadow: `0 2px 8px ${theme.colors.shadow}`,
    border: `1px solid ${theme.colors.border}`,
    boxSizing: 'border-box',
    width: '100%',
    
    // Optional: fill available height
    ...(fullHeight && {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    }),
    
    // Desktop: increase padding
    '@media (min-width: 768px)': {
      padding: spacing.lg,
      borderRadius: theme.radius.lg,
    }
  };
  
  return <div style={styles} className={className}>{children}</div>;
};

/**
 * FlexContainer - Flexible container that grows/shrinks
 * Use for main content areas that should fill available space
 */
const FlexContainer = ({ children, className = '' }) => {
  const styles = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 0, // Important: allows shrinking
    overflow: 'auto', // Scrolls if content overflows
  };
  
  return <div style={styles} className={className}>{children}</div>;
};

/**
 * MaxWidthContainer - Centers content with max width
 * Prevents content from being too wide on large screens
 */
const MaxWidthContainer = ({ children, maxWidth = '1200px', className = '' }) => {
  const styles = {
    width: '100%',
    maxWidth: maxWidth,
    margin: '0 auto',
  };
  
  return <div style={styles} className={className}>{children}</div>;
};

/**
 * ResponsiveGrid - Auto-adjusting grid
 * Automatically adds/removes columns based on screen size
 */
const ResponsiveGrid = ({ children, minColumnWidth = '300px', gap = 'md', className = '' }) => {
  const styles = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`,
    gap: spacing[gap] || spacing.md,
    width: '100%',
  };
  
  return <div style={styles} className={className}>{children}</div>;
};

// ==========================================
// DEMO: CHAT-LIKE INTERFACE
// ==========================================
const ChatInterfaceDemo = () => {
  const [messages, setMessages] = useState([
    'This container adapts to screen size',
    'It has spacing from edges',
    'And rounds corners modern-style'
  ]);

  return (
    <AppContainer>
      <MaxWidthContainer maxWidth="800px">
        <ContentStack gap="md">
          
          {/* Header Card */}
          <Card padding="md">
            <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Chat Header</h2>
            <p style={{ margin: '0.5rem 0 0', color: '#718096', fontSize: '0.875rem' }}>
              With rounded edges and spacing
            </p>
          </Card>
          
          {/* Main Content Card - Flexible height */}
          <FlexContainer>
            <Card padding="md" fullHeight>
              <div style={{ 
                overflowY: 'auto', 
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: spacing.sm
              }}>
                {messages.map((msg, i) => (
                  <div key={i} style={{
                    padding: spacing.sm,
                    backgroundColor: theme.colors.bg.secondary,
                    borderRadius: theme.radius.sm,
                    fontSize: '0.9375rem'
                  }}>
                    {msg}
                  </div>
                ))}
              </div>
            </Card>
          </FlexContainer>
          
          {/* Footer Card */}
          <Card padding="sm">
            <div style={{ fontSize: '0.875rem', color: '#718096', textAlign: 'center' }}>
              Footer with spacing from bottom
            </div>
          </Card>
          
        </ContentStack>
      </MaxWidthContainer>
    </AppContainer>
  );
};

// ==========================================
// DEMO: THREE-SECTION LAYOUT
// ==========================================
const ThreeSectionDemo = () => {
  return (
    <AppContainer>
      <ContentStack gap="lg">
        
        {/* Header Section */}
        <Card>
          <h1 style={{ margin: 0 }}>Header Section</h1>
          <p style={{ margin: '0.5rem 0 0', color: '#718096' }}>
            Rounded card with automatic spacing
          </p>
        </Card>
        
        {/* Main Content Section - Grows to fill space */}
        <FlexContainer>
          <Card fullHeight>
            <h2 style={{ marginTop: 0 }}>Main Content</h2>
            <p style={{ color: '#718096' }}>
              This section grows to fill available space.
              It will shrink if other sections need room.
            </p>
            
            {/* Nested grid example */}
            <ResponsiveGrid minColumnWidth="200px" gap="sm">
              <div style={{
                padding: spacing.md,
                backgroundColor: theme.colors.bg.secondary,
                borderRadius: theme.radius.sm,
                textAlign: 'center'
              }}>
                Grid Item 1
              </div>
              <div style={{
                padding: spacing.md,
                backgroundColor: theme.colors.bg.secondary,
                borderRadius: theme.radius.sm,
                textAlign: 'center'
              }}>
                Grid Item 2
              </div>
              <div style={{
                padding: spacing.md,
                backgroundColor: theme.colors.bg.secondary,
                borderRadius: theme.radius.sm,
                textAlign: 'center'
              }}>
                Grid Item 3
              </div>
            </ResponsiveGrid>
          </Card>
        </FlexContainer>
        
        {/* Footer Section */}
        <Card>
          <div style={{ textAlign: 'center', color: '#718096' }}>
            © 2024 - Footer stays at bottom with spacing
          </div>
        </Card>
        
      </ContentStack>
    </AppContainer>
  );
};

// ==========================================
// MAIN APP - Toggle between demos
// ==========================================
const App = () => {
  const [demo, setDemo] = useState('chat');
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: theme.colors.bg.secondary,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Demo Switcher */}
      <div style={{ 
        position: 'fixed', 
        top: spacing.sm, 
        right: spacing.sm, 
        zIndex: 100,
        display: 'flex',
        gap: spacing.xs,
        backgroundColor: 'white',
        padding: spacing.xs,
        borderRadius: theme.radius.md,
        boxShadow: `0 2px 8px ${theme.colors.shadow}`
      }}>
        <button 
          onClick={() => setDemo('chat')}
          style={{
            padding: `${spacing.xs} ${spacing.sm}`,
            border: demo === 'chat' ? '2px solid #4299e1' : '1px solid #e2e8f0',
            borderRadius: theme.radius.sm,
            backgroundColor: demo === 'chat' ? '#ebf8ff' : 'white',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          Chat Demo
        </button>
        <button 
          onClick={() => setDemo('sections')}
          style={{
            padding: `${spacing.xs} ${spacing.sm}`,
            border: demo === 'sections' ? '2px solid #4299e1' : '1px solid #e2e8f0',
            borderRadius: theme.radius.sm,
            backgroundColor: demo === 'sections' ? '#ebf8ff' : 'white',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          Sections Demo
        </button>
      </div>
      
      {demo === 'chat' ? <ChatInterfaceDemo /> : <ThreeSectionDemo />}
    </div>
  );
};

export default App;

/**
 * ==========================================
 * HOW TO USE THESE COMPONENTS
 * ==========================================
 * 
 * BASIC PATTERN:
 * 
 * <AppContainer>              // Edge spacing from screen
 *   <ContentStack gap="md">   // Vertical spacing between children
 *     <Card>Header</Card>
 *     <FlexContainer>         // Grows to fill space
 *       <Card fullHeight>Main Content</Card>
 *     </FlexContainer>
 *     <Card>Footer</Card>
 *   </ContentStack>
 * </AppContainer>
 * 
 * 
 * KEY PRINCIPLES:
 * 
 * 1. AppContainer - Always outermost, handles edge spacing
 * 2. ContentStack - Stacks children with consistent gaps
 * 3. Card - Individual sections with rounded corners
 * 4. FlexContainer - Content that grows/shrinks dynamically
 * 5. MaxWidthContainer - Prevents content being too wide
 * 
 * 
 * RESPONSIVE BEHAVIOR:
 * 
 * Mobile (< 768px):
 * - 16px edge spacing
 * - 16px gaps between cards
 * - 12px border radius
 * 
 * Desktop (>= 768px):
 * - 32px edge spacing
 * - 24px gaps between cards
 * - 16px border radius
 * 
 * 
 * CUSTOMIZATION:
 * 
 * Change spacing.unit to adjust all spacing proportionally
 * Change theme.radius values for more/less rounded corners
 * Add more breakpoints in theme.breakpoints
 * 
 * ==========================================
 */