import * as express from 'express';
import {getWord, getHint, checkCharacter} from './hangman.service';

const app: express.Application = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 3001;

type User = {
    id: string,
    originalWord?: string,
    word?: string,
    misses?: string[],
    characterMap?: any,
};

let users: User[] = [];

const updateUser = (user: User) => {
    users = users.map((userObj) => {
        if (userObj.id === user.id) {
            return user;
        }

        return userObj;
    })
};

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on("connection", function (socket: any) {
    console.log(`user (id: ${socket.id} connected`);

    users = users.includes(socket.id) ? users : [...users, {id: socket.id}] as User[];

    socket.on("get-word", async function (message: 'easy' | 'medium' | 'hard' | 'superHard') {
        const user: User = { ...(await getWord(message)), id: socket.id };

        updateUser(user);

        socket.emit('word', user.word);
    });

    socket.on("hint", function (message: 'hint') {
        let user = users.find((user) => user.id === socket.id);

        const hint = getHint(user.characterMap);
        const { characterMap, word, wordComplete } = checkCharacter(hint, user.characterMap, user.word, user.originalWord);

        user = { ...user, characterMap, word };

        updateUser(user);

        if (wordComplete) {
            socket.emit('word-complete', word);
        }

        socket.emit('hint', hint);
        socket.emit('word', word);
    });

    socket.on("check-word", function (message: string) {
        let user = users.find((user) => user.id === socket.id);

        const { characterMap, word, wordComplete, misses, correct } = checkCharacter(message, user.characterMap,
            user.word, user.originalWord, user.misses);

        user = {...user, characterMap, word, misses };

        updateUser(user);

        if (wordComplete) {
            socket.emit('word-complete', word);
        }

        socket.emit('word', word);
        socket.emit('check-word', { correct, character: message });
    });

    socket.on("disconnect", function () {
        users = users.filter((user) => user.id !== socket.id);
        console.log(`user (id: ${socket.id} disconnected`);
    });
});

const server = http.listen(PORT, function () {
    console.log(`listening on *:${PORT}`);
});
