import React, { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, children, size = "md" }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const width = size === "lg" ? 600 : size === "sm" ? 360 : 480;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,0.65)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width,
          background: "#fff",
          borderRadius: 12,
          padding: "1.5rem",
          boxShadow: "0 20px 50px rgba(15,23,42,0.3)",
        }}
      >
        {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
        {children}
      </div>
    </div>
  );
}
