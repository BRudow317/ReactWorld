import { useContext } from "react";
import { ToastContext } from "./ToastProvider";

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) return { push: () => {} };
  return ctx;
}
