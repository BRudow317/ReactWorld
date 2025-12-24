import React, { useState } from "react";
import { ServicesCardGrid } from "./ServicesCardGrid";
//import { GlobalCSS } from "../../../../";

/**
 * Demo wiring:
 * - clicking a card scrolls to #get-quote
 * - we also pre-fill "Selected Service" in the quote section
 *
 * NOTE: This example assumes your app already provides the ThemeProvider
 * behind useTheme() (per your project setup).
 */
export function HomeServicesCardGrid() {

  const [selectedService, setSelectedService] = useState("");

  return (
    <div
      style={{
        backgroundColor: "var(--GlobalBackground)",
      }}
    >
      <ServicesCardGrid
        quoteSectionId="get-quote"
        onSelectService={(serviceTitle) => setSelectedService(serviceTitle)}
      />
    </div>
  );
}
