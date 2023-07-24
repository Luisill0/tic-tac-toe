import { Container, Spinner } from 'reactstrap';

import 'scss/css/style.css';

const LoadingPage = (): JSX.Element => (
    <Container fluid
        className='d-flex justify-content-center align-items-center'
        style={{
            height: '100vh'
        }}
    >
        <Spinner
            style={{
                width: '15rem',
                height: '15rem'
            }}
        />
    </Container>
)

export default LoadingPage;