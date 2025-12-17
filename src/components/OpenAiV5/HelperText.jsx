import React from "react";
import { baseStyles } from "../../styles/OpenAiV5/baseStyles";

export function HelperText({ children, className, style }) {
  if (!children) return null;
  return (
    <div
      className={className}
      style={{
        marginTop: 6,
        fontFamily: baseStyles.fontFamily,
        fontSize: 12,
        color: baseStyles.muted,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
