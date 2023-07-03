import { useContext, useEffect } from 'react';
import { Container } from 'reactstrap';

import { Board, InfoIndicator } from 'components';

import { SocketContextProps } from '@types';
import { SocketContext } from 'context';

import 'scss/css/style.css';
import 'styles/GamePage.css';

const GamePage = () => {
  const { connect } = useContext(SocketContext) as SocketContextProps;

  useEffect(() => {
    connect();
  }, [connect])

  return (
    <Container
      fluid
      id='page-container'
      className='p-0 text-center'
    >
      <InfoIndicator />
      <Board />
    </Container>
  );
}

export default GamePage;
