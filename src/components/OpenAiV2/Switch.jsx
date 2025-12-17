import React from "react";

export default function Switch({ label, value, onChange }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        style={{
          width: 42,
          height: 24,
          borderRadius: 999,
          background: value ? "#10b981" : "#cbd5f5",
          position: "relative",
          cursor: "pointer",
          transition: "background 0.2s ease",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 2,
            left: value ? 20 : 2,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#fff",
            transition: "left 0.2s ease",
          }}
        />
      </div>
      <span>{label}</span>
    </label>
  );
}
