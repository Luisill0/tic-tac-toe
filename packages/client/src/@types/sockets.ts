import { GameMove } from "@tic-tac-toe/shared";

export type SocketContextProps = {
    connect: () => void;
    sayHello: () => void;
    emitMove: (move: GameMove) => void;
}