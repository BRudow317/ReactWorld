import React from "react";

const gradients = {
  gradient: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 100%)",
  dots: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px) 0 / 10px 10px #0f172a",
};

export default function Background({ variant = "gradient", children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: gradients[variant] || gradients.gradient,
        color: "#fff",
        padding: "2rem 0",
      }}
    >
      {children}
    </div>
  );
}
