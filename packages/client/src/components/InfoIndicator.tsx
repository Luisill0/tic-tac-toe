import { useContext, useEffect, useState } from "react";

import { BoardContextProps } from "@types";
import { BoardContext } from "context";
import { winState } from "@helpers/board";

import 'scss/css/style.css';

const TurnIndicator = () => {
    const { board, currentPlayer } = useContext(BoardContext) as BoardContextProps;
    const color = currentPlayer === 'X' ? 'blue' : 'red';
    const [showWin, setShowWin] = useState<boolean>(false);

    useEffect(() => {
        if(winState(board)) {
            setShowWin(true);
        }
    }, [board, currentPlayer])

    return (
        <span
            className='fs-1 text-center'
        >
            Player
            &nbsp;
            <span
                className='fw-bold'
                style={{
                    color: color
                }}
            >
                {currentPlayer}
            </span>
            &nbsp;
            {showWin ? 'wins!' : 'turn'}
        </span>
    )
}

export default TurnIndicator;