import { useNavigate } from "react-router-dom"
import { Button, Container } from "reactstrap"

const StartPage = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <Container
            fluid
        >
            <span
                className='fs-1'
            >
                Tic-Tac-Toe
            </span>
            <br/>
            <Button
                color='primary'
                className='fs-1'
                onClick={() => navigate('/game')}
            >
                Play
            </Button>
        </Container>
    )
}

export default StartPage;