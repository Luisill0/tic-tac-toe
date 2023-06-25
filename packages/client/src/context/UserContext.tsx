import React, { PropsWithChildren, useEffect, useState } from "react";

import { UserContextProps, WindowDimensions } from "@types";

import { getInitialBoardState } from "@helpers/board";
import { getInitialWindowSize } from "@helpers/window";

import { BoardType, Player } from "@tic-tac-toe/shared";

export const UserContext = React.createContext<UserContextProps | null>(null);

export const UserContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
    const [board, setBoard] = useState<BoardType>(() => getInitialBoardState());
    const [windowSize, setWindowSize] = useState<WindowDimensions>(() => getInitialWindowSize());

    const togglePlayer = () => {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }

    const updateBoard = (newBoard: BoardType) => {
        setBoard(newBoard);
    }

    useEffect(() => {
        window.onresize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
    });
    
    const provider = {
        windowSize,
        board,
        updateBoard,
        currentPlayer,
        togglePlayer,
    }

    return (
        <UserContext.Provider value={provider}>
            {children}
        </UserContext.Provider>
    )
}