import React, { useCallback, useMemo, useState } from "react";
import { ToastContextV2 } from "./context";

export function ToastProviderV2({ children }) {
  const [toasts, setToasts] = useState([]);

  const push = useCallback((toast) => {
    setToasts((prev) => [...prev, { id: Date.now(), timeout: 3000, ...toast }]);
  }, []);

  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      toasts,
      push,
      remove,
    }),
    [toasts, push, remove]
  );

  return <ToastContextV2.Provider value={value}>{children}</ToastContextV2.Provider>;
}
