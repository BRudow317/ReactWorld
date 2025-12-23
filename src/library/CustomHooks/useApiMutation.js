import { useState, useCallback } from "react";

export function useApiMutation(
  mutateFn // (payload) => Promise<any>
) {
  const [state, setState] = useState({ status: "idle", data: null, error: null });

  const mutate = useCallback(
    async (payload) => {
      setState({ status: "pending", data: null, error: null });
      try {
        const data = await mutateFn(payload);
        setState({ status: "success", data, error: null });
        return data;
      } catch (error) {
        setState({ status: "error", data: null, error });
        throw error;
      }
    },
    [mutateFn]
  );

  return { ...state, mutate };
}
