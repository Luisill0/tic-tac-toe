import { useContext, useEffect, useState } from "react";

import { UserContextProps } from "@types";
import { UserContext } from "context";
import { winState } from "@helpers/board";

import 'scss/css/style.css';

type TileProps = {
    size: number;
    content: string;
    position: number;
    updateBoard: (tile: number) => void;
}

const Tile = ({size, content, position, updateBoard}: TileProps): JSX.Element => {
    const { board, currentPlayer } = useContext(UserContext) as UserContextProps;
    const [tileContent, setTileContent] = useState<string>(() => content);
    const [canClick, setCanClick] = useState<boolean>(() => !winState(board) && tileContent.length === 0);

    useEffect(() => {
        if(winState(board)) {
            setCanClick(false);
        }
    }, [board])

    const handleClick = () => {
        if(!canClick) return;
        setTileContent(currentPlayer);
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
            {tileContent}
        </div>
    )
}

export default Tile;