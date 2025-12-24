import React, { useState, useEffect } from "react";
import { ServicesCardGrid } from "./components/ServicesCardGrid/ServicesCardGrid";
import { 
  //AddressAutocomplete, 
  AddressAutocompleteExample
} from "./components/AddressAutocomplete/AddressAutocomplete.example";
import { HomeServicesCardGrid } from "./components/ServicesCardGrid/HomeServicesCard.jsx";
import {
  //CarouselCard,
  // CarouselCardDemo,
  HomeCarouselCard
} from "./components/CarouselCard/HomeCarouselCard";
//import { CustomerFormExample } from "./components/CustomerForm/CustomerForm.example.jsx";
import { MasterContactForm } from "./components/MasterContactForm/MasterContactForm.jsx";





export default function Home() {
  const [selectedService, setSelectedService] = useState("");
  return (
  <>
    <HomeCarouselCard />
    <div
          style={{
            backgroundColor: "var(--GlassyBackgroundDarker)",
            backdropFilter: "var(--BackBlurDarker)",
            WebkitBackdropFilter: "var(--WebkitBackBlurDarker)",
            border: "var(--GlassyBorderDarker)",
            boxShadow: "var(--GlassyBoxShadowDarker)"
          }}
        >
          <HomeServicesCardGrid
            quoteSectionId="get-quote"
            onSelectService={(serviceTitle) => setSelectedService(serviceTitle)}
          />
          <MasterContactForm 
            serviceType = {selectedService}
          />
          
        </div>
    <div>
      
    </div>
  </>
  );
}
