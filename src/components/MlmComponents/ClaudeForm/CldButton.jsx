import React from "react";

const variantStyles = {
  primary: { background: "#2563eb", color: "#fff" },
  secondary: { background: "#475569", color: "#fff" },
  danger: { background: "#dc2626", color: "#fff" },
  outline: { border: "1px solid #475569", background: "#fff", color: "#111" },
  success: { background: "#16a34a", color: "#fff" },
};

const sizeStyles = {
  sm: { padding: "0.25rem 0.75rem", fontSize: "0.85rem" },
  md: { padding: "0.5rem 1rem", fontSize: "1rem" },
  lg: { padding: "0.75rem 1.25rem", fontSize: "1.1rem" },
};

export function CldButton({
  children,
  variant = "primary",
  size = "md",
  fullWidth,
  loading,
  style,
  ...props
}) {
  const variantStyle = variantStyles[variant] || variantStyles.primary;
  const sizeStyle = sizeStyles[size] || sizeStyles.md;

  return (
    <button
      style={{
        borderRadius: 6,
        border: "none",
        cursor: loading || props.disabled ? "not-allowed" : "pointer",
        fontWeight: 600,
        opacity: loading || props.disabled ? 0.7 : 1,
        width: fullWidth ? "100%" : "auto",
        ...variantStyle,
        ...sizeStyle,
        ...style,
      }}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? "Loading…" : children}
    </button>
  );
}
