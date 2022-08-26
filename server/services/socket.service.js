export const join = (socket, getAllClients, usersinSocket, io) => {
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
};

export const codeChange = (socket) => {
  socket.on("code-change", ({ room_id, code }) => {
    socket.in(room_id).emit("code-change", { code });
  });
};

export const syncCode = (socket, io) => {
  socket.on("sync-code", ({ socketId, code }) => {
    io.to(socketId).emit("code-change", { code });
  });
};

export const disconnecting = (socket, usersinSocket) => {
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
};
