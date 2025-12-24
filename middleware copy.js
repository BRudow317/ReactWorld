// JSON Server middleware: central place to stub API endpoints during local dev
//
// This file consumes the stub utility from `src/utils/stubResponses.js` and
// returns annotated JSON for known endpoints from `src/api/endpoints/endpoints.js`.
//
// How it works:
// - If `simulate_error=true` is present, we force a 500 for quick error testing.
// - We still demonstrate a 401 example for `/assets` POSTs.
// - For matched API endpoints, we return deterministic stubs with comments.

const { getStubResponse } = require('./src/utils/stubResponses');

module.exports = (req, res, next) => {
  // Quick toggle: Simulate a 500 Server Error for any request
  // Usage: /api/anything?simulate_error=true
  if (req.query && req.query.simulate_error === 'true') {
    return res.status(500).jsonp({ error: "Internal Server Error" });
  }

  // Example: Force a 401 Unauthorized for the /assets endpoint
  // Utility/Service: Static assets (upload attempt)
  // Response: 401 Unauthorized with message explaining restriction
  // Stubbed responses for first-party API endpoints
  // Source of truth for endpoints: src/api/endpoints/endpoints.js
  // Utilities/Services mapped:
  // - CustomerService: /api/customer, /api/customer/account, /api/customer/email, /api/customer/phone, /api/customer/address
  // - AuthService: /api/auth/login, /api/auth/logout, /api/auth/register, /api/auth/me
  // Response shapes are defined in `src/utils/stubResponses.js` with detailed comments.
  const stub = getStubResponse(req.method, req.path);
  if (stub) {
    const { status = 200, data = {}, headers } = stub;

    // Optional: Attach extra headers for realism (e.g., caching, auth hints)
    if (headers && typeof headers === 'object') {
      for (const [key, value] of Object.entries(headers)) {
        res.setHeader(key, value);
      }
    }

    // Return the deterministic stub for the matched endpoint/method
    // Example annotations for common routes:
    // - Utility: CustomerService
    //   Endpoint: /api/customer (GET) -> Returns a mock customer profile
    //   Endpoint: /api/customer (POST) -> Creates and returns a mock customer
    // - Utility: AuthService
    //   Endpoint: /api/auth/login (POST) -> Returns mock JWT and user
    //   Endpoint: /api/auth/me (GET) -> Returns current user profile
    return res.status(status).jsonp(data);
  }

  // Fall through: No stub matched. Continue to JSON Server's default behavior
  next();
};