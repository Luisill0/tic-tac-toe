import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { BoardContextProps, SocketContextProps } from "@types";
import { BoardContext, SocketContext } from "context";

import { GamePage, LoadingPage } from "pages";

const JoinGameRoute = (): JSX.Element => {
    const { resetBoard } = useContext(BoardContext) as BoardContextProps;
    const { connect, joinRoom, currentSocketRoom, resetSocketRoom } = useContext(SocketContext) as SocketContextProps;
    const { room } = useParams();
    const [connected, setConnected] = useState<boolean>(false);
    const [waiting, setWaiting] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        resetBoard();
        resetSocketRoom();
        setLoading(false);
    }, []);

    if(!room) return <Navigate to='/' />

    if(!connected) {
        connect();
        setConnected(true);
    }

    if(connected && !waiting) {
        joinRoom(room);
        setWaiting(true);
    }

    if(currentSocketRoom && !loading && waiting) {
        return (
            <GamePage
                myPlayer='O' 
                online={true}
                room={currentSocketRoom}
            />
        )
    }

    return <LoadingPage />;
}

export default JoinGameRoute;