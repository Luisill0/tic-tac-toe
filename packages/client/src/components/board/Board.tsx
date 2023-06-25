import { useContext } from 'react';

import { UserContextProps } from '@types';
import { UserContext } from 'context';
import { winState } from '@helpers/board';
import { BoardType } from '@tic-tac-toe/shared';

import Tile from './Tile';

import 'scss/css/style.css';

type BoardProps = {
    color?: string;
}

const Board = ({color}: BoardProps): JSX.Element => {
    const { board, updateBoard, currentPlayer, togglePlayer, windowSize } = useContext(UserContext) as UserContextProps;
    
    const minDimension = Math.min(windowSize.height, windowSize.width);
    const boardWidth = Math.round(minDimension * 0.7);
    const tileSize = Math.round(boardWidth / 3);

    const onBoardChange = (tile: number) => {
        let newBoard = [...board] as BoardType;
        newBoard[tile] = currentPlayer;
        updateBoard(newBoard);

        if(!winState(newBoard)) {
            togglePlayer();
        }
    }

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
                board.map((tile, index) => (
                    <Tile
                        key={index}
                        size={tileSize}
                        content={tile}
                        position={index}
                        updateBoard={onBoardChange}
                    />
                ))
            }
        </div>
    )
}

export default Board