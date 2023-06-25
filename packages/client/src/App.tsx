import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container } from 'reactstrap';

import { Board, InfoIndicator } from 'components';

import { SocketContextProps } from '@types';
import { SocketContext } from 'context';

import 'scss/css/style.css';
import './App.css';

const App = () => {
  const {sayHello} = useContext(SocketContext) as SocketContextProps;
  const [response, setResponse] = useState<string>('');

  useEffect(() => {
    axios.get('http://localhost:8000')
      .then((res) => setResponse(res.data + '. API working!'))
      .catch((err) => console.log(err));
  })

  return (
    <Container
      fluid
      id='page-container'
      className='p-0 text-center'
    >
      <InfoIndicator />
      <Board />
      {response}
      <Button
        color='primary'
        onClick={sayHello}
      >
        Say Hello
      </Button>
    </Container>
  );
}

export default App;
