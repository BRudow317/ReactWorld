import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTheme } from "../../../../themes/ThemeContext"; // keep your existing path
import { CarouselStyles } from "./CarouselStyles";
// import { CarouselCard } from "./CarouselCard";
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
/**
 * CarouselCard Component
 * A reusable carousel component that displays images and videos in card format
 *
 * Props:
 * @param {Array} items
 * @param {number} cardWidth 
 * @param {number} cardHeight 
 * @param {boolean} autoPlay 
 * @param {number} autoPlayInterval
 */
export const CarouselCard = ({
  items = [],
  cardWidth = 400,
  cardHeight = 300,
  autoPlay = true,
  autoPlayInterval = 3000,
}) => {
  const { theme } = useTheme();

  /**
   * Create styles once per render (memoized per theme).
   * Avoids creating a new styles object for every style usage.
   */
  const styles = useMemo(() => CarouselStyles({ theme }), [theme]);

  // State management for current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // State for tracking loaded media to enable lazy loading
  const [loadedMedia, setLoadedMedia] = useState(new Set());

  // Ref for video elements to control playback
  const videoRefs = useRef({});

  /**
   * Navigation handler - moves to next slide
   */
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  /**
   * Navigation handler - moves to previous slide
   */
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  /**
   * Navigation handler - jumps to specific slide
   */
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  /**
   * Auto-play effect
   * Note: It’s generally better to NOT depend on currentIndex to avoid interval reset every tick.
   */
  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]); // intentional: no currentIndex

  /**
   * Lazy loading effect - loads current, previous, and next slides
   */
  useEffect(() => {
    if (items.length === 0) return;

    const indicesToLoad = [
      currentIndex,
      (currentIndex - 1 + items.length) % items.length,
      (currentIndex + 1) % items.length,
    ];

    setLoadedMedia((prev) => {
      const newSet = new Set(prev);
      indicesToLoad.forEach((idx) => newSet.add(idx));
      return newSet;
    });
  }, [currentIndex, items.length]);

  /**
   * Video playback control - pauses non-visible videos
   */
  useEffect(() => {
    Object.keys(videoRefs.current).forEach((key) => {
      const video = videoRefs.current[key];
      if (!video) return;

      if (parseInt(key, 10) === currentIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentIndex]);

  // Return empty state if no items provided
  if (!items || items.length === 0) {
    return <div style={styles.emptyState}>No media to display</div>;
  }

  return (
    <div style={styles.carouselContainer}>
      {/* Main card container with overflow hidden for slide effect */}
      <div style={styles.cardContainer()}>
        {/* Slides wrapper - translates horizontally to show current slide */}
        <div style={styles.slidesWrapper({ currentIndex, items })}>
          {items.map((item, index) => (
            <div key={index} style={styles.slide({ items })}>
              {loadedMedia.has(index) ? (
                item.type === "video" ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item.src}
                    style={styles.media}
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt || `Slide ${index + 1}`}
                    style={styles.media}
                    loading="lazy"
                  />
                )
              ) : (
                <div style={styles.placeholder}>Loading...</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls - only show if multiple items */}
      {items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            style={{ ...styles.navButton, ...styles.prevButton }}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            onClick={goToNext}
            style={{ ...styles.navButton, ...styles.nextButton }}
            aria-label="Next slide"
          >
            ›
          </button>

        </>
      )}
    </div>
  );
};