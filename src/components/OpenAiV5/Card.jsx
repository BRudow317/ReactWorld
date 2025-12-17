import React from "react";
import { baseStyles } from "../../styles/OpenAiV5/baseStyles";

export function Card({ children, className, style }) {
  return (
    <div
      className={className}
      style={{
        background: baseStyles.bg,
        borderRadius: baseStyles.radius,
        border: baseStyles.border,
        boxShadow: baseStyles.shadow,
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
