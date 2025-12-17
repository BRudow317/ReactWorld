import React from 'react';
import Flag from '../assets/MlmFlag.jpg';

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
    <>
      {/* GLOBAL RESET: This removes the 8px white border */}
      {/*
      <style>
        {`
          html, body, #root {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }
          
          body {
            overflow-x: hidden;
          }
          
        `}
      </style>
        */}
      <div style={bgStyle}>
        {children}
      </div>
    </>
  );
}

export default Background;