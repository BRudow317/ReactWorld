import React, { useEffect } from "react";

export default function Drawer({ open, children, onClose, width = 320 }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15,23,42,0.35)",
        zIndex: 1100,
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width,
          background: "#fff",
          boxShadow: "-16px 0 30px rgba(15,23,42,0.25)",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {children}
      </div>
    </div>
  );
}
