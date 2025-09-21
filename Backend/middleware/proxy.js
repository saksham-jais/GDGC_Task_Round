const axios = require("axios");
const serviceStatus = require("../services/healthChecker").serviceStatus;

async function proxyRequest(req, res, serviceName, serviceEndpoints) {
  for (const url of serviceEndpoints) {
    if (!serviceStatus[`${serviceName}-${url}`]) {
      continue; // skip unhealthy service
    }
    try {
      const response = await axios({
        method: req.method,
        url: url + req.originalUrl,
        headers: { ...req.headers, host: undefined },
        data: req.body,
        timeout: 5000,
      });
      return res.status(response.status).json(response.data);
    } catch {
      continue;
    }
  }
  res.status(503).json({ error: "Service Unavailable" });
}

module.exports = proxyRequest;
