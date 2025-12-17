import React, { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        zIndex: 1200,
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 12,
          padding: "1.5rem",
          width: "min(90%, 480px)",
          boxShadow: "0 20px 50px rgba(15,23,42,0.25)",
        }}
      >
        {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
        {children}
      </div>
    </div>
  );
}
