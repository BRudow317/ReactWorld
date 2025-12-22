const DarkTheme = {
    "MlmOrange": '#E26018',
    "MlmLightOrange": '#F36E21',
    "MlmDark": '#000B00',
    "MlmGreen": '#699B5F',
    "MlmGray": '#a0a3a1',
    "MlmLightGreen": '#4FBB44',
    "MlmYellow": '#F2B236',
    "MlmWhite": '#eef2ff',
};
    
const LightTheme = {
    "MlmOrange": '#E26018',
    "MlmDark": '#000B00',
    "MlmGreen": '#699B5F'
};

const ContainerBorderTheme = {
    border: '1px solid rgba(255, 255, 255, 0.12)', // subtle outline, blends with dark backgrounds
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08)', // drop + inset highlight
    //borderRadius: '15px', // rounded square corners used across logo frames
    borderRadius: 'min(15px, 15%)', // responsive rounded corners
};

// This function takes two colors and returns the CSS object
const createDiagonalGradient = (startColor, endColor) => {
  return `linear-gradient(135deg, ${startColor}, ${endColor})`;
};

    
export { DarkTheme, LightTheme, ContainerBorderTheme, createDiagonalGradient };

// Reusable frame styles for logo-like containers
// Provides a subtle border and depth-creating shadows that match the dark theme.