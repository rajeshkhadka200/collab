import { io } from "socket.io-client";

export const initSocketClient = async () => {
  // console.log(process.env.REACT_APP_BACKEND_URL_DEV);
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  return io("http://localhost:5000", options);
};
