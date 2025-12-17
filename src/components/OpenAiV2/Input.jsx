import React from "react";

export default function Input({ label, helperText, error, touched, ...props }) {
  const hasError = Boolean(error && touched);
  return (
    <div style={{ marginBottom: 12 }}>
      {label && (
        <label style={{ display: "block", fontWeight: 600, marginBottom: 4 }}>{label}</label>
      )}
      <input
        style={{
          width: "100%",
          padding: "0.55rem",
          borderRadius: 8,
          border: `1px solid ${hasError ? "#dc2626" : "#cbd5f5"}`,
        }}
        {...props}
      />
      {hasError && (
        <p style={{ color: "#dc2626", fontSize: "0.85rem", margin: "0.25rem 0 0" }}>{error}</p>
      )}
      {!hasError && helperText && (
        <p style={{ color: "#475569", fontSize: "0.85rem", margin: "0.25rem 0 0" }}>{helperText}</p>
      )}
    </div>
  );
}
