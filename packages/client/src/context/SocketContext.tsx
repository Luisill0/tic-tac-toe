import React, { PropsWithChildren, useContext, useState } from "react";
import { io } from 'socket.io-client';

import { SocketContextProps, UserContextProps } from "@types";
import { UserContext } from "context";
import { BoardType, GameMove } from "@tic-tac-toe/shared";
import { winState } from "@helpers/board";

export const SocketContext = React.createContext<SocketContextProps | null>(null);

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? window.location : 'http://localhost:8000';

export const SocketContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const { board, updateBoard, togglePlayer } = useContext(UserContext) as UserContextProps;
    const [ socket ] = useState(() => io(URL, {autoConnect: false}));

    const connect = () => {
        if(socket.connected) return;
        socket.connect();
    }

    const sayHello = () => {
        socket.emit('hello', 'test');
    }

    const emitMove = (move: GameMove) => {
        console.log('i want to emit a move', move);
        socket.emit('move-sent', move);
    }

    const moveMade = (move: GameMove) => {
        console.log('i client received a move ', move);
        let tile = move.position;
        let player = move.player;

        let newBoard = [...board] as BoardType;
        newBoard[tile] = player;

        console.log('i want to update the board', newBoard);
        
        let newP = winState(newBoard) ? player : undefined;

        console.log('newP: ',newP);
        togglePlayer(newP);
        updateBoard(newBoard);
    }

    socket.on('move-made', moveMade);

    const provider = {
        connect,
        sayHello,
        emitMove
    }

    return (
        <SocketContext.Provider value={provider}>
            {children}
        </SocketContext.Provider>
    )
}