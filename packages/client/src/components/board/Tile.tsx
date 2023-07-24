import { useContext, useEffect, useState } from "react";

import { BoardType } from "@tic-tac-toe/shared";
import { winState } from "@helpers/board";

import { BoardContextProps } from "@types";
import { BoardContext } from "context";

import 'scss/css/style.css';

type TileProps = {
    board: BoardType;
    size: number;
    position: number;
    updateBoard: (tile: number) => void;
    online?: boolean;
}

const Tile = ({board, size, position, updateBoard, online}: TileProps): JSX.Element => {
    const { myTurn } = useContext(BoardContext) as BoardContextProps; 
    const [canClick, setCanClick] = useState<boolean>(() => !winState(board) && board[position].length===0);

    useEffect(() => {
        if(online){
            setCanClick((myTurn) && (!winState(board)) && (board[position].length === 0));
        }else {
            setCanClick((!winState(board)) && (board[position].length === 0));
        }
    }, [board, myTurn])

    const handleClick = () => {
        if(!canClick) return;
        updateBoard(position);
        setCanClick(false);
    }

    return (
        <div
            className='
                p-0
                fw-bold fs-1
                border border-dark border-2
                user-select-none
                d-flex justify-content-center align-items-center
            '
            onClick={handleClick}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                cursor: `${canClick ? 'pointer': 'initial'}`
            }}
        >
            {board[position]}
        </div>
    )
}

export default Tile;