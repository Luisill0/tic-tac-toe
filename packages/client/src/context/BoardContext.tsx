import React, { PropsWithChildren, useState } from "react";

import { BoardContextProps } from "@types";

import { getInitialBoardState } from "@helpers/board";

import { BoardType, Player } from "@tic-tac-toe/shared";

export const BoardContext = React.createContext<BoardContextProps | null>(null);

export const BoardContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
    const [myPlayer, setMyPlayer] = useState<Player>('X');
    const [board, setBoard] = useState<BoardType>(() => getInitialBoardState());
    const [myTurn, setMyTurn] = useState<boolean>(false);

    const togglePlayer = (newPlayer?: Player | undefined) => {
        if(newPlayer) setCurrentPlayer(newPlayer)
        else setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }

    const updateMyPlayer = (myPlayer: Player) => setMyPlayer(myPlayer);

    const updateBoard = (newBoard: BoardType) => setBoard(newBoard);

    const updateMyTurn = (myTurn: boolean) => setMyTurn(myTurn);

    const resetBoard = () => {
        setBoard(() => getInitialBoardState());
        setMyTurn(false);
        setCurrentPlayer('X');
    }
    
    const provider = {
        board,
        updateBoard,
        currentPlayer,
        togglePlayer,
        myPlayer,
        updateMyPlayer,
        myTurn,
        updateMyTurn,
        resetBoard
    }

    return (
        <BoardContext.Provider value={provider}>
            {children}
        </BoardContext.Provider>
    )
}