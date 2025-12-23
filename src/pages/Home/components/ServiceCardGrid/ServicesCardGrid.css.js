import { GlobalCSS } from "../../../../layouts";

/**
 * IMPORTANT:
 * This file exports a function instead of calling hooks here.
 * React hooks (like useTheme) must only run inside React components.
 */
export function ServicesCardGridStyles({ theme }) {
  const isDark = theme === "dark";

  return {
    section: {
      padding: "24px",
      backgroundColor: isDark ? GlobalCSS.GlobalColors.mlmDark : GlobalCSS.GlobalColors.mlmWhite,
    },
    headerRow: {
      maxWidth: "1100px",
      margin: "0 auto 16px auto",
    },
    heading: {
      margin: "0 0 6px 0",
      fontSize: "28px",
      lineHeight: "34px",
      color: isDark ? GlobalCSS.GlobalColors.mlmWhite : GlobalCSS.GlobalColors.mlmBlack,
    },
    subheading: {
      margin: 0,
      fontSize: "14px",
      lineHeight: "20px",
      color: isDark ? "rgba(255,255,255,0.75)" : "rgba(0,0,0,0.65)",
    },

    /**
     * Flex "grid": wraps into rows, responsive by nature.
     */
    grid: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      gap: "14px",
      alignItems: "stretch",
    },
  };
}
