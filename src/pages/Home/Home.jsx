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
            backgroundColor: "transparent",
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            border: "none",
            boxShadow: "none",
            marginTop: "24px",
            marginInline: "clamp(6px, 3vw, 16px)",
            padding: "clamp(10px, 3vw, 16px)",
            borderRadius: "0"
          }}
        >
          <HomeServicesCardGrid
            quoteSectionId="get-quote"
            onSelectService={(serviceTitle) => setSelectedService(serviceTitle)}
          />
          <MasterContactForm 
            serviceType={selectedService}
            mergeTop
          />
          
        </div>
    <div>
      
    </div>
  </>
  );
}
