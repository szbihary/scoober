const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  let clientId = socket.id;
  console.log(`client connected: ${clientId}`);
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log("listening on port: ", port);
});
