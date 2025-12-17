import React from "react";

export default function FormRow({ children, cols = 2, style }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: 12,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
