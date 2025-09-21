const rateLimit = require("express-rate-limit");
const userRateLimiters = new Map();

function rateLimiter(req, res, next) {
  const userId = req.user.id;
  if (!userRateLimiters.has(userId)) {
    userRateLimiters.set(
      userId,
      rateLimit({
        windowMs: 60 * 1000, // 1 minute
        max: 10,
        message: "Too many requests, please try again later.",
      })
    );
  }
  userRateLimiters.get(userId)(req, res, next);
}

module.exports = rateLimiter;
