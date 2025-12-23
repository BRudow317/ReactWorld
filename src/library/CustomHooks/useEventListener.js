import { useEffect } from "react";

export function useEventListener(target, event, handler, options) {
  useEffect(() => {
    const el = typeof target === "function" ? target() : target;
    if (!el?.addEventListener) return;
    el.addEventListener(event, handler, options);
    return () => el.removeEventListener(event, handler, options);
  }, [target, event, handler, options]);
}
