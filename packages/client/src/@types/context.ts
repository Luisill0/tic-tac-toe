import { BoardType, Player } from "@tic-tac-toe/shared";
import { WindowDimensions } from "./window";

export type UserContextProps = {
    windowSize: WindowDimensions;
    board: BoardType;
    updateBoard: (newBoard: BoardType) => void;
    currentPlayer: Player;
    togglePlayer: () => void;
}