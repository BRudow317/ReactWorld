import React from "react";

export default function CardGrid({ minCardWidth = 220, children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${minCardWidth}px, 1fr))`,
        gap: 16,
      }}
    >
      {children}
    </div>
  );
}
