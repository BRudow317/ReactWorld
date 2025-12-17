import React from "react";

export default function Select({ label, options = [], ...props }) {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && (
        <label style={{ display: "block", fontWeight: 600, marginBottom: 4 }}>{label}</label>
      )}
      <select
        style={{
          width: "100%",
          padding: "0.55rem",
          borderRadius: 8,
          border: "1px solid #cbd5f5",
        }}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
