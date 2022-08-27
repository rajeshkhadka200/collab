import {} from "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();
import http from "http";
import { Server } from "socket.io";
const server = http.createServer(app);
const io = new Server(server);

// import routes
import codeRoute from "./router/code.route.js";
import userRoute from "./router/user.route.js";
import {
  codeChange,
  disconnecting,
  join,
  syncCode,
} from "./services/socket.service.js";

// initalize the middlewares
app.use(cors());
app.use(express.json());

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
  join(socket, getAllClients, usersinSocket, io); // listen join event
  codeChange(socket); // event to sync the changed code
  syncCode(socket, io); // event to sync code
  disconnecting(socket, usersinSocket); // trigers when the users get disconnected
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
app.get("/", (req, res) => {
  res.send("Hello");
});
