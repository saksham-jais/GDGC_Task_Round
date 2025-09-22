const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const statsRoutes = require("./routes/statsRoutes");
const authenticateToken = require("./middleware/auth");
const rateLimiter = require("./middleware/rateLimiter");
const bcrypt = require("bcrypt");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Public routes
app.use("/api/auth", authRoutes);

// Authentication middleware & rate limiter for protected routes
app.use(authenticateToken, rateLimiter);

// Protected routes proxying microservices
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/stats", statsRoutes);

// Health check for API Gateway
app.get("/health", (req, res) => res.json({ status: "API Gateway healthy" }));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
