import { TextWithCopy } from 'components';
import { Container } from 'reactstrap';

import 'scss/css/style.css';
import 'styles/WaitingPage.css';

type WaitingPageProps = {
    room: string;
}

const WaitingPage = ({room}: WaitingPageProps) => {

    return (
        <Container fluid
            id='waiting-page'
            className='d-flex flex-column align-items-center justify-content-center'
        >
            <div className="loading pt-5 mb-5">Waiting for oponent...</div>
            <div className='fs-3 fw-bold'>Your room ID is:</div>
            <TextWithCopy 
                text={room}
                size={{w: '700px', h: '150px'}}
            />
        </Container>
    )
}

export default WaitingPage;