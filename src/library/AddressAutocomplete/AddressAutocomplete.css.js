import { GlobalCSS } from "../../layouts/GlobalCSS"; // adjust if your path differs

/**
 * Object-based styles (theme-aware).
 * NOTE: Any state-driven variants (focus/active) are handled via args.
 */
export function createAddressAutocompleteStyles({ theme, isFocused }) {
  const isDark = theme === "dark";

  const surfaceBg = isDark ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)";
  const textMain = isDark ? GlobalCSS.GlobalColors.mlmWhite : GlobalCSS.GlobalColors.mlmBlack;
  const textMuted = isDark ? "rgba(255,255,255,0.70)" : "rgba(0,0,0,0.60)";
  const border = isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.12)";

  return {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      maxWidth: "800px",
      margin: "2rem auto",
      padding: "2rem",
      backgroundColor: surfaceBg,
      borderRadius: "14px",
      border: `1px solid ${border}`,
    },

    title: {
      fontSize: "1.5rem",
      fontWeight: 700,
      margin: "0 0 0.75rem 0",
      color: textMain,
    },

    instructions: {
      fontSize: "0.875rem",
      color: textMuted,
      margin: "0 0 1rem 0",
    },

    inputWrapper: {
      position: "relative",
      marginBottom: "1rem",
    },

    inputContainer: {
      position: "relative",
    },

    searchIcon: {
      position: "absolute",
      left: "1rem",
      top: "50%",
      transform: "translateY(-50%)",
      color: isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.45)",
    },

    input: {
      width: "100%",
      padding: "0.875rem 1rem 0.875rem 3rem",
      border: `2px solid ${isFocused ? GlobalCSS.GlobalColors.mlmOrange : border}`,
      borderRadius: "10px",
      fontSize: "1rem",
      outline: "none",
      transition: "border-color 0.2s",
      boxSizing: "border-box",
      backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)",
      color: textMain,
    },

    suggestionsContainer: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      backgroundColor: surfaceBg,
      border: `2px solid ${border}`,
      borderTop: "none",
      borderRadius: "0 0 10px 10px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      zIndex: 10,
      maxHeight: "240px",
      overflowY: "auto",
    },

    getSuggestionStyle: ({ isActive }) => ({
      padding: "1rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "flex-start",
      gap: "0.75rem",
      borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
      backgroundColor: isActive
        ? isDark
          ? "rgba(226, 96, 24, 0.18)"
          : "rgba(226, 96, 24, 0.10)"
        : "transparent",
      transition: "background-color 0.15s",
    }),

    suggestionIcon: {
      marginTop: "0.25rem",
      flexShrink: 0,
      color: GlobalCSS.GlobalColors.mlmOrange,
    },

    suggestionText: {
      fontSize: "0.9375rem",
      color: isDark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.80)",
      flex: 1,
    },

    loadingText: {
      padding: "1rem",
      textAlign: "center",
      color: textMuted,
      fontSize: "0.875rem",
    },

    mapContainer: {
      width: "100%",
      height: "400px",
      borderRadius: "10px",
      overflow: "hidden",
      border: `2px solid ${border}`,
      marginTop: "1rem",
    },

    map: {
      width: "100%",
      height: "100%",
    },
  };
}
