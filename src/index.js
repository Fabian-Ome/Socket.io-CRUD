import express from 'express';
import { Server as webSocketServer } from 'socket.io';
import http from "http";
import { v4 as uuid } from "uuid";

const notes = [];

const app = express();
const server = http.createServer(app);
const io = new webSocketServer(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('new connection: ', socket.id);

    socket.on('client:newnote', newNote => {
        const note = { ...newNote, id: uuid() };
        notes.push(note)
        socket.emit('server:newnote', note)
    })
})

server.listen(3000)
console.log('server on port', 3000);