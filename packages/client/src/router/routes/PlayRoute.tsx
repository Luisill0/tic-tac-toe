import { useContext, useEffect, useState } from "react";

import { BoardContextProps } from "@types";
import { BoardContext } from "context";
import { GamePage, LoadingPage } from "pages";

const PlayRoute = (): JSX.Element => {
    const { resetBoard } = useContext(BoardContext) as BoardContextProps;
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        resetBoard();
        setLoading(false);
    }, []);

    if(loading) return <LoadingPage />

    return <GamePage myPlayer='X' />;
}

export default PlayRoute;