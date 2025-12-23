import { ApiError } from "../../utils/OpenAiV5";

export function createApiClient({
  baseUrl = "",
  defaultHeaders = {},
  getAuthToken, // () => string | null
  onResponseError, // (error: ApiError) => void
} = {}) {
  async function request(path, options = {}) {
    const url = path.startsWith("http") ? path : `${baseUrl}${path}`;
    const method = (options.method || "GET").toUpperCase();

    const headers = {
      Accept: "application/json",
      ...defaultHeaders,
      ...(options.headers || {}),
    };

    const token = getAuthToken?.();
    if (token && !headers.Authorization) headers.Authorization = `Bearer ${token}`;

    const body =
      options.body != null && typeof options.body === "object" && !(options.body instanceof FormData)
        ? JSON.stringify(options.body)
        : options.body;

    if (body && typeof body === "string" && !headers["Content-Type"]) {
      headers["Content-Type"] = "application/json";
    }

    const res = await fetch(url, {
      ...options,
      method,
      headers,
      body,
    });

    const contentType = res.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");
    const data = isJson ? await res.json().catch(() => null) : await res.text().catch(() => null);

    if (!res.ok) {
      const message =
        (isJson && (data?.message || data?.error)) ||
        `Request failed (${res.status})`;
      const err = new ApiError(message, { status: res.status, data, url, method });
      onResponseError?.(err);
      throw err;
    }

    return data;
  }

  return {
    request,
    get: (path, opts) => request(path, { ...opts, method: "GET" }),
    post: (path, body, opts) => request(path, { ...opts, method: "POST", body }),
    put: (path, body, opts) => request(path, { ...opts, method: "PUT", body }),
    patch: (path, body, opts) => request(path, { ...opts, method: "PATCH", body }),
    del: (path, opts) => request(path, { ...opts, method: "DELETE" }),
  };
}
