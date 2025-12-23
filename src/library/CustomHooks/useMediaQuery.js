import { useSyncExternalStore, useMemo } from "react";


// https://react.dev/reference/react/useMemo
export function useMediaQuery(query) {
  // 1. Define the "subscribe" function (how we listen to changes)
  const subscribe = useMemo(() => (callback) => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  }, [query]);

  // 2. Define the "getSnapshot" function (how we get the current value)
  const getSnapshot = () => window.matchMedia(query).matches;

  // 3. Return the store (The third argument is null because we don't need server snapshots)
  return useSyncExternalStore(subscribe, getSnapshot, null);
}