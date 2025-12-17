import React, { useContext, useEffect } from "react";
import { ToastContextV2 } from "./context";

export default function ToastContainerV2() {
  const context = useContext(ToastContextV2);
  useEffect(() => {
    if (!context) return undefined;
    const { toasts, remove } = context;
    const timers = toasts.map((toast) => {
      const timeout = toast.timeout ?? 3000;
      return setTimeout(() => remove(toast.id), timeout);
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [context]);

  if (!context) return null;
  const { toasts } = context;

  if (!toasts.length) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        zIndex: 1000,
        maxWidth: 320,
      }}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            background: "#fff",
            padding: 12,
            borderRadius: 10,
            boxShadow: "0 8px 20px rgba(15,23,42,0.25)",
            borderLeft: `4px solid ${
              toast.type === "success"
                ? "#16a34a"
                : toast.type === "error"
                ? "#dc2626"
                : toast.type === "warning"
                ? "#f59e0b"
                : "#0ea5e9"
            }`,
          }}
        >
          <div style={{ fontWeight: 600 }}>{toast.title ?? "Notification"}</div>
          <p style={{ margin: 0, fontSize: "0.85rem" }}>{toast.message}</p>
        </div>
      ))}
    </div>
  );
}
