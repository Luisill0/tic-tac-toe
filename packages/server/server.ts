import http from 'http';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env['PORT'];
if(!PORT) throw new Error('port is not defined');

import { app } from "./app";

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})