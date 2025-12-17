import { createContext, useCallback, useMemo, useState } from "react";
import { baseStyles } from "../../styles/baseStyles";
import { GlobalAnimations } from "../../styles/GlobalAnimations";

export const ToastCtx = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const push = useCallback((toast) => {
    const id = crypto?.randomUUID?.() || String(Date.now() + Math.random());
    const t = { id, title: toast?.title, message: toast?.message, variant: toast?.variant || "info" };
    setToasts((prev) => [...prev, t]);
    const timeout = toast?.timeoutMs ?? 3000;
    setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== id)), timeout);
  }, []);

  const api = useMemo(() => ({ push }), [push]);

  return (
    <ToastCtx.Provider value={api}>
      {children}
      <div style={{ position: "fixed", right: 16, bottom: 16, display: "grid", gap: 10, zIndex: 80 }}>
        {toasts.map((t) => (
          <div
            key={t.id}
            style={{
              width: 320,
              background: "#fff",
              border: baseStyles.border,
              borderRadius: baseStyles.radius,
              boxShadow: baseStyles.shadow,
              padding: 12,
            }}
          >
            <div style={{ fontFamily: baseStyles.fontFamily, fontWeight: 800, fontSize: 14 }}>
              {t.title ?? "Notice"}
            </div>
            {t.message ? (
              <div style={{ marginTop: 4, fontFamily: baseStyles.fontFamily, fontSize: 13, color: baseStyles.muted }}>
                {t.message}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <GlobalAnimations />
    </ToastCtx.Provider>
  );
}
