import { useCallback, useState } from "react";

export function useAsync(asyncFunction) {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const run = useCallback(
    async (...args) => {
      setStatus("pending");
      setError(null);
      try {
        const result = await asyncFunction(...args);
        setData(result);
        setStatus("success");
        return result;
      } catch (err) {
        setError(err);
        setStatus("error");
        throw err;
      }
    },
    [asyncFunction]
  );

  return {
    status,
    data,
    error,
    run,
  };
}
