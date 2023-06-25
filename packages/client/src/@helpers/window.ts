import { WindowDimensions } from "@types";

export const getInitialWindowSize = (): WindowDimensions => ({
    width: window.innerWidth,
    height: window.innerHeight
})