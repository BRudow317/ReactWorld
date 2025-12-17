import React from "react";

export default function IconButton({ icon, label, ...props }) {
  return (
    <button
      style={{
        border: "1px solid #cbd5f5",
        borderRadius: 8,
        padding: "0.35rem 0.75rem",
        background: "#fff",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontWeight: 600,
      }}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
}
