import { useState, useCallback, useEffect, useRef } from "react";

export function useApiQuery(
  key,
  fetcher, // () => Promise<any>
  { enabled = true, keepPreviousData = true } = {}
) {
  const cacheRef = useRef(new Map());
  const [state, setState] = useState(() => ({
    status: enabled ? "pending" : "idle",
    data: null,
    error: null,
  }));

  const run = useCallback(async () => {
    if (!enabled) return null;
    const cacheKey = JSON.stringify(key);
    const cached = cacheRef.current.get(cacheKey);
    if (cached && keepPreviousData) {
      setState({ status: "pending", data: cached, error: null });
    } else {
      setState((s) => ({ ...s, status: "pending", error: null }));
    }

    try {
      const data = await fetcher();
      cacheRef.current.set(cacheKey, data);
      setState({ status: "success", data, error: null });
      return data;
    } catch (error) {
      setState((s) => ({ status: "error", data: s.data, error }));
      throw error;
    }
  }, [enabled, fetcher, keepPreviousData, key]);

  useEffect(() => {
    if (!enabled) return;
    void run();
  }, [enabled, run]);

  return { ...state, refetch: run };
}
