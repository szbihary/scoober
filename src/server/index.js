const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

let players = new Set();

io.on("connection", (socket) => {
  // only two players allowed
  if (players.size < 2) {
    players.add(socket.id);
    console.log(`player connected: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`player disconnected: ${socket.id}`);
      if (players.has(socket.id)) {
        players.delete(socket.id);
      }
    });

    socket.on("startGame", () => {
      // send start signal to all players
      io.emit("startGame");
    });

    socket.on("nextBid", (bid) => {
      console.log(`incoming bid: ${bid}`);
      const nextRound = { value: bid, player: socket.id };
      // send next round signal to all players
      io.emit("nextRound", nextRound);
    });
  }
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log("listening on port: ", port);
});
