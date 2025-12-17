import { useMemo } from "react";
import { api } from "../../../bin/LegacyBuild/LegacyOpenAiApi";
import { useAsync } from "./useAsync";

export function useApiMutation(path, method = "post") {
  const executor = useMemo(
    () => (body, opts) => {
      const fn = api?.[method];
      if (typeof fn !== "function") {
        throw new Error(`API method ${method} is not available`);
      }
      return fn(path, body, opts);
    },
    [path, method]
  );

  return useAsync(executor);
}
