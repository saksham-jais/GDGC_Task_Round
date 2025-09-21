const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    dailyTasks: 12500,
    costSavings: 480000,
    globalUsers: "150K+",
    aiPredictionAccuracy: "98%",
  });
});

module.exports = router;
