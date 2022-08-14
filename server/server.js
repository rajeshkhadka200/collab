const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

// triger when the client gets connected to server
io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
  socket.on("join", (data) => {
    console.log("the data are", data);
  });
});

// listen to port
const PORT = process.env.port || 5000;
server.listen(PORT, () => {
  console.log("listening to port 5000");
});
