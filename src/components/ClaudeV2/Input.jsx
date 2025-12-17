import React from "react";

export default function Input({
  label,
  error,
  touched,
  helperText,
  ...props
}) {
  const hasError = Boolean(error && touched);
  return (
    <div style={{ marginBottom: 12 }}>
      {label && (
        <label style={{ display: "block", fontWeight: 600, marginBottom: 4 }}>
          {label}
        </label>
      )}
      <input
        style={{
          width: "100%",
          padding: "0.5rem",
          borderRadius: 6,
          border: `1px solid ${hasError ? "#dc2626" : "#cbd5f5"}`,
        }}
        {...props}
      />
      {hasError && (
        <p style={{ marginTop: 4, color: "#dc2626", fontSize: "0.85rem" }}>
          {error}
        </p>
      )}
      {!hasError && helperText && (
        <p style={{ marginTop: 4, color: "#475569", fontSize: "0.85rem" }}>
          {helperText}
        </p>
      )}
    </div>
  );
}
