import { useState, useCallback } from "react";

export function useAsync(fn, deps = []) {
  const [state, setState] = useState({
    status: "idle", // idle | pending | success | error
    data: null,
    error: null,
  });

  const run = useCallback(
    async (...args) => {
      setState({ status: "pending", data: null, error: null });
      try {
        const data = await fn(...args);
        setState({ status: "success", data, error: null });
        return data;
      } catch (error) {
        setState({ status: "error", data: null, error });
        throw error;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );

  return { ...state, run };
}
