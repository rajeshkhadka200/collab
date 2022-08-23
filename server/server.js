import {} from "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();
import http from "http";
import { Server } from "socket.io";
const server = http.createServer(app);
const io = new Server(server);
import redisAdapter from "socket.io-redis";

// import routes
import codeRoute from "./router/code.route.js";
import userRoute from "./router/user.route.js";

// initalize the middlewares
app.use(cors());
app.use(express.json());

// ws err handlling

const usersinSocket = {};
const getAllClients = (room_id) => {
  return Array.from(io.sockets.adapter.rooms.get(room_id) || []).map(
    (socketId) => {
      return {
        socketId,
        username: usersinSocket[socketId],
      };
    }
  );
};
// triger when the client gets connected to server
io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
  socket.on("join", ({ username, room_id }) => {
    usersinSocket[socket.id] = username;
    socket.join(room_id);
    const allClients = getAllClients(room_id);
    allClients.forEach(({ socketId }) => {
      io.to(socketId).emit("joined", {
        allClients,
        username,
        socketId: socket.id,
      });
    });
  });
  socket.on("code-change", ({ room_id, code }) => {
    socket.in(room_id).emit("code-change", { code });
  });
  socket.on("sync-code", ({ socketId, code }) => {
    io.to(socketId).emit("code-change", { code });
  });

  // trigers when the users get disconnected
  socket.on("disconnecting", () => {
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
      socket.in(roomId).emit("disconnected", {
        socketId: socket.id,
        username: usersinSocket[socket.id],
      });
    });
    delete usersinSocket[socket.id];
    socket.leave();
  });
});

// listen to port
const PORT = process.env.port || 5000;
server.timeout = 0;
server.listen(PORT, () => {
  console.log("listening to port 5000");
});
// inatialize route
app.use("/api/code", codeRoute);
app.use("/api/user", userRoute);
