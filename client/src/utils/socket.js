import { io } from "socket.io-client";

export const initSocketClient = async () => {
  let url = process.env.REACT_APP_SOCKET_URL;
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  return io("http://localhost:5000", options);
};
