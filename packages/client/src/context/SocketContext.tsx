import React, { PropsWithChildren, useContext, useState } from "react";
import { io } from 'socket.io-client';

import { BoardType, GameMove } from "@tic-tac-toe/shared";

import { calcWinState } from "@helpers/board";

import { BoardContextProps, SocketContextProps } from "@types";
import { BoardContext } from "context";

export const SocketContext = React.createContext<SocketContextProps | null>(null);

const URL = process.env.REACT_APP_SERVER_LOCATION;

if(!URL) throw new Error('could not find .env');

export const SocketContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const { board, updateBoard, togglePlayer, myPlayer, updateMyTurn } = useContext(BoardContext) as BoardContextProps;
    const [ socket ] = useState(() => io(URL, {autoConnect: false}));
    const [currentSocketRoom, setCurrentSocketRoom] = useState<string | null>('');

    const connect = () => {
        if(socket.connected) return;
        socket.connect();
    }

    const createRoom = (roomId: string) => {
        socket.emit('create-room', roomId);
    }

    const joinRoom = (roomId: string) => {
        socket.emit('join-room', roomId);
    }

    const sayHello = () => {
        socket.emit('hello', 'test');
    }

    const emitMove = (move: GameMove) => {
        socket.emit('move-sent', {move: move, room: currentSocketRoom});
    }

    const moveMade = (move: GameMove) => {
        let tile = move.position;
        let player = move.player;

        let newBoard = [...board] as BoardType;
        newBoard[tile] = player;
        
        let newP = calcWinState(newBoard) ? player : undefined;

        // Player will be toggled, so it will be my turn if the move made was different than me
        updateMyTurn(myPlayer !== player);

        togglePlayer(newP);
        updateBoard(newBoard);
    }

    const resetSocketRoom = () => setCurrentSocketRoom(null);    

    socket.on('move-made', moveMade);
    socket.on('players-ready', (room: string) => setCurrentSocketRoom(room));
    socket.on('create-room-error', () => window.location.replace('/'));

    const provider = {
        connect,
        createRoom,
        joinRoom,
        sayHello,
        emitMove,
        currentSocketRoom,
        resetSocketRoom
    }

    return (
        <SocketContext.Provider value={provider}>
            {children}
        </SocketContext.Provider>
    )
}