const axios = require("axios");

const services = {
  userService: ["http://localhost:5001", "http://localhost:5002"],
  orderService: ["http://localhost:6001", "http://localhost:6002"],
};

const serviceStatus = {};

async function checkServiceHealth() {
  for (const [serviceName, endpoints] of Object.entries(services)) {
    for (const url of endpoints) {
      try {
        const response = await axios.get(url + "/health", { timeout: 2000 });
        serviceStatus[`${serviceName}-${url}`] = response.status === 200;
      } catch {
        serviceStatus[`${serviceName}-${url}`] = false;
      }
    }
  }
}

setInterval(checkServiceHealth, 30000); // Every 30 seconds
checkServiceHealth();

module.exports = { serviceStatus, services };
