const express = require("express");
const proxyRequest = require("../middleware/proxy");
const { services } = require("../services/healthChecker");

const router = express.Router();

router.use(async (req, res) => {
  await proxyRequest(req, res, "orderService", services.orderService);
});

module.exports = router;
