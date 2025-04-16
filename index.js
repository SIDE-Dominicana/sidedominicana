const fs = require("fs");
const http = require("http");
const https = require("https");
const app = require("./src/app");
const config = require("./src/config/app.config");

const path = require("path");
const basePath = path.resolve(__dirname, "certs");

const keyPath = path.join(basePath, "private.key");
const certPath = path.join(basePath, "sidedominicana_com.crt");
const caPath = path.join(basePath, "sidedominicana_com.ca-bundle");

console.log("Checking SSL certificates...");
console.log("Key exists:", fs.existsSync(keyPath));
console.log("Cert exists:", fs.existsSync(certPath));
console.log("CA exists:", fs.existsSync(caPath));

if (!fs.existsSync(keyPath) || !fs.existsSync(certPath) || !fs.existsSync(caPath)) {
  console.error("One or more SSL certificate files are missing.");
  process.exit(1); // Stop the server
}

const SSL_OPTIONS = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath),
  ca: fs.readFileSync(caPath),
};

const HTTPS_SERVER = https.createServer(SSL_OPTIONS, app);
HTTPS_SERVER.listen(config.PORT || 443, "0.0.0.0", () => {
  console.log(`[HTTPS] Server running on port ${config.PORT || 443}`);
});

HTTPS_SERVER.on("error", (error) => {
  console.error(`[HTTPS Error]: ${error.message}`);
});

const HTTP_SERVER = http.createServer((req, res) => {
  const host = req.headers.host?.replace(/:\d+$/, ""); // Strip port from host
  res.writeHead(301, { Location: `https://${host}${req.url}` });
  res.end();
});

HTTP_SERVER.listen(80, "0.0.0.0", () => {
  console.log("[HTTP] Redirect server running on port 80 (→ HTTPS)");
});

HTTP_SERVER.on("error", (error) => {
  console.error(`[HTTP Error]: ${error.message}`);
});
