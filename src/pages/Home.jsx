//import React from 'react';
//import { useState } from 'react'
import Header from '../themes/HeaderContainer';
import MainContainer from '../themes/MainContainer';
import Footer from '../themes/FooterContainer';


export default function Home() {
return (
   <>
      <p>Welcome to the Miller Land Management React Application!</p>
      <p>This application is designed to help you manage your land assets efficiently and effectively.</p>
      <p>Explore the various features and tools available to streamline your land management tasks.</p>
      {multiLineBreak(2)}
      <p>Use the navigation bar above to access different sections of the application.</p>
      <p>We hope you find this application useful and easy to navigate!</p>
   </>
);
}

function multiLineBreak(x){
   return <>{Array(x).fill(<br/>)}</>;
}
