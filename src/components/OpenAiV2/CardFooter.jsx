import React from "react";

export default function CardFooter({ children }) {
  return (
    <div
      style={{
        marginTop: 8,
        borderTop: "1px solid #e2e8f0",
        paddingTop: 12,
        color: "#475569",
        fontSize: "0.85rem",
      }}
    >
      {children}
    </div>
  );
}
