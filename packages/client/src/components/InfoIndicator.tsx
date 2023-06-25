import { useContext, useEffect, useState } from "react";

import { UserContextProps } from "@types";
import { winState } from "@helpers/board";
import { UserContext } from "context";

import 'scss/css/style.css';

const TurnIndicator = () => {
    const { board, currentPlayer } = useContext(UserContext) as UserContextProps;
    const color = currentPlayer === 'X' ? 'blue' : 'red';

    const [showWin, setShowWin] = useState<boolean>(false);

    useEffect(() => {
        console.log(board);
        console.log(winState(board));
        if(winState(board)) {
            setShowWin(true);
        }
    }, [board])

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