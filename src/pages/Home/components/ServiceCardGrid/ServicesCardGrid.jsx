import React, { useMemo, useState, useCallback } from "react";
import { useTheme } from "../../../../themes/ThemeContext"; 
import { ServicesCardGridStyles } from "./ServicesCardGrid.css";
import { ServiceCard } from "./ServiceCard";
// ServicesCardGrid.jsx
import { Wrench, Hammer, Shovel, Truck, Trees, Trash2, LandPlot, Construction, Home } from "lucide-react";
// NOTE: Icon names are from Lucide; pick the exact ones you want from their catalog.

const DEFAULT_SERVICES = [
  { id: "emergency-repairs", title: "Emergency Repairs", Icon: Wrench },
  { id: "demolition", title: "Demolition", Icon: Hammer },
  { id: "septic", title: "Septic Installation, Repair & Replacements", Icon: Home },
  { id: "land-grading", title: "Commercial & Residential Land Grading", Icon: LandPlot },
  { id: "debris-removal", title: "Debris Removal (Tree/Brush/Stump/Stone/Soil)", Icon: Trash2 },
  { id: "material-sales", title: "Material Sales (Mulch/Topsoil/Sand/Gravel/Crushed Stone/Cobblestone)", Icon: Construction },
  { id: "hauling", title: "Hauling Services", Icon: Truck },
  { id: "foundation-digging", title: "Residential & Commercial Foundation Digging", Icon: Shovel },
  { id: "driveway", title: "Driveway Construction", Icon: Construction },
  { id: "foundation-repair", title: "Residential & Commercial Foundation Repair", Icon: Construction },
];
/**
 * Default service catalog (10 offerings).
 * Each card can scroll to the quote section and optionally pre-select a service.
 */
const DEFAULT_EMOJI_SERVICES = [
  { id: "emergency-repairs", title: "Emergency Repairs", icon: "🛠️" },
  { id: "demolition", title: "Demolition", icon: "🏚️" },
  { id: "septic", title: "Septic Installation, Repair & Replacements", icon: "🚽" },
  { id: "land-grading", title: "Commercial & Residential Land Grading", icon: "🚜" },
  { id: "debris-removal", title: "Debris Removal (Tree/Brush/Stump/Stone/Soil)", icon: "🪵" },
  {
    id: "material-sales",
    title: "Material Sales (Mulch/Topsoil/Sand/Gravel/Crushed Stone/Cobblestone)",
    icon: "🪨",
  },
  { id: "hauling", title: "Hauling Services", icon: "🚛" },
  { id: "foundation-digging", title: "Residential & Commercial Foundation Digging", icon: "⛏️" },
  { id: "driveway", title: "Driveway Construction", icon: "🛣️" },
  { id: "foundation-repair", title: "Residential & Commercial Foundation Repair", icon: "🏗️" },
];

/**
 * Props:
 * - quoteSectionId: DOM id of your "Get a Quote" section (default: "get-quote")
 * - onSelectService: optional callback to pre-fill the quote form with the chosen service title
 * - services: optional override for the service list
 * - heading: optional section heading
 */
export function ServicesCardGrid({
  quoteSectionId = "get-quote",
  onSelectService,
  services = DEFAULT_SERVICES,
  heading = "Services",
}) {
  const { theme } = useTheme();
  const styles = useMemo(() => ServicesCardGridStyles({ theme }), [theme]);

  // Hover state (inline-style friendly alternative to :hover in CSS)
  const [hoveredId, setHoveredId] = useState(null);

  /**
   * Smooth-scroll to the quote section and optionally pre-select a service.
   * We keep an href for accessibility and fallback, but intercept for smooth scrolling.
   */
  const handleActivate = useCallback(
    (service, e) => {
      // Allow normal behavior if JavaScript is disabled; with JS enabled we smooth-scroll.
      e.preventDefault();

      // Tell the quote form what service was clicked (optional).
      if (typeof onSelectService === "function") {
        onSelectService(service.title);
      }

      // Smooth-scroll to the quote section if it exists.
      const target = document.getElementById(quoteSectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update URL hash without jumping (nice for shareable links).
        window.history.replaceState(null, "", `#${quoteSectionId}`);
      } else {
        // Fallback: update hash (may jump if the element appears later)
        window.location.hash = quoteSectionId;
      }
    },
    [onSelectService, quoteSectionId]
  );

  return (
    <section style={styles.section} aria-label={heading}>
      <div style={styles.headerRow}>
        <h2 style={styles.heading}>{heading}</h2>
        <p style={styles.subheading}>
          Tap a service to jump to the quote form.
        </p>
      </div>

      <div style={styles.grid} role="list">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            href={`#${quoteSectionId}`}
            theme={theme}
            isHovered={hoveredId === service.id}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            onActivate={(e) => handleActivate(service, e)}
          />
        ))}
      </div>
    </section>
  );
}
