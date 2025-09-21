const express = require("express");
const proxyRequest = require("../middleware/proxy");
const { services } = require("../services/healthChecker");

const router = express.Router();

router.use(async (req, res) => {
  await proxyRequest(req, res, "userService", services.userService);
});

module.exports = router;
