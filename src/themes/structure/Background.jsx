import React from 'react';
import Flag from '../../assets/MlmFlag.jpg';
//import { DarkTheme,LightTheme, ContainerBorderTheme, createDiagonalGradient } from "../ThemeStyles";

function Background({ children }) {
  const bgStyle = {
    backgroundImage: `url(${Flag})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // FIXED: Changed to 'fixed' so the background doesn't scroll away
    backgroundAttachment: 'fixed', 
    minHeight: '100vh',
    width: '100%',
  };

  return (
    <div style={bgStyle}>
      {children}
    </div>
  );
}

export default Background;
