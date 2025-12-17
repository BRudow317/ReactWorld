import { createApiClient } from "./OpenAiApi/apiClient";

// Simple global default client (configure in your app if desired)
export const api = createApiClient({ baseUrl: "" });

export { createApiClient } from "./OpenAiApi/apiClient";
