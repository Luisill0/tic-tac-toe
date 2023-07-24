import cors from 'cors';
import express from "express";
import http from 'http';
import { Server } from 'socket.io';

import { MoveEmit } from '@tic-tac-toe/shared';

const app = express();

export const appServer = http.createServer(app);

const io = new Server(appServer, {
    cors: {
        origin: '*'
    }
});

app.use(cors());

app.get('/', (_,res) => {
    res.send('hello');
});

io.on('connection', (socket) => {
    console.log(`user connected ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`user disconnected ${socket.id}`);
    });

    socket.on('create-room', (roomId: string) => {
        const clients = io.sockets.adapter.rooms.get(roomId);

        console.log('create - size: ', clients?.size)

        if(clients && clients.size > 1) {
            console.log('should return error');
            return socket.emit('create-room-error', 'cannot create room: room already exists');
        }
        return socket.join(roomId);
    })

    socket.on('join-room', (roomId: string) => {
        console.log('someone wants to join: ', roomId);
        const clients = io.sockets.adapter.rooms.get(roomId);
        
        console.log('join - size: ', clients?.size);

        if(!clients) {
            console.log('should error');
            return socket.emit('room-error', 'room does not exist');
        }

        socket.join(roomId);
        
        return io.to(roomId).emit('players-ready', roomId);
    })

    socket.on('move-sent', (move: MoveEmit) => {
        socket.to(move.room).emit('move-made', move.move);
    })
});