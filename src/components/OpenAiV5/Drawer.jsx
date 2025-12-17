import React, { useRef } from "react";
import { useOnClickOutside } from "../../hooks/OpenAiV5/useOnClickOutside";
import { CardHeader } from "./CardHeader";
import { IconButton } from "./IconButton";
import { GlobalAnimations } from "../../styles/OpenAiV5/GlobalAnimations";

export function Drawer({ open, onClose, side = "right", title, children, width = 340 }) {
  const ref = useRef(null);
  useOnClickOutside(ref, () => onClose?.());

  if (!open) return null;

  const isLeft = side === "left";
  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.40)", zIndex: 60 }}
    >
      <div
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width,
          [isLeft ? "left" : "right"]: 0,
          background: "#fff",
          boxShadow: "0 20px 80px rgba(0,0,0,.22)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardHeader title={title} right={<IconButton label="Close" onClick={onClose}>✕</IconButton>} />
        <div style={{ padding: 16, overflow: "auto" }}>{children}</div>
      </div>
      <GlobalAnimations />
    </div>
  );
}
