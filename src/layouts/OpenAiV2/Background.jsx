import React from "react";

export default function Background({ variant = "gradient", children }) {
  const gradients = {
    gradient: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
    light: "#f8fafc",
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        background: gradients[variant] ?? gradients.gradient,
        padding: "2rem 0",
      }}
    >
      {children}
    </div>
  );
}
