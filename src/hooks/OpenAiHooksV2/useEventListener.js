import { useEffect } from "react";

export function useEventListener(target, eventName, listener, options) {
  useEffect(() => {
    if (!target || !target.addEventListener) return undefined;
    target.addEventListener(eventName, listener, options);
    return () => target.removeEventListener(eventName, listener, options);
  }, [target, eventName, listener, options]);
}
