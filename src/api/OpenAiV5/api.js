import { createApiClient } from "./createApiClient";

// Simple global default client (configure in your app if desired)
export const api = createApiClient({ baseUrl: "" });
