import cors from 'cors';
import express from "express";
import http from 'http';
import { Server } from 'socket.io';

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
})