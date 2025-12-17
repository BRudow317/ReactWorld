import React from "react";

export function FormRow({ children, cols = 2, className, style }) {
  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: 14,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
