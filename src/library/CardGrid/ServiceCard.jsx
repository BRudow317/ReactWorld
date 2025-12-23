import React, { useMemo } from "react";
import { createServiceCardStyles } from "./ServiceCard.css";

/**
 * A single service "card" that behaves like a link.
 * Kept as an <a> for accessibility and predictable navigation semantics.
 */
export function ServiceCard({
  service,
  href,
  theme,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onActivate,
}) {
  const styles = useMemo(
    () => createServiceCardStyles({ theme, isHovered }),
    [theme, isHovered]
  );

  return (
    <a
      href={href}
      onClick={onActivate}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={styles.card}
      role="listitem"
      aria-label={`Get a quote for ${service.title}`}
    >
      <div style={styles.iconWrap} aria-hidden="true">
        <span style={styles.icon}>{service.icon}</span>
      </div>

      <div style={styles.textWrap}>
        <h3 style={styles.title}>{service.title}</h3>
      </div>
    </a>
  );
}
