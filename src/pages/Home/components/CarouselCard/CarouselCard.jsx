import React, { useState, useEffect, useRef, useMemo } from "react";
import { useTheme } from "../../../../themes/ThemeContext"; // keep your existing path
import { CarouselStyles } from "./CarouselStyles";

/**
 * CarouselCard Component
 * A reusable carousel component that displays images and videos in card format
 *
 * Props:
 * @param {Array} items - Array of objects with { type: 'image'|'video', src: 'url', alt: 'description' }
 * @param {number} cardWidth - Width of each card in pixels (default: 400)
 * @param {number} cardHeight - Height of each card in pixels (default: 300)
 * @param {boolean} autoPlay - Auto-advance slides (default: false)
 * @param {number} autoPlayInterval - Time between slides in ms (default: 3000)
 */
export const CarouselCard = ({
  items = [],
  cardWidth = 400,
  cardHeight = 300,
  autoPlay = false,
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
      <div style={styles.cardContainer({ cardWidth, cardHeight })}>
        {/* Slides wrapper - translates horizontally to show current slide */}
        <div style={styles.slidesWrapper({ currentIndex })}>
          {items.map((item, index) => (
            <div key={index} style={styles.slide({ cardWidth, cardHeight })}>
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

          <div style={styles.indicators}>
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  ...styles.dot,
                  ...(index === currentIndex ? styles.dotActive : {}),
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
