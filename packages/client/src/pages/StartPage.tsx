import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Button, Container } from "reactstrap"

import { createRoomId } from "@helpers/room";
import { JoinGameModal } from "components";
import { SocketContext } from "context";
import { SocketContextProps } from "@types";

const StartPage = (): JSX.Element => {
    const { joinRoom } = useContext(SocketContext) as SocketContextProps;
    const [modal, setModal] = useState<boolean>(false);

    const navigate = useNavigate();

    const playLocally = () => {
        navigate('/play');
    }

    const createRoom = () => {
        const roomId = createRoomId();
        navigate(`/create/${roomId}`);
    }

    const toggle = () => {
        setModal(!modal);
    }

    const submitJoin = (room: string) => {
        joinRoom(room);
        navigate(`/join/${room}`);
    }
    
    return (
        <Container
            fluid
            className='text-center'
        >
            <span
                className='fs-1'
            >
                Tic-Tac-Toe
            </span>
            <Container fluid
                className='d-flex flex-column align-items-center'
            >
                <Button
                    color='primary'
                    className='fs-1 w-50 my-5'
                    onClick={playLocally}
                >
                    Play Locally
                </Button>
                <Button
                    color='primary w-50 mb-5'
                    className='fs-1'
                    onClick={createRoom}
                >
                    Create Room
                </Button>
                <Button
                    color='primary w-50 mb-5'
                    className='fs-1'
                    onClick={toggle}
                >
                    Join Room
                </Button>
            </Container>
            <JoinGameModal
                isOpen={modal}
                toggle={toggle}
                submit={submitJoin}
                args={{
                    centered: true,
                }}
            />
        </Container>
    )
}

export default StartPage;