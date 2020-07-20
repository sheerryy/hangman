import socketIOClient from "socket.io-client";

const SOCKET_ENDPOINT = "http://localhost:3001";

const socket = socketIOClient(SOCKET_ENDPOINT);

export default socket;
