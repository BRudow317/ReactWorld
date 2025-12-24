import React from "react";
//import { DarkTheme,LightTheme, ContainerBorderTheme, createDiagonalGradient } from "../ThemeStyles";
import { useNavigation } from "../../hooks";
import { getPageTitle } from "../../";
// import logo from '../../assets/MlmLogo.jpg';
import banner from "../../assets/MlmBanner.jpg";
import { LayoutStyles } from "../";
import { useTheme } from "../../themes/ThemeContext";
const Footer = function () {
  const { theme, toggleTheme } = useTheme();
  const { activeItem } = useNavigation();
  const pageTitle = getPageTitle(activeItem);

  return (
    <>
      <div className={LayoutStyles.FooterContainer}>
        <h4>{pageTitle}</h4>
        <p>© 2025 Miller Land Management. All rights reserved.</p>
      </div>
      <div
        style={{
          padding: 20,
          background: "var(--GlassyBackground)",
          color: "var(--GlobalTextColor)",
        }}
      >
        <h3>Current Site Theme: {theme}</h3>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div className={LayoutStyles.HeaderPrimaryWrapperStyle}>
          <img
            src={banner}
            className={LayoutStyles.HeaderImgStyle}
            alt="mlm-banner"
          />
        </div>
      </div>
    </>
  );
};
export default Footer;
