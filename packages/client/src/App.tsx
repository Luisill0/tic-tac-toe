import { Container } from 'reactstrap';

import { Board, InfoIndicator } from 'components';

import 'scss/css/style.css';
import './App.css';

const App = () => {
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

export default App;
