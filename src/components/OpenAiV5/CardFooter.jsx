import React from "react";

export function CardFooter({ children, className, style }) {
  return (
    <div
      className={className}
      style={{
        padding: 16,
        borderTop: "1px solid rgba(0,0,0,.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
