import React, { PropsWithChildren } from "react";
import { io } from 'socket.io-client';

import { SocketContextProps } from "@types";

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? window.location : 'http://localhost:8000';

export const SocketContext = React.createContext<SocketContextProps | null>(null);

export const SocketContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const socket = io(URL);

    const sayHello = () => {
        socket.emit('hello', 'test');
    }

    const provider = {
        sayHello
    }

    return (
        <SocketContext.Provider value={provider}>
            {children}
        </SocketContext.Provider>
    )
}