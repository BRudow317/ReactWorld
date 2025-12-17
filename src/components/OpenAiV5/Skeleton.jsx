import React from "react";

export function Skeleton({ height = 12, width = "100%", radius = 10, className, style }) {
  return (
    <div
      className={className}
      style={{
        height,
        width,
        borderRadius: radius,
        background: "linear-gradient(90deg, rgba(0,0,0,.05), rgba(0,0,0,.12), rgba(0,0,0,.05))",
        backgroundSize: "200% 100%",
        animation: "ui-shimmer 1.2s ease-in-out infinite",
        ...style,
      }}
    />
  );
}
