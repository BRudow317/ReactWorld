import React from "react";

const variantStyles = {
  primary: { background: "#14b8a6", color: "#fff" },
  secondary: { background: "#0f172a", color: "#fff" },
  danger: { background: "#dc2626", color: "#fff" },
  ghost: { background: "transparent", border: "1px solid #0f172a", color: "#0f172a" },
};

const sizeStyles = {
  sm: { padding: "0.25rem 0.85rem", fontSize: "0.85rem" },
  md: { padding: "0.45rem 1rem", fontSize: "1rem" },
  lg: { padding: "0.65rem 1.5rem", fontSize: "1.1rem" },
};

export default function Button({
  variant = "primary",
  size = "md",
  loading,
  children,
  style,
  ...props
}) {
  return (
    <button
      style={{
        borderRadius: 8,
        border: variantStyles[variant]?.border ?? "none",
        fontWeight: 600,
        cursor: loading || props.disabled ? "not-allowed" : "pointer",
        opacity: loading || props.disabled ? 0.6 : 1,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? "Loading…" : children}
    </button>
  );
}
