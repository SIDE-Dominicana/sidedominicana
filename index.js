const http = require("http");
const app = require("./src/app");

// Creating the node server
const SERVER = http.createServer(app);

// Port Environment variable
const { PORT } = process.env.PORT || 3000;

// Firing up the server on selected port
SERVER.listen(PORT);

SERVER.on("listening", () => { 
  console.log("[Server Running]::LISTEN:%s", PORT);
})

// Callback function for checking connecting or error
SERVER.on("error", error => {
  throw new Error(`[Server Running]::ERROR:${error.message}`);
});