import { useContext } from "react";
import { ToastCtx } from "../../components/toast/ToastProvider";

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) return { push: () => {} };
  return ctx;
}
