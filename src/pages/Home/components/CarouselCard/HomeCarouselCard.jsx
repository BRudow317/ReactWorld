import { CarouselCard } from "./CarouselCard";
import * as CMI from "../../../../assets/CarouselMedia";
//import { CarouselStyles } from "./CarouselStyles";
/**
 * Demo implementation showing how to use the component
 */
export const HomeCarouselCard = () => {
  // Example media items array
  const mediaItems = [
    {
      type: 'image',
      src: CMI.IndianapolisCityScape,
      alt: 'Indianapolis city skyline',
    },
    {
      type: 'image',
      src: CMI.WaterProofingFoundation,
      alt: 'Waterproofing foundation',
    },
    {
      type: 'image',
      src: CMI.FoundationDamage,
      alt: 'Foundation damage',
    },
    {
      type: 'image',
      src: CMI.basementWaterDamage,
      alt: 'Basement water damage',
    },
    {
      type: 'image',
      src: CMI.ClawDroppingDirt,
      alt: 'Claw dropping dirt',
    },
    {
      type: 'image',
      src: CMI.ClawInSun,
      alt: 'Claw in sunlight',
    },
    {
      type: 'image',
      src: CMI.ScienceFoundationStress,
      alt: 'Science foundation stress',
    },
  ];

  return (
      <CarouselCard 
        items={mediaItems} 
        cardWidth={"100%"} 
        cardHeight={"100%"}
        autoPlay={true}
        autoPlayInterval={20000}
      /> 
  );
};