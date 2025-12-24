import React, { useMemo } from "react";
import { ServiceCardStyles } from "./ServiceCard.css";

export function ServiceCard({ service, href, isHovered, onMouseEnter, onMouseLeave, onActivate }) {
  const styles = useMemo(() => ServiceCardStyles({ isHovered }), [isHovered]);

  const Icon = service.Icon; // React component

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
        {Icon ? <Icon size={22} style={styles.iconSvg} /> : null}
      </div>

      <div style={styles.textWrap}>
        <h3 style={styles.title}>{service.title}</h3>
      </div>
    </a>
  );
}
