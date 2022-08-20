import {} from "dotenv/config";
import express from "express";
const app = express();
import http from "http";
import { Server } from "socket.io";
const server = http.createServer(app);
const io = new Server(server);

// import routes
import codeRoute from "./router/code.route.js";
import userRoute from "./router/user.route.js";

// initalize the middlewares
app.use(express.json({ extented: false }));
// inatialize route
app.use("/collab/api", codeRoute);
app.use("/collab/api", userRoute);

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
