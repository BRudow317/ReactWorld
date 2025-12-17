import React from "react";
import { baseStyles } from "../../styles/OpenAiV5/baseStyles";

export function ErrorText({ children, className, style }) {
  if (!children) return null;
  return (
    <div
      role="alert"
      className={className}
      style={{
        marginTop: 6,
        fontFamily: baseStyles.fontFamily,
        fontSize: 12,
        color: "rgba(239,68,68,1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
