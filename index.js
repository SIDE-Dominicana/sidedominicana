const http = require("http");
const app = require("./src/app");
const config = require("./src/config/app.config");

// Creating the node server
const SERVER = http.createServer(app);

// Firing up the server on selected port
SERVER.listen(config.PORT);

SERVER.on("listening", () => { 
  console.log("[Server Running]::LISTEN:%s", config.PORT);
})

// Callback function for checking connecting or error
SERVER.on("error", error => {
  throw new Error(`[Server Running]::ERROR:${error.message}`);
});