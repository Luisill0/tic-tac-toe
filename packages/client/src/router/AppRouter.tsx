import { StartPage } from "pages";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CreateGameRoute, JoinGameRoute, PlayRoute } from "./routes";

export const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <StartPage /> } />
            <Route path='/create/:room' element={<CreateGameRoute />} />
            <Route path='/join/:room' element={<JoinGameRoute />} />
            <Route path='/play' element={ <PlayRoute /> } />
            <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
    </BrowserRouter>
)