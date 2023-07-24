import { BoardType, GameMove, Player } from "@tic-tac-toe/shared";
import { WindowDimensions } from '@types';

export type UserContextProps = {
    windowSize: WindowDimensions;
}

export type BoardContextProps = {
    board: BoardType;
    updateBoard: (newBoard: BoardType) => void;
    currentPlayer: Player;
    togglePlayer: (newPlayer?: Player | undefined) => void;
    myPlayer: Player;
    updateMyPlayer: (myPlayer: Player) => void;
    myTurn: boolean,
    updateMyTurn: (myTurn: boolean) => void;
    resetBoard: () => void;
}

export type SocketContextProps = {
    connect: () => void;
    createRoom: (roomId: string) => void;
    joinRoom: (roomId: string) => void;
    sayHello: () => void;
    emitMove: (move: GameMove) => void;
    currentSocketRoom: string | null;
    resetSocketRoom: () => void;
}