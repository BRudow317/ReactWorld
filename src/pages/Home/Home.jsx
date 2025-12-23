import React, { useState, useEffect } from "react";
import { 
  //AddressAutocomplete, 
  AddressAutocompleteExample,
  //ServicesCardGrid,
  ServicesCardGridExample,
  //ServiceCard,
  //CarouselCard,
  CarouselCardDemo,
  HomeCarouselCard
} from "./";


import { useTheme } from "../../themes/ThemeContext"; 

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
  <>
    <HomeCarouselCard colorMode={theme} />
    <h2>Services Card Grid Example</h2>
    <ServicesCardGridExample colorMode={theme} />
    <h2>Address Form Example </h2>
    <AddressAutocompleteExample colorMode={theme} />
  </>
  );
}
