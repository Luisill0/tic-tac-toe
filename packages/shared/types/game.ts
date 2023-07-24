import { Player } from "./players";

export type MoveEmit = {
    move: GameMove;
    room: string;
}

export type GameMove = {
    position: number;
    player: Player;
}