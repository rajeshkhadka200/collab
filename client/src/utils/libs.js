// join the socket
export function join(socketRef, room_id, username) {
  socketRef.current.emit("join", {
    room_id,
    username,
  });
}

// listening for joined
export function joined(socketRef, username, setusers, actualCodeRef, toast) {
  socketRef.current.on("joined", ({ username: name, socketId, allClients }) => {
    if (name !== username) {
      toast.success(`${name} Joined the room !!`);
    }
    setusers(allClients);
    socketRef.current.emit("sync-code", {
      code: actualCodeRef.current,
      socketId,
    });
  });
}

// lestining for disconnection
export function disconnecting(socketRef, setusers, toast) {
  socketRef.current.on("disconnected", ({ username, socketId }) => {
    toast.info(`${username} got disconnected !`);
    setusers((prev) => {
      return prev.filter((data) => {
        return data.socketId !== socketId;
      });
    });
  });
}
