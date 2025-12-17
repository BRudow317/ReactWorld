import React from "react";

export default function TextArea({ label, helperText, ...props }) {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && (
        <label style={{ display: "block", fontWeight: 600, marginBottom: 4 }}>{label}</label>
      )}
      <textarea
        rows={props.rows || 4}
        style={{
          width: "100%",
          padding: "0.55rem",
          borderRadius: 8,
          border: "1px solid #cbd5f5",
        }}
        {...props}
      />
      {helperText && (
        <p style={{ color: "#475569", fontSize: "0.85rem", margin: "0.25rem 0 0" }}>
          {helperText}
        </p>
      )}
    </div>
  );
}
