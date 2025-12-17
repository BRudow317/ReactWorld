import React from "react";

export default function Card({ children, style }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 16,
        boxShadow: "0 10px 30px rgba(15,23,42,0.1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
