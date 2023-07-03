import { GamePage, StartPage } from "pages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <StartPage /> } />
            <Route path='/game' element={ <GamePage /> } />
            <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
    </BrowserRouter>
)