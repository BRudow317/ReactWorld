import React from "react";

export default function Card({ title, children, hoverable }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 16,
        boxShadow: hoverable
          ? "0 10px 30px rgba(15,23,42,0.2)"
          : "0 4px 12px rgba(15,23,42,0.12)",
        color: "#0f172a",
      }}
    >
      {title && (
        <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{title}</div>
      )}
      {children}
    </div>
  );
}
