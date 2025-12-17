import React from "react";

export function FooterContainer({ children, className, style }) {
  return (
    <footer
      className={className}
      style={{
        borderTop: "1px solid rgba(0,0,0,.06)",
        padding: "18px 0",
        color: "rgba(0,0,0,.62)",
        ...style,
      }}
    >
      {children}
    </footer>
  );
}
