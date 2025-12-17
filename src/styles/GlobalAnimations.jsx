import { useEffect, useRef } from "react";

export function GlobalAnimations() {
  // Inserts keyframes once
  const inserted = useRef(false);
  useEffect(() => {
    if (inserted.current) return;
    inserted.current = true;

    const style = document.createElement("style");
    style.setAttribute("data-ui-kit", "true");
    style.textContent = `
      @keyframes ui-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes ui-shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
