// Barrel exports for API library
// Central location for all API clients, utilities, and services

// Core API client and utilities
export { apiClient } from "./apiClient";
export { cacheGet, cacheSet, cacheDelete, cacheClear } from "./cache";
export {
  http,
  normalizeAxiosError,
  buildCacheKey,
} from "./http";

// Fetch client factory
export { createApiClient } from "./FetchClient/createFetchClient";

// API Services
export { authAPI } from "./Services/auth.api";
export { quoteAPI } from "./Services/quote.api";
