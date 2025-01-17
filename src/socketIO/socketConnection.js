import { io } from "socket.io-client";
import { store } from "@/redux/store";

export const connectWithSocketServer = () => {
  const socket = io("http://localhost:1357", {
    withCredentials: true,
  });

  socket.on("connect", () => {
    console.log(socket.id);
  });
};
