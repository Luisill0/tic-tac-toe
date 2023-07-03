import cors from 'cors';
import express from "express";
import http from 'http';
import { Server } from 'socket.io';

import { GameMove } from '@tic-tac-toe/shared';

const app = express();

export const appServer = http.createServer(app);

const io = new Server(appServer, {
    cors: {
        origin: '*'
    }
});

app.use(cors());

app.get('/', (req,res) => {
    res.send('hello');
});

io.on('connection', (socket) => {
    console.log(`user connected (${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`user disconnected ${socket.id}`);
    })

    socket.on('hello', (msg) => {
        console.log('hello received!', msg);
    })

    socket.on('move-sent', (move: GameMove) => {
        console.log('i got a move!', move);
        socket.broadcast.emit('move-made', move);
    })
})