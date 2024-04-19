import { BoardType } from "@tic-tac-toe/shared";

export const getInitialBoardState = (): BoardType => (
    [
        '','','',
        '','','',
        '','',''
    ]
)

export enum WinState {
    CONTINUE=0,
    WIN=1,
    DRAW=2
}

/**
 * Is the game over?
 * 
 * 0: Game continues.
 * 
 * 1: Win.
 * 
 * 2: Draw
 * 
 * @param board Array containing the tiles
 * @returns int representing win state
 */
export const calcWinState = (board: string[]): WinState => {
    const emptyTiles = board.filter(tile => tile.length === 0).length;
    if(emptyTiles === 0) return 2;
    let sideW = sideWin(board);
    let diagW = diagWin(board);
    return sideW || diagW ? 1 : 0;
}

const sideWin = (board: string[]): boolean => {
    for(let i=0; i<3; i++) {
        let currentRow = i*3;
        let rowWin = board[currentRow].length > 0 && (board[currentRow] === board[currentRow + 1] && board[currentRow] === board[currentRow + 2]);

        let currentCol = i;
        let colWin = board[currentCol].length > 0 && (board[currentCol] === board[currentCol + 3] && board[currentCol] === board[currentCol + 6]);

        if(rowWin || colWin) return true;
    }

    return false;
}

const diagWin = (board: string[]): boolean => {
    let diagLeftWin = board[0].length > 0 && (board[0] === board[4] && board[0] === board[8]);
    
    let diagRightWin = board[2].length > 0 && (board[2] === board[4] && board[2] === board[6]);

    return diagLeftWin || diagRightWin;
}