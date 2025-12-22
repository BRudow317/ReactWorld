import React from "react";

export function CldSelect({
  label,
  options = [],
  error,
  touched,
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
      <select
        style={{
          width: "100%",
          padding: "0.5rem",
          borderRadius: 6,
          border: `1px solid ${hasError ? "#dc2626" : "#cbd5f5"}`,
        }}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {hasError && (
        <p style={{ marginTop: 4, color: "#dc2626", fontSize: "0.85rem" }}>
          {error}
        </p>
      )}
    </div>
  );
}
