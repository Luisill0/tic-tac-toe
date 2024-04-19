import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Container } from 'reactstrap';

import { BoardType, Player } from '@tic-tac-toe/shared';

import { BoardContextProps, SocketContextProps } from '@types';
import { BoardContext, SocketContext } from 'context';

import { calcWinState, WinState } from '@helpers/board';

import { Board, InfoIndicator } from 'components';

import 'scss/css/style.css';
import 'styles/GamePage.css';

type GamePageProps = {
  online?: boolean;
  room?:string;
  myPlayer: Player;
}

const GamePage = ({online, room, myPlayer}: GamePageProps) => {
  const { board, updateBoard, currentPlayer, updateMyTurn, updateMyPlayer, togglePlayer } = useContext(BoardContext) as BoardContextProps;
  const { emitMove } = useContext(SocketContext) as SocketContextProps;

  useEffect(() => {
    if(online) {
      updateMyPlayer(myPlayer);
      updateMyTurn(myPlayer === currentPlayer);
    }
  }, [])

  if(online && !room) return <Navigate to='/' />

  const onBoardChange = (tile: number) => {
    let newBoard = [...board] as BoardType;
    newBoard[tile] = currentPlayer;
    updateBoard(newBoard);

    if(online) {
      updateMyTurn(false);
      emitMove({position: tile, player: currentPlayer});
    }

    if(calcWinState(newBoard) === WinState.CONTINUE) togglePlayer();
  }

  return (
    <Container
      fluid
      id='page-container'
      className='p-0 text-center'
    >
      <InfoIndicator />
      <Board
        board={board}
        online={online}
        onBoardChange={onBoardChange}
      />
    </Container>
  );
}

export default GamePage;
