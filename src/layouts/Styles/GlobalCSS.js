// barrel export notation import like or relative pathing. 
// import { GlobalCSS } from "src/layouts/GlobalCSS";
// Colors as plain values for composition
export const GlobalCSS = {
  GlobalColors: {
    mlmOrange: "rgb(226, 96, 24)",
    mlmLightOrange: "rgb(243, 110, 33)",
    mlmDark: "rgb(0, 11, 0)",
    mlmBlack: "rgb(0, 0, 0)",
    mlmGreen: "rgb(105, 155, 95)",
    mlmGray: "rgb(160, 163, 161)",
    mlmLightGreen: "rgb(79, 187, 68)",
    mlmYellow: "rgb(242, 178, 54)",
    mlmWhite: "rgb(255, 255, 255)",
  },

  // Palettes
  DarkModePallete: {
    backgroundColor: "rgb(0, 0, 0)",
    color: "rgb(255, 255, 255)",
    borderColor: "rgba(255, 255, 255, 0.12)",
  },

  LightModePallete: {
    backgroundColor: "rgb(255, 255, 255)",
    color: "rgb(0, 11, 0)",
    borderColor: "rgb(20, 20, 20)",
  },

  // Glass effects
  GlassyEffectDarkMode: {
    backgroundColor: "rgba(18, 18, 18, 0.45)",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "1.5rem",
    boxShadow: "25px 25px 50px -12px rgba(3, 54, 14, 0.5)",
  },

  GlassyEffectLightMode: {
    backgroundColor: "rgba(130, 130, 130, 0.75)",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    border: "1px solid rgba(52, 52, 52, 0.5)",
    borderRadius: "1.5rem",
    boxShadow: "25px 25px 50px -12px rgba(3, 54, 14, 0.25)",
  },

  // Content Containers
  LayoutContainer: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  BackgroundWrapper: {
    // NOTE: Path may need adjustment based on bundler
    backgroundImage: "url('../../assets/MlmFlag.jpg')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  OuterContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  mainGlassWrapper: {
    width: "auto",
    maxWidth: "1024px",
    minWidth: "300px",
    height: "auto",
    padding: "2rem",
    margin: "1rem",
  },

  BodyContainer: {
    flex: 1,
  },

  // Header styles
  HeaderPrimaryWrapperStyle: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    background: "linear-gradient(to right, rgba(11, 9, 11, .3) 0%, rgba(11, 9, 11, 1.0) 15%, rgba(11, 9, 11, 1.0) 85%, rgba(11, 9, 11, .3) 100%)",
    borderRadius: "1.5rem",
  },

  HeaderImgStyle: {
    width: "100%",
    objectFit: "contain",
    maxHeight: "10rem",
    height: "100%",
  },

  // Borders & gradients
  containerBorderTheme: {
    border: "1px solid rgba(255, 255, 255, 0.12)",
    boxShadow:
      "0 12px 30px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(90, 90, 90, 0.08)",
    borderRadius: "min(15px, 15%)",
  },

  diagonalGradient: {
    background: "linear-gradient(135deg, rgb(105, 155, 95), rgb(79, 187, 68))",
  },
};


/*-------------------------------------------------------------------------------------------------------*/
