import { useContext } from "react";
import { ToastContextV2 } from "../../components/toastV2/context";

export function useToast() {
  const context = useContext(ToastContextV2);
  if (!context) {
    throw new Error("useToast must be used within a ToastProviderV2");
  }
  return context;
}
