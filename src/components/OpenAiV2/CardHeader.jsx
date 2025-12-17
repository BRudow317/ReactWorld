import React from "react";

export default function CardHeader({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 12 }}>
      {title && <h3 style={{ margin: 0 }}>{title}</h3>}
      {subtitle && (
        <p style={{ margin: 0, color: "#475569", fontSize: "0.9rem" }}>{subtitle}</p>
      )}
    </div>
  );
}
