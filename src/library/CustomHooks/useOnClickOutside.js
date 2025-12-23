import { useRef, useEffect } from "react";

export function useOnClickOutside(ref, onOutside) {
  const onOutsideRef = useRef(onOutside);
  useEffect(() => {
    onOutsideRef.current = onOutside;
  }, [onOutside]);

  useEffect(() => {
    const onDown = (e) => {
      const node = ref?.current;
      if (!node) return;
      if (node.contains(e.target)) return;
      onOutsideRef.current?.(e);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [ref]);
}
