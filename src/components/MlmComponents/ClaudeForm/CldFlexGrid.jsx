import React from "react";

export function CldFlexGrid({ gap = 16, children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap,
      }}
    >
      {children}
    </div>
  );
}
