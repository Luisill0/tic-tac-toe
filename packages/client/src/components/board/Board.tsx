import { useContext } from 'react';

import { UserContextProps } from '@types';
import { UserContext } from 'context';
import { BoardType } from '@tic-tac-toe/shared';

import Tile from './Tile';

import 'scss/css/style.css';

type BoardProps = {
    board: BoardType;
    onBoardChange: (tile: number) => void;
    online?: boolean
    color?: string;
}

const Board = ({board, onBoardChange, color, online}: BoardProps): JSX.Element => {
    const { windowSize } = useContext(UserContext) as UserContextProps;

    const minDimension = Math.min(windowSize.height, windowSize.width);
    const boardWidth = Math.round(minDimension * 0.7);
    const tileSize = Math.round(boardWidth / 3);

    return (
        <div
            className='mx-auto'
            style={{
                borderColor: color ?? 'black',
                display: 'grid',
                gridTemplateColumns: '33% 33% 33%',
                gridTemplateRows: '33% 33% 33%',
                width: `${boardWidth}px`
            }}
        >
            {
                board.map((_, index) => (
                    <Tile
                        board={board}
                        key={index}
                        size={tileSize}
                        position={index}
                        online={online}
                        updateBoard={onBoardChange}
                    />
                ))
            }
        </div>
    )
}

export default Board