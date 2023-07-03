import { useContext, useEffect, useState } from "react";

import { UserContextProps } from "@types";
import { UserContext } from "context";
import { winState } from "@helpers/board";

import 'scss/css/style.css';

type TileProps = {
    size: number;
    position: number;
    updateBoard: (tile: number) => void;
}

const Tile = ({size, position, updateBoard}: TileProps): JSX.Element => {
    const { board } = useContext(UserContext) as UserContextProps;
    const [canClick, setCanClick] = useState<boolean>(() => !winState(board) && board[position].length===0);

    useEffect(() => {
        if(winState(board)) {
            setCanClick(false);
        }
    }, [board])

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