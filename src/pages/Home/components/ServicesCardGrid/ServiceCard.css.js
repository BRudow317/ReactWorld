//import { GlobalCSS } from "../../../../";

export function ServiceCardStyles({ isHovered }) {

  const baseBorder = "1px solid rgba(255,255,255,0.10)";

  const hoverBorder = "1px solid var(--mlmLightGreen)";

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
      backgroundColor: "var(--GlassyBackground)",
      backdropFilter: "var(--BackBlur)",
      WebkitBackdropFilter: "var(--WebkitBackBlur)",
      boxShadow: "var(--GlassyBoxShadow)",
      boxShadow: isHovered
        ? "0 10px 26px rgba(0,0,0,0.18)"
        : "0 6px 18px rgba(0,0,0,0.12)",

      transform: isHovered ? "translateY(-2px)" : "translateY(0px)",
      transition: "transform 140ms ease, box-shadow 140ms ease, border 140ms ease",

      // Keyboard accessibility: browsers will show focus ring, but we avoid removing outlines.
      cursor: "pointer",
    },

    iconSvg: {
      color: "var(--mlmLightGreen)", // Lucide uses currentColor by default
    },

    iconWrap: {
      width: "46px",
      height: "46px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--GlassyBackground)",
      border: "1px solid var(--mlmLightGreen)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
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
      color: "var(--GlobalTextColor)",
      wordBreak: "break-word",
    },
  };
}
