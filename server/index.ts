import * as express from 'express';
import * as socketio from "socket.io";

const app: express.Application = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const PORT = 3001;

type User = {
    id: string,
    originalWord?: string,
    word?: string,
    misses?: string[],
    characterMap?: any,
};

let users: User[] = [];

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on("connection", function (socket: any) {
    console.log("a user connected");
    users = users.includes(socket.id) ? users : [...users, {id: socket.id}] as User[];

    socket.on("message", function (message: any) {
        socket.emit('message', message);
        console.log(`${message} from  ${socket.id}`);
    });

    socket.on('disconnect', function () {
        users = users.filter((user) => user.id !== socket.id)
        console.log(users);
    });
});

const server = http.listen(PORT, function () {
    console.log("listening on *:3001");
});
