import { GlobalCSS } from "../../../../layouts";

/**
 * Pure style factory (NO hooks here).
 * Pass theme + any dynamic values via helper functions.
 */
export const CarouselStyles = ({ theme }) => {
  const isDark = theme === "dark";

  return {
    // Main container - centers the carousel
    carouselContainer: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "20px auto",
      maxWidth: "100%",
    },

    /**
     * Card container - clips overflow to hide off-screen slides
     * Dynamic sizing moved here to keep CarouselCard.jsx clean.
     */
    cardContainer: ({ cardWidth, cardHeight }) => ({
      position: "relative",
      overflow: "hidden",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: isDark ? GlobalCSS.GlobalColors.mlmBlack : GlobalCSS.GlobalColors.mlmWhite,
      width: cardWidth,
      height: cardHeight,
    }),

    /**
     * Slides wrapper - translate based on currentIndex
     * Transform logic moved here to keep JSX minimal.
     */
    slidesWrapper: ({ currentIndex }) => ({
      display: "flex",
      transition: "transform 0.5s ease-in-out",
      height: "100%",
      transform: `translateX(-${currentIndex * 100}%)`,
    }),

    // Individual slide container - also sized consistently
    slide: ({ cardWidth, cardHeight }) => ({
      flexShrink: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDark ? GlobalCSS.GlobalColors.mlmBlack : GlobalCSS.GlobalColors.mlmWhite,
      width: cardWidth,
      height: cardHeight,
    }),

    // Media element (image/video) - object-fit ensures proper scaling
    media: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block",
    },

    // Placeholder for loading media
    placeholder: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: isDark ? GlobalCSS.GlobalColors.mlmWhite : GlobalCSS.GlobalColors.mlmBlack,
      fontSize: "18px",
    },

    // Base styles for navigation buttons
    navButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: isDark ? "rgba(0, 0, 0, 0.75)" : "rgba(255, 255, 255, 0.85)",
      color: isDark ? GlobalCSS.GlobalColors.mlmWhite : GlobalCSS.GlobalColors.mlmBlack,
      border: "1px solid rgba(255, 255, 255, 0.12)",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      fontSize: "24px",
      cursor: "pointer",
      zIndex: 10,
      transition: "background-color 0.3s",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      userSelect: "none",
    },

    // Previous button position
    prevButton: {
      left: "10px",
    },

    // Next button position
    nextButton: {
      right: "10px",
    },

    // Container for dot indicators
    indicators: {
      position: "absolute",
      bottom: "15px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: "8px",
      zIndex: 10,
    },

    // Individual dot indicator
    dot: {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      border: "none",
      backgroundColor: isDark ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)",
      cursor: "pointer",
      transition: "background-color 0.3s",
      padding: 0,
    },

    // Active dot indicator
    dotActive: {
      backgroundColor: isDark ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)",
    },

    // Empty state message
    emptyState: {
      padding: "40px",
      textAlign: "center",
      color: isDark ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.55)",
      fontSize: "18px",
    },
  };
};
