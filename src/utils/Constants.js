import { Wrench, Hammer, Shovel, Truck, Trees, Trash2, LandPlot, Construction, Home, CarFront } from "lucide-react";

const DEFAULT_SERVICES = [
  { id: "emergency-repairs", title: "Emergency Repairs", Icon: Wrench },
  { id: "demolition", title: "Demolition", Icon: Hammer },
  { id: "septic", title: "Septic Installation, Repair & Replacements", Icon: Home },
  { id: "land-grading", title: "Commercial & Residential Land Grading", Icon: LandPlot },
  { id: "debris-removal", title: "Debris Removal (Tree/Brush/Stump/Stone/Soil)", Icon: Trash2 },
  { id: "material-sales", title: "Material Sales (Mulch/Topsoil/Sand/Gravel/Crushed Stone/Cobblestone)", Icon: Construction },
  { id: "hauling", title: "Hauling Services", Icon: Truck },
  { id: "foundation-digging", title: "Residential & Commercial Foundation Digging", Icon: Shovel },
  { id: "driveway", title: "Driveway Construction", Icon: CarFront },
];
/**
 * Default service catalog (9 offerings).
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
];

export { DEFAULT_SERVICES, DEFAULT_EMOJI_SERVICES };