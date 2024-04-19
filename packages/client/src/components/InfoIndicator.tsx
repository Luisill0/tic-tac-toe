import { useContext, useEffect, useState } from "react";

import { BoardContextProps } from "@types";
import { BoardContext } from "context";
import { calcWinState, WinState } from "@helpers/board";

import 'scss/css/style.css';

const TurnIndicator = () => {
    const { board, currentPlayer } = useContext(BoardContext) as BoardContextProps;
    const color = currentPlayer === 'X' ? 'blue' : 'red';
    const [gameState, setGameState] = useState<WinState>(WinState.CONTINUE);

    useEffect(() => {
        setGameState(calcWinState(board));
    }, [board, currentPlayer])

    return (
        <span
            className='fs-1 text-center'
        >
            {gameState === WinState.DRAW ? "Draw!" : "Player"}
            &nbsp;
            <span
                className='fw-bold'
                style={{
                    color: color
                }}
            >
                {gameState !== WinState.DRAW ? currentPlayer : null}
            </span>
            &nbsp;
            {
                gameState !== WinState.DRAW ?
                    gameState === WinState.WIN
                        ? 'wins!'
                        : 'turn'
                : null
            }
        </span>
    )
}

export default TurnIndicator;