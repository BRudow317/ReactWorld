import { useMemo } from "react";
import { useMediaQuery } from "./useMediaQuery";

const breakpoints = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
};

export function useBreakpoint() {
  const isSm = useMediaQuery(breakpoints.sm);
  const isMd = useMediaQuery(breakpoints.md);
  const isLg = useMediaQuery(breakpoints.lg);
  const isXl = useMediaQuery(breakpoints.xl);

  const name = useMemo(() => {
    if (isXl) return "xl";
    if (isLg) return "lg";
    if (isMd) return "md";
    if (isSm) return "sm";
    return "xs";
  }, [isSm, isMd, isLg, isXl]);

  return {
    name,
    isSm,
    isMd,
    isLg,
    isXl,
  };
}
