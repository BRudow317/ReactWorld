module.exports = (req, res, next) => {
  // Example: Force a 401 Unauthorized for the /assets endpoint
  if (req.method === 'POST' && req.path === '/assets') {
    return res.status(401).jsonp({
      error: "Unauthorized",
      message: "You do not have permission to add assets."
    });
  }

  // Example: Simulate a 500 Server Error
  if (req.query.simulate_error === 'true') {
    return res.status(500).jsonp({ error: "Internal Server Error" });
  }

  next(); // Continue to JSON Server's default behavior
};