import React from "react";

const variantColors = {
  info: "#0284c7",
  success: "#16a34a",
  warning: "#f59e0b",
  error: "#dc2626",
};

export function CldToast({ message, type = "info" }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        padding: "0.75rem 1rem",
        borderLeft: `4px solid ${variantColors[type] || variantColors.info}`,
        color: "#0f172a",
        minWidth: 250,
        boxShadow: "0 10px 20px rgba(15,23,42,0.15)",
      }}
    >
      <p style={{ margin: 0 }}>{message}</p>
    </div>
  );
}
