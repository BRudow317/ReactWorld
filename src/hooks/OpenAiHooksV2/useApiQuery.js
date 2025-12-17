import { useEffect, useMemo } from "react";
import { api } from "../../../bin/LegacyBuild/LegacyOpenAiApi";
import { useAsync } from "./useAsync";

export function useApiQuery(path, params) {
  const fetcher = useMemo(() => () => api.get(path, params), [path, params]);
  const { run, ...rest } = useAsync(fetcher);

  useEffect(() => {
    if (!path) return undefined;
    run();
  }, [run, path]);

  return {
    ...rest,
    run,
    refetch: run,
  };
}
