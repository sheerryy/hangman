import socketIOClient from "socket.io-client";

const SOCKET_ENDPOINT = "https://hangman-server-1.herokuapp.com/";

const socket = socketIOClient(SOCKET_ENDPOINT);

export default socket;
