import React from "react";

export default function Skeleton({ width = "100%", height = 20 }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 6,
        background: "#e2e8f0",
      }}
    />
  );
}
