import React, { PropsWithChildren, useEffect, useState } from "react";

import { UserContextProps, WindowDimensions } from "@types";

import { getInitialWindowSize } from "@helpers/window";

export const UserContext = React.createContext<UserContextProps | null>(null);

export const UserContextProvider = ({children}: PropsWithChildren): JSX.Element => {
    const [windowSize, setWindowSize] = useState<WindowDimensions>(() => getInitialWindowSize());
    
    useEffect(() => {
        window.onresize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
    });
    
    const provider = {
        windowSize
    }

    return (
        <UserContext.Provider value={provider}>
            {children}
        </UserContext.Provider>
    )
}