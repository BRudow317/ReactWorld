import { GlobalCSS } from "../../../../layouts";

export function ServiceCardStyles({ theme, isHovered }) {
  const isDark = theme === "dark";

  const baseBorder = isDark
    ? "1px solid rgba(255,255,255,0.10)"
    : "1px solid rgba(0,0,0,0.10)";

  const hoverBorder = `1px solid ${GlobalCSS.GlobalColors.mlmOrange}`;

  return {
    /**
     * Flex item sizing:
     * - grows to fill space
     * - wraps naturally
     * - minimum width keeps it "card-like" on desktop
     */
    card: {
      flex: "1 1 240px",
      minWidth: "240px",
      maxWidth: "540px",

      display: "flex",
      alignItems: "center",
      gap: "12px",

      padding: "14px",
      textDecoration: "none",
      borderRadius: "16px",
      border: isHovered ? hoverBorder : baseBorder,

      backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
      boxShadow: isHovered
        ? "0 10px 26px rgba(0,0,0,0.18)"
        : "0 6px 18px rgba(0,0,0,0.12)",

      transform: isHovered ? "translateY(-2px)" : "translateY(0px)",
      transition: "transform 140ms ease, box-shadow 140ms ease, border 140ms ease",

      // Keyboard accessibility: browsers will show focus ring, but we avoid removing outlines.
      cursor: "pointer",
    },

    iconSvg: {
      color: GlobalCSS.GlobalColors.mlmOrange, // Lucide uses currentColor by default
    },

    iconWrap: {
      width: "46px",
      height: "46px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: isDark
        ? "rgba(226, 96, 24, 0.18)"
        : "rgba(226, 96, 24, 0.12)",
      border: isDark ? "1px solid rgba(226, 96, 24, 0.35)" : "1px solid rgba(226, 96, 24, 0.25)",
      flexShrink: 0,
    },

    icon: {
      fontSize: "22px",
      lineHeight: "22px",
    },

    textWrap: {
      minWidth: 0, // allows text wrapping inside flex items
    },

    title: {
      margin: 0,
      fontSize: "15px",
      lineHeight: "20px",
      color: isDark ? GlobalCSS.GlobalColors.mlmWhite : GlobalCSS.GlobalColors.mlmBlack,
      wordBreak: "break-word",
    },
  };
}
