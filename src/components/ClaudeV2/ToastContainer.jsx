import React, { useEffect } from "react";
import Toast from "./Toast";

export default function ToastContainer({ toasts = [], removeToast }) {
  useEffect(() => {
    const timers = toasts.map((toast) => {
      const timeout = toast.timeout ?? 3000;
      const timer = setTimeout(() => removeToast(toast.id), timeout);
      return () => clearTimeout(timer);
    });
    return () => timers.forEach((cancel) => cancel());
  }, [toasts, removeToast]);

  if (!toasts.length) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        zIndex: 2000,
      }}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type} />
      ))}
    </div>
  );
}
