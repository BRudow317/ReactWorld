import { useMemo } from "react";
import { useMediaQuery } from "./useMediaQuery";

export function useBreakpoint() {
  // Common breakpoints (you can change values to match your design system)
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isXl = useMediaQuery("(min-width: 1280px)");

  //chained ternary to determine current breakpoint name
  return useMemo(() => {
    const name = isXl ? "xl" : isLg ? "lg" : isMd ? "md" : isSm ? "sm" : "xs";
    return { name, isSm, isMd, isLg, isXl };
  }, [isSm, isMd, isLg, isXl]);
}
