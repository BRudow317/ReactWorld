import { useEffect, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { CardHeader } from "../OpenAiCards/CardHeader";
import { CardBody } from "../OpenAiCards/CardBody";
import { CardFooter } from "../OpenAiCards/CardFooter";
import { IconButton } from "../OpenAiPrimitives/IconButton";
import { baseStyles } from "../../styles/baseStyles";
import { GlobalAnimations } from "../../styles/GlobalAnimations";

export function Modal({ open, onClose, title, children, footer, maxWidth = 560 }) {
  const ref = useRef(null);
  useOnClickOutside(ref, () => onClose?.());

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.40)",
        display: "grid",
        placeItems: "center",
        zIndex: 60,
        padding: 16,
      }}
    >
      <div
        ref={ref}
        style={{
          width: "100%",
          maxWidth,
          background: "#fff",
          borderRadius: baseStyles.radius,
          boxShadow: "0 20px 80px rgba(0,0,0,.22)",
          overflow: "hidden",
        }}
      >
        {title ? <CardHeader title={title} right={<IconButton label="Close" onClick={onClose}>✕</IconButton>} /> : null}
        <CardBody>{children}</CardBody>
        {footer ? <CardFooter>{footer}</CardFooter> : null}
      </div>
      <GlobalAnimations />
    </div>
  );
}
